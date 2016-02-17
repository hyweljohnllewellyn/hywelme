---
layout: post
date: "2016-02-17 20:02 +0000"
author: Hywel
categories: drupal
excerpt: ""
meta: Fixing Drupal 8 Migration Upgrade from Drupal 6 d6_upload views  block layout
published: true
title: "A Website Upgrade from Drupal 6 to Drupal 8 - Part 5"
---


## Fixing Final Migration Issues

So, this will be the final post specifically related to the migration of data and files from Drupal 6 to Drupal 8.

Further posts will be focussed on Drupal 8, specifically the Themes and Templates and any specific customisation that may be required.

Before that, There are some migration issues to resolve.


### Audio Files Linked to Nodes in Drupal 6 Did not Migrate to Drupal 8

I am disappointed with this specific issue, mainly as I was expecting more from the drupal-upgrade functionality from Drupal 6 to 8.

I have tried searching the forums online but as far as I can tell, unless my method was at fault the migration of files linked to nodes under d6_upload is not supported at time of writing this post.

Other than raising a support ticket, I decided to identify the Drupal 8 tables that were needed and write a SQL script using PHP to migrate the data.

To make the process a bit simpler, first the Drupal 6 'upload' table was exported and imported to the Drupal 8 Database - named _'d6upload'_

Then a File named d6_upload_to_d8.php was created in the Drupal 8 root directory with the following:

{% highlight php %}

<?php
/* migrate files linked to nodes from Drupal 6 Upload Table to Drupal 8 */

/* Connect to the Drupal 8 Database */
$link = mysqli_connect('localhost','username', 'password','drupal8');

$filetest ="";
$nodetest ="";
$weight=0;
/* Read the content of the Drupal 6 Upload Table */
if ($result = mysqli_query($link, "select fid, nid, vid, description, weight from d6_upload order by 3 desc")) {
   while($row = mysqli_fetch_row($result)){
   $fileid = $row[0];
   $nodeid = $row[1];
   $versionid = $row[2];
   $description = mysqli_real_escape_string($link,$row[3]);

/* Handle Drupal 6 node revisions and weight 8 */
   if($nodetest ==""){$nodetest = $nodeid;}
   if($nodetest != $nodeid){$weight=0;}
   if($filetest ==""){$filetest = $fileid;}
   if($filetest != $fileid && $nodetest == $nodeid){$weight = $weight +1;}
   else{$weight=0;}
   $filetest = $fileid;
   $nodetest = $nodeid;

echo "file" .$fileid;
echo ", node" .$nodeid;
echo "<p>";

$query1 = 'insert into file_usage (fid,module, type, id, count) values ('.$fileid.',"file","node",'.$nodeid.',1)';
mysqli_query($link,$query1);

$query2 = 'insert into node__upload (bundle, deleted,entity_id, revision_id, langcode, delta, upload_target_id, upload_display, upload_description) values ("page",0,'.$nodeid.','.$versionid.',"und", '.$weight.','.$fileid.',1,"'.$description.'")';
mysqli_query($link,$query2);

$query3 = 'insert into node_revision__upload (bundle, deleted,entity_id, revision_id, langcode, delta, upload_target_id, upload_display, upload_description) values ("page",0,'.$nodeid.','.$versionid.',"und", '.$weight.','.$fileid.',1,"'.$description.'")';
mysqli_query($link,$query3);

}
}
/* close connection */
mysqli_close($link);
?>
{% endhighlight %}

The main considerations in this code was converting the Drupal 6 Revisions and page node weight to the Drupal 8 equivalent.

The script was run by entering http://localhost:8888/d6_upload_to_d8.php in the browser.

### Configuring Drupal 8 File Upload Page Content Type Fields

Within the Structure >> Content Types >> Page, a new Field 'file upload' was created to allow a Drupal 8 Content Author to upload specified files (mainly audio)

![add drupal 8 page field file upload step1]({{site.baseurl}}/assets/2016-02-17/add drupal 8 page field file upload step1.png)

![add drupal 8 page field file upload step2]({{site.baseurl}}/assets/2016-02-17/add drupal 8 page field file upload step2.png)

![create file upload content type]({{site.baseurl}}/assets/2016-02-17/create file upload content type.jpg)

So there were now the following Page Fields - _File Upload, Sidebar or Sidebar2_ :

![drupal 8 page fields.png]({{site.baseurl}}/assets/2016-02-17/drupal 8 page fields.png)

However, these were not being shown on the webpage.  Again, this may be a specific issue or limitation of the migration, though to resolve this Drupal 8 Views need to be created and added to the Block Layout.

### Creating Drupal 8 Views to display additional Page Fields

![add drupal 8 view step 1]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view step 1.png)

![add drupal 8 view step 3]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view step 3.png)

![add drupal 8 view step 4]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view step 4.png)

![add drupal 8 view step 5]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view step 5.png)

![add drupal 8 view step 6]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view step 6.png)

![add drupal 8 view step 7]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view step 7.png)

![add drupal 8 view step 8]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view step 8.png)

![add drupal 8 view step 9]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view step 9.png)

![add drupal 8 view step 10]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view step 10.png)

![add drupal 8 view step 11]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view step 11.png)

![add drupal 8 view step 12]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view step 12.png)

![add drupal 8 view step 13]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view step 13.png)

### Adding Drupal 8 Views to a Block Layout  

![add drupal 8 view to block step 1]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view to block step 1.png)

![add drupal 8 view to block step 2]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view to block step 2.png)

![add drupal 8 view to block step 3]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view to block step 3.png)

![add drupal 8 view to block step 4]({{site.baseurl}}/assets/2016-02-17/add drupal 8 view to block step 4.png)
