---
layout: post
date: "2016-02-10 20:15 +0000"
author: Hywel
categories: drupal
excerpt: ""
meta: "Drupal 8 Migration Upgrade from Drupal 6 "
published: true
title: "A Website Journey from Drupal 6 to Drupal 8 - Part 3"
---



## Drupal 6 Modules

A review of the currently installed modules on the Drupal 6 showed that most are now part of Drupal 8 Core, in particular:

- [Contact Forms](https://www.ostraining.com/blog/drupal/drupal-8-contact-forms/) instead of Webform
- [Content Construction Kit (CCK)](https://www.drupal.org/node/2606836) is now in Core Drupal 8

The obvious module that stands out is the [XML Sitemap](https://www.drupal.org/project/simple_sitemap).

To install that module, again using Drush

{% highlight bash %}
cd /Users/hywel/Sites/drupal8
drush dl simple_sitemap
{% endhighlight %}

![drush dl simple_sitemap]({{site.baseurl}}/assets/2016-02-10/drush dl simple_sitemap.png)

{% highlight bash %}
cd /Users/hywel/Sites/drupal8
drush en simplesitemap
{% endhighlight %}

![drush en simplesitemap]({{site.baseurl}}/assets/2016-02-10/drush en simplesitemap.png)

**Issue Note that the command was simplesitemap not simple_sitemap**

## MAMP Nginx 404 error - Switch to Apache

I have had to switch, hopefully temporarily to using the Apache Server with MAMP because although the main page (homepage) works fine, all others give 404 errors.

Running Nginx:

![404 drupal page not found mamp with nginx]({{site.baseurl}}/assets/2016-02-10/404 drupal page not found mamp with nginx .png)

Running Apache:

![drupal user login page mamp with apache]({{site.baseurl}}/assets/2016-02-10/drupal user login page mamp with apache.png)
