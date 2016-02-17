---
layout: post
date: "2016-02-17 20:02 +0000"
author: Hywel
categories: ""
excerpt: ""
meta: ""
published: true
title: "A Website Upgrade from Drupal 6 to Drupal 8 - Part 5"
---


## Fixing Final Migration Issues 

So, this will be the final post specifically related to the migration of data and files from Drupal 6 to Drupal 8.

Further posts will be focussed on Drupal 8, specifically the Themes and Templates and any specific customisation that may be required.

Before that, There are some migration issues to resolve.


### Audio Files Linked to Nodes in Drupal 6 Did not Migrate to Drupal 8

I am dissapointed with this specific issue, mainly as I was expecting more from the drupal-upgrade functionality from Drupal 6 to 8.

I have tried searching the forums online but as far as I can tell, unless my method was at fault the migration of files linked to nodes under d6_upload is not supported at time of writing this post.

Other than raising a support ticket, I decided to identify the Drupal 8 tables that were needed and write a SQL script using PHP to migrate the data.

To make the process a bit simpler, first the Drupal 6 'upload' table was exported and imported tto the Drupal 8 Database - named _'d6upload'_ 

Then a File named d6_upload_to_d8.php was created in the Drupal 8 root directory with the following:

{% highlight php %}

<?php
$link = mysqli_connect('localhost','username', 'password','drupal8');

// migrate files linked to nodes from Drupal 6 Upload Table Format to Drupal 8 Tables
$filetest ="";
$nodetest ="";
$weight=0;
if ($result = mysqli_query($link, "select fid, nid, vid, description, weight from d6_upload order by 3 desc")) {
   while($row = mysqli_fetch_row($result)){
   $fileid = $row[0];
   $nodeid = $row[1];
   $versionid = $row[2];
   $description = mysqli_real_escape_string($link,$row[3]);

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
