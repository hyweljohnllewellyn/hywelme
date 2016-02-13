---
layout: post
date: "2016-02-11 19:42 +0000"
author: Hywel
categories: drupal
excerpt: ""
meta: " Drupal 8 migration upgrade full HTML filter null  text format"
published: true
title: "A Website Upgrade from Drupal 6 to Drupal 8 - Part 4"
---


## [Preparing an upgrade to Drupal 8](https://www.drupal.org/node/2350603)

According to this link, the requirements are:

> A fresh installation of Drupal 8 with the core module Migrate Drupal enabled.

> The Migrate Upgrade module installed and enabled on the Drupal 8 site.

> If you plan on running the upgrade from Drush, you’ll need Drush 8.

These are covered in [Part 1](http://www.hywel.me/drupal/2016/02/06/a-website-upgrade-from-drupal-6-to-drupal-8-part-1.html) and [Part 2](http://www.hywel.me/drupal/2016/02/07/a-website-upgrade-from-drupal-6-to-drupal-8-part-2.html). Screenshot showing enabled modules in Drupal 8:

![drupal 8 migrate modules enabled]({{site.baseurl}}/assets/2016-02-11/drupal 8 migrate modules enabled.jpg)

> Access to the Drupal 6 or 7 database from the host where your new Drupal 8 site is.

> Access to the source site's files.

The Drupal upgrade will be carried out locally on a Mac.  The Drupal 6 database and files are locally installed.

> Enable required modules.  The migration process does not install modules on the Drupal 8 destination site and only migrations relevant for modules installed on both the source and destination site are run. Therefore prior to running the migration, you need to enable all modules on the Drupal 8 site for which you want configuration and content upgraded from the source site

The above statement is a bit confusing, and suggests that it is necessary to identify all Modules used in Drupal 6, their equivalent in Drupal 8 and install them in Drupal 8 prior to upgrade.  In [Part 3](http://www.hywel.me/drupal/2016/02/10/a-website-upgrade-from-drupal-6-to-drupal-8-part-3.html), I carried our a cursory analysis of the modules and installed an XML sitemap module.

## [Executing an upgrade using Drush](https://www.drupal.org/node/2350651)

> For more control, you will probably want to pass the --configure-only option to migrate-upgrade, so it will only perform the first step of creating the migrations.

{% highlight bash %}
cd /Users/hywel/Sites/drupal8
drush migrate-upgrade --legacy-db-url=mysql://hartleyvoicescms:MTwGCDT5Ah74smSW@localhost/hartleyvoicescms --legacy-root=/Users/hywel/Sites/hartleyvoicescms --configure-only
{% endhighlight %}

Nothing much happened, it just returned to the prompt.  To some extent, this was expected as the configure-only option was used.  So next was:

{% highlight bash %}
drush migrate-status
{% endhighlight %}

This was a bit more interesting and summarised what migration was available from Drupal 6.

![drush 8 migrate status from drupal 6]({{site.baseurl}}/assets/2016-02-11/drush 8 migrate status from drupal 6.png)

Import the whole list of possible migrations:

{% highlight bash %}
cd /Users/hywel/Sites/drupal8
drush migrate-import --all
{% endhighlight %}

![drush migrate-import all]({{site.baseurl}}/assets/2016-02-11/drush migrate-import all.png)

## Drupal 8 First Upgrade Attempt: Some Text Format Issues

The _Missing filter plugin: filternull_ was shown several times during the import process.  

Here is the homepage following the first part of the migrate and update to Drupal 8:

![first migrate result homepage]({{site.baseurl}}/assets/2016-02-11/first migrate result homepage.png)

As you can see, some of the menu structure exists, but the layout and body text was not showing at all.

**Issue On investigation seems that a second Full_HTML Text format was created during the import that had a broken text filter.**

As shown, there are two vversions of the Full HTML text format:
![full HTML imported from drupal 6]({{site.baseurl}}/assets/2016-02-11/full HTML imported from drupal 6.png)

The Full HTML text format imported from Drupal 6 was showing a filter null error:
![filter null error from Drupal 6 text format]({{site.baseurl}}/assets/2016-02-11/filter null error from drupal 6 text format.png)

So the Drupal 6 filter was disabled:
![disable the full html Drupal 6 filter confirm]({{site.baseurl}}/assets/2016-02-11/disable the full html drupal 6 filter confirm.png)

After selecting the Drupal 8 Full HTML filter:
![select drupal 8 full html text filter]({{site.baseurl}}/assets/2016-02-11/select drupal 8 full html text filter.png)

The text was showing formattet correctly:
![drupal 8 full html text filter working]({{site.baseurl}}/assets/2016-02-11/drupal 8 full html text filter working.png)

As shown the Drupal 6 filter in node body table was called full_html 1:
![full_html1 in the node body table]({{site.baseurl}}/assets/2016-02-11/full_html1 in the node body table.png)

### Remove the Drupal 6 Text Format and Update the Drupal 8 Text format to Full HTML

Running the following SQL to update remove the full_html 1 filter imported from Drupal 6 and replace with full_html in Drupal 8.  

{% highlight bash %}
cd /Users/hywel/Sites/drupal8
update `node__body` set body_format ='full_html';
update `node__field_sidebar` set field_sidebar_format ='full_html';
update `node__field_sidebar2` set field_sidebar2_format ='full_html';
update  `node_revision__body` set body_format ='full_html';
update `node_revision__field_sidebar` set field_sidebar_format ='full_html';
update `node_revision__field_sidebar2` set field_sidebar2_format ='full_html';
{% endhighlight %}

Followed by rebuilding the Drupal 8 cache :

{% highlight bash %}
cd /Users/hywel/Sites/drupal8
drush cache-rebuild
{% endhighlight %}
