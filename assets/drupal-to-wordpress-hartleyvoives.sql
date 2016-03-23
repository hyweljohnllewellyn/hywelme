# DRUPAL-TO-WORDPRESS CONVERSION SCRIPT

# Changelog

# 07.29.2010 - Updated by Scott Anderson / Room 34 Creative Services http://blog.room34.com/archives/4530
# 02.06.2009 - Updated by Mike Smullin http://www.mikesmullin.com/development/migrate-convert-import-drupal-5-to-wordpress-27/
# 05.15.2007 - Updated by D’Arcy Norman http://www.darcynorman.net/2007/05/15/how-to-migrate-from-drupal-5-to-wordpress-2/
# 05.19.2006 - Created by Dave Dash http://spindrop.us/2006/05/19/migrating-from-drupal-47-to-wordpress/

# This assumes that WordPress and Drupal are in separate databases, named 'wordpress' and 'drupal'.
# If your database names differ, adjust these accordingly.

# Empty previous content from WordPress database.
TRUNCATE TABLE hartleyvoices_wp.wp_comments;
TRUNCATE TABLE hartleyvoices_wp.wp_links;
TRUNCATE TABLE hartleyvoices_wp.wp_postmeta;
TRUNCATE TABLE hartleyvoices_wp.wp_posts;
TRUNCATE TABLE hartleyvoices_wp.wp_term_relationships;
TRUNCATE TABLE hartleyvoices_wp.wp_term_taxonomy;
TRUNCATE TABLE hartleyvoices_wp.wp_terms;


# TAGS
# Using REPLACE prevents script from breaking if Drupal contains duplicate terms.
REPLACE INTO hartleyvoices_wp.wp_terms
	(term_id, `name`, slug, term_group)
	SELECT DISTINCT
		d.tid, d.name, REPLACE(LOWER(d.name), ' ', '_'), 0
	FROM hartleyvoices.term_data d
	INNER JOIN hartleyvoices.term_hierarchy h
		USING(tid)
	INNER JOIN hartleyvoices.term_node n
		USING(tid)
	WHERE (1
	 	# This helps eliminate spam tags from import; uncomment if necessary.
	 	# AND LENGTH(d.name) < 50
	)
;

INSERT INTO hartleyvoices_wp.wp_term_taxonomy
	(term_id, taxonomy, description, parent)
	SELECT DISTINCT
		d.tid `term_id`,
		'post_tag' `taxonomy`,
		d.description `description`,
		h.parent `parent`
	FROM hartleyvoices.term_data d
	INNER JOIN hartleyvoices.term_hierarchy h
		USING(tid)
	INNER JOIN hartleyvoices.term_node n
		USING(tid)
	WHERE (1
	 	# This helps eliminate spam tags from import; uncomment if necessary.
	 	# AND LENGTH(d.name) < 50
	)
;

# POSTS
# Keeps private posts hidden.
INSERT INTO hartleyvoices_wp.wp_posts
	(id, post_author, post_date, post_content, post_title, post_excerpt,
	post_name, post_modified, post_type, `post_status`)
	SELECT DISTINCT
		n.nid `id`,
		n.uid `post_author`,
		FROM_UNIXTIME(n.created) `post_date`,
		r.body `post_content`,
		n.title `post_title`,
		r.teaser `post_excerpt`,
		IF(SUBSTR(a.dst, 11, 1) = '/', SUBSTR(a.dst, 12), a.dst) `post_name`,
		FROM_UNIXTIME(n.changed) `post_modified`,
		n.type `post_type`,
		IF(n.status = 1, 'publish', 'private') `post_status`
	FROM hartleyvoices.node n
	INNER JOIN hartleyvoices.node_revisions r
		USING(vid)
	LEFT OUTER JOIN hartleyvoices.url_alias a
		ON a.src = CONCAT('node/', n.nid)
	# Add more Drupal content types below if applicable.
	WHERE n.type IN ('talent', 'page', 'testimonial', 'webform')
;

# CATEGORIES
# These are NEW categories, not in hartleyvoices. Add as many sets as needed.
INSERT IGNORE INTO hartleyvoices_wp.wp_terms (name, slug)
	VALUES
	('our-singers', 'our-singers'),
	('our-instrumentalists', 'our-instrumentalists'),
	('testimonial', 'testimonial')
;

# Set category names to title case (in case term already exists [as a tag] in lowercase).
UPDATE hartleyvoices_wp.wp_terms SET name = 'our-singers' WHERE name = 'our-singers';
UPDATE hartleyvoices_wp.wp_terms SET name = 'our-instrumentalists' WHERE name = 'our-instrumentalists';
UPDATE hartleyvoices_wp.wp_terms SET name = 'testimonial' WHERE name = 'testimonial';

