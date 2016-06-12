---
layout: post
date: '2016-06-12 13:18 +0100'
author: Hywel
published: true
title: Migrate a Drupal 6 Website to WordPress 4.5
categories: static site wordpress
meta: drupal 6 to wordpress 4.5 migration
---
## Introduction - CMS Functionality for a Static Site using WordPress

In this post I will be describing the steps to migrate a Drupal 6 website to WordPress 4.5.

Drupal 6 is end of life and other upgrade migration options investigated, have not been successful

- Upgrade to Drupal 8
- Migration to Static Site Generators, Jekyll and Hugo

The key limitations of the previous methods have been 

- Drupal 8  - No (as of writing) support of standard Audio HTML5 tags
- Jekyll and Hugo - Too technical for a normal user 

My goal is to convert the Drupal 6 CMS to a responsive, mobile friendly, static site, that can be easily maintained by a non-technical user.

[WordPress](https://wordpress.org/) has a great user graphical interface for adding content and is in my experience is very easy to install, maintain and upgrade.  Note that I not referring to [Wordpress.com](https://wordpress.com/), the on-line website service. 


In upcoming posts I will describe some other aspects of the upgrade, including:

- Use a WordPress plug-in to convert the site to static files (HTML and javascript)
- Host the static files on GitHub
- Create a WordPress Child Theme to customise the look and feel 
- Create a contact us page using Goggle App engine - to send enquiries via email

Ready?....

##  Migrate the Website Database from Drupal 6 to WordPress 4.5

After some research, I found the following resource by Scott Anderson in 2010 for [migrating a blog from Drupal to WordPress 3.0](http://blog.room34.com/archives/4530) 

Primarily it provides a SQL script, which I used as a basis and modified.   My modified script [drupal-to-wordpress.sql can be found at GitHub](https://github.com/hyweljohnllewellyn/hywelme/blob/gh-pages/assets/2016-06-12/drupal-to-wordpress.sql) 

For your use please:

1. Update my Drupal and WordPress database names 'drupal_wp' and 'wordpress_wp' with your own
2. Update the Drupal content types with your own..see line 80 in the sql..

{% highlight sql %}
	# Add more Drupal content types below if applicable.
	WHERE n.type IN ('talent', 'page', 'testimonial', 'webform')
{% endhighlight %}


### Step 1 Export the Production Drupal 6 Database to a Local MySQL

Generally, it is a good idea to  develop using a local version of data and files to protect production.  Using Sequel Pro http://www.sequelpro.com/, log into the production data base and Export as a SQL file.
Note Ensure that the SQL is unzipped.

Note that I have created a local instance of the database called 'drupal_wp' with password 'n3FKn32TDPBySBYD' and then imported the production sql data

### Step 2 Create your local WordPress Database and Install WordPress

As a pre-requisite, I installed  MAMP](https://www.mamp.info/en/) and the included [phpMyAdmin](https://www.phpmyadmin.net/).

From phoMyAdmin, add a MySQL user and create database with all privileges.  As there are many resources that already describe this, I won't go into details.

But the easiest is to add new user with 'Create database with same name and grant all privileges' option. 

![phpmyadmin create user with grant privileges]({{site.baseurl}}/assets/2016-06-12/phpmyadmin create user with grand all privileges.jpg)

My WordPress mySQL database is 'wordpress_wp' with password 'hB47Sn5mVbEtANRT'.

Now, create a folder locally for your WordPress Site , mine is 'drupal2wordpress'.

I will use the command line to download and install the WordPress files.  Run each command in turn....  

{% highlight bash %}
~/Sites/drupal2wordpress> brew install wget
~/Sites/drupal2wordpress> wget https://wordpress.org/latest.tar.gz
~/Sites/drupal2wordpress> tar xzf latest.tar.gz
~/Sites/drupal2wordpress> mv wordpress/* .
~/Sites/drupal2wordpress> rm latest.tar.gz
~/Sites/drupal2wordpress> rmdir wordpress
{% endhighlight %}

_Note that i needed to install wget, if you already have this installed you do not need this command._

From MAMP, ensure that your WordPress site 'document root' folder is selected, in this case 'drupal2wordpress'

![MAMP document root]({{site.baseurl}}/assets/2016-06-12/MAMP document root.jpg)

Open a web browser and go to the local WordPress URL, typically http://localhost:8888/

Enter the Database Credentials

![wordpress installation database credentials]({{site.baseurl}}/assets/2016-06-12/wordpress database credentials.jpg)

Complete the WordPress Installation..details covered much better on the web!

My WordPress user name is 'hywel' with password 'bmq8ktFeuXK52S)Zm3'

![wordpress user name]({{site.baseurl}}/assets/2016-06-12/wordpress user name.jpg)

### Step 3 Run the Drupal 6 To Wordpress 4.5 Database Conversion SQL

Using the [drupal-to-wordpress.sql from my GitHub](https://github.com/hyweljohnllewellyn/hywelme/blob/gh-pages/assets/2016-06-12/drupal-to-wordpress.sql) and ensuring the database names and drupal node types are updated.

Paste the script into a SQL application and run (I'm using phpmyadmin):

![drupal 6 to wordpress 4 conversion sql]({{site.baseurl}}/assets/2016-06-12/drupal 6 to wordpress 4 conversion sql.jpg)

Drupal 6 content in the WordPress 4.5 posts table:

![drupal 6 content in the wordpress post table]({{site.baseurl}}/assets/2016-06-12/drupal 6 content in the wordpress post table.jpg)

Navigate to http://localhost:8888/ shows a Drupal 6 post converted to a WordPress 4.5 post!

![drupal 6 post converted to wordpress 4]({{site.baseurl}}/assets/2016-06-12/drupal 6 post converted to wordpress 4.jpg)

## Summary

Well that's it, the Drupal 6 nodes have been migrated to WordPress 4.5 Posts.

However, some things that are still required:

- Update internal links that may still be pointing to Drupal nodes
- Media files (images to be uploaded to WordPress)
- Review /Update post types (pages vs. posts)
- Update post excerpts

I will not be covering these points explicitly in future posts, unless there are requests! But I will describe:

- Using a WordPress plug-in to convert the site to static files (HTML and javascript)
- Host the WordPress static files on GitHub
- Create a WordPress Child Theme and style.css to customise the look and feel 
- Create a contact us page using Goggle App engine - to send enquiries via email

let me know which to cover first!