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

Primarily it provides a SQL script, which I used as a basis and modified.   My modified script drupal-to-wordpress.sql can be found at GitHub 

For your use please:

1. Update the Drupal and WordPress database names with your own
2. Update the Drupal content types with your own..see line 80 in the sql..

{% highlight sql %}
	# Add more Drupal content types below if applicable.
	WHERE n.type IN ('talent', 'page', 'testimonial', 'webform')
{% endhighlight %}

### Step 1 Create your local WordPress Database and Install WordPress

As a pre-requisite, I installed  MAMP](https://www.mamp.info/en/) and the included [phpMyAdmin](https://www.phpmyadmin.net/).

From phoMyAdmin, add a MySQL user and create database with all privileges:

![phpmyadmin add new mysql user]({{site.baseurl}}/assets/2016-06-12/phpmyadmin add new mysql user.jpg)


I will use the command 