# Add categories to taxonomy.
INSERT INTO hartleyvoices_wp.wp_term_taxonomy (term_id, taxonomy)
	VALUES
	((SELECT term_id FROM hartleyvoices_wp.wp_terms WHERE slug = 'our-singers'), 'category'),
	((SELECT term_id FROM hartleyvoices_wp.wp_terms WHERE slug = 'our-instrumentalists'), 'category'),
	((SELECT term_id FROM hartleyvoices_wp.wp_terms WHERE slug = 'testimonial'), 'category')
;



# Auto-assign posts to category.
# You'll need to work out your own logic to determine strings/terms to match.
# Repeat this block as needed for each category you're creating.
INSERT IGNORE INTO hartleyvoices_wp.wp_term_relationships (object_id, term_taxonomy_id)
	SELECT DISTINCT p.ID AS object_id,
		(SELECT tt.term_taxonomy_id
		FROM hartleyvoices_wp.wp_term_taxonomy tt
		INNER JOIN hartleyvoices_wp.wp_terms t USING (term_id)
		WHERE t.slug = 'our-singers'
		AND tt.taxonomy = 'category') AS term_taxonomy_id
	FROM hartleyvoices_wp.wp_posts p
	WHERE p.post_type = 'talent'
;

INSERT IGNORE INTO hartleyvoices_wp.wp_term_relationships (object_id, term_taxonomy_id)
	SELECT DISTINCT p.ID AS object_id,
		(SELECT tt.term_taxonomy_id
		FROM hartleyvoices_wp.wp_term_taxonomy tt
		INNER JOIN hartleyvoices_wp.wp_terms t USING (term_id)
		WHERE t.slug = 'testimonial'
		AND tt.taxonomy = 'category') AS term_taxonomy_id
	FROM hartleyvoices_wp.wp_posts p
	WHERE p.post_type = 'testimonial'
;

# Update category counts.
UPDATE hartleyvoices_wp.wp_term_taxonomy tt
	SET `count` = (
		SELECT COUNT(tr.object_id)
		FROM hartleyvoices_wp.wp_term_relationships tr
		WHERE tr.term_taxonomy_id = tt.term_taxonomy_id
	)
;


# Fix post type; http://www.mikesmullin.com/development/migrate-convert-import-drupal-5-to-wordpress-27/#comment-17826
# Add more Drupal content types below if applicable.
UPDATE hartleyvoices_wp.wp_posts
	SET post_type = 'post'
	WHERE post_type IN ('talent', 'testimonial');

UPDATE hartleyvoices_wp.wp_posts
	SET post_type = 'page'
	WHERE post_type IN ('webform');

# Set all pages to "pending".
# If you're keeping the same page structure from Drupal, comment out this query
# and the new page INSERT at the end of this script.
UPDATE hartleyvoices_wp.wp_posts SET post_status = 'pending' WHERE post_type = 'page';

# POST/TAG RELATIONSHIPS
INSERT INTO hartleyvoices_wp.wp_term_relationships (object_id, term_taxonomy_id)
	SELECT DISTINCT nid, tid FROM hartleyvoices.term_node
;

# Update tag counts.
UPDATE hartleyvoices_wp.wp_term_taxonomy tt
	SET `count` = (
		SELECT COUNT(tr.object_id)
		FROM hartleyvoices_wp.wp_term_relationships tr
		WHERE tr.term_taxonomy_id = tt.term_taxonomy_id
	)
;


# Fix taxonomy; http://www.mikesmullin.com/development/migrate-convert-import-drupal-5-to-wordpress-27/#comment-27140
UPDATE IGNORE hartleyvoices_wp.wp_term_relationships, hartleyvoices_wp.wp_term_taxonomy
	SET hartleyvoices_wp.wp_term_relationships.term_taxonomy_id = hartleyvoices_wp.wp_term_taxonomy.term_taxonomy_id
	WHERE hartleyvoices_wp.wp_term_relationships.term_taxonomy_id = hartleyvoices_wp.wp_term_taxonomy.term_id
;

# OPTIONAL ADDITIONS -- REMOVE ALL BELOW IF NOT APPLICABLE TO YOUR CONFIGURATION



# Miscellaneous clean-up.
# There may be some extraneous blank spaces in your Drupal posts; use these queries
# or other similar ones to strip out the undesirable tags.
UPDATE hartleyvoices_wp.wp_posts
	SET post_content = REPLACE(post_content,'<p>&nbsp;</p>','')
;
UPDATE hartleyvoices_wp.wp_posts
	SET post_content = REPLACE(post_content,'<p class="italic">&nbsp;</p>','')
;


# Fix post_name to remove paths.
# If applicable; Drupal allows paths (i.e. slashes) in the dst field, but this breaks
# WordPress URLs. If you have mod_rewrite turned on, stripping out the portion before
# the final slash will allow old site links to work properly, even if the path before
# the slash is different!
UPDATE hartleyvoices_wp.wp_posts
	SET post_name =
	REVERSE(SUBSTRING(REVERSE(post_name),1,LOCATE('/',REVERSE(post_name))-1))
;

