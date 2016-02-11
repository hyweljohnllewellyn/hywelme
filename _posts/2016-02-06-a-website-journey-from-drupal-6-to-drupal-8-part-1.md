---
layout: post
date: "2016-02-06 18:53 +0000"
author: Hywel
categories: drupal
excerpt: ""
meta: Migrate Drupal 8 Migration Upgrade  Drupal 6 end of life local drupal development environment
published: true
title: "A Website Journey from Drupal 6 to Drupal 8 - Part 1"
---



## Why? - [Drupal 8](https://www.drupal.org/news/drupal-8.0.0-released)

I hope to capture the essence and learnings of migrating a website from Drupal 6 to Drupal 8, which is formally released as production ready.

I expect this journey to have issues along the way as I am a novice Drupal administrator and have no experience in Theming.  Some key considerations during this migration:

- Mobile Friendly Theme
- Google Search Ranking (it is an existing site)
- Audio and Video Playback Capability
- Easy to Maintain Content  

## [Drupal 6 End Of Life](https://www.drupal.org/drupal-6-eol)

> As announced in the Drupal 6 extended support policy, 3 months after Drupal 8 comes out, Drupal 6 will be end-of-life (EOL).

> On February 24th 2016, Drupal 6 will reach end of life and no longer be supported.

> Drupal 8 core provides a Migration path directly from Drupal 6 as an experimental feature, so sites can update directly to Drupal 8 using either a user interface or with Drush.

This improved migration path is one of the main reasons why I have waited for Drupal 8, but by far the main reason is [Google Rankings](https://googlewebmastercentral.blogspot.co.uk/2015/02/finding-more-mobile-friendly-search.html)

> Starting April 21, we will be expanding our use of mobile-friendliness as a ranking signal. This change will affect mobile searches in all languages worldwide and will have a significant impact in our search results. Consequently, users will find it easier to get relevant, high quality search results that are optimized for their devices.

Drupal 8 was designed with mobile devices first in mind, this article by [Axelerant](https://axelerant.com/not-magic-drupal-8-mobile-global-reach/)  describes some of the philosophy behind Drupal 8.  However, Drupal 8 is still in its infancy, so I will be doing my best to find resources during the upgrade, for example
[27 Questions (and Answers) from My First Drupal 8 Site Build](https://www.drupal.org/node/2360331).

## Getting Ready - Installing a Local Development Environment
[Drupal 8 Requirements](https://www.drupal.org/requirements) include a Web server, typically Apache, Database, typically MySQL and PHP.  In order to develop Drupal locally, these need to be available. As I am developing on an Apple Mac Mini, a convenient way to ensure all the dependencies are available are by using a package manager.   The choices for me were either:

1. [MAMP](https://www.mamp.info/en/downloads/) - installs a local server environment in a matter of seconds on your Mac
2. [HomeBrew](http://brew.sh/)  - the missing package manager for OS X

Using HomeBrew, all the packages would need to be installed from the command line.  Some tutorials include:

- [blog.frd.mn](http://blog.frd.mn/install-nginx-php-fpm-mysql-and-phpmyadmin-on-os-x-mavericks-using-homebrew/)
- [discreteunits.com](http://discreteunits.com/homebrew-nginx-php-fpm-mysql-on-osx-mavericks/)
- [easyengine.io](https://easyengine.io/tutorials/mac/osx-brew-php-mysql-nginx/)

I decided to use  MAMP as it is a much simpler installation process and ultimately i would generally not be developing much locally once the migration to Drupal 8 is complete.  However, I chose Nginx as the web server as my production hosts [DigitalOcean.com](https://www.digitalocean.com/?refcode=92e12787bf7a) and [Serverpilot.io](https://www.serverpilot.io/?refcode=c2131f64db72 ) use Nginx as default.  I also ensured that MAMP was using PHP 7.0.0.

![MAMP screenshot]({{site.baseurl}}/assets/2016-02-05/MAMP screenshot.png)
![MAMP with Nginx]({{site.baseurl}}/assets/2016-02-05/MAMP with Nginx.png)

Once MAMP was Installed I used the usual phpmyadmin to create a Drupal 8 MySQL database and user with the [recommended database permissions](https://www.drupal.org/requirements/database)

##  Download Drupal and Follow Core Drupal "standard" Installation Profile

There are many tutorials describing how to install the standard Drupal 8, for example [Drupal 8 Video Installation Guide on Mac OS X](https://www.youtube.com/watch?v=bthkQCkrH30).  Essentially the installation involves:

[Download Drupal 8 Files](https://www.drupal.org/start)

Put Drupal download into the MAMP htdocs and browse to that folder, in my case http://localhost:7888/drupal8/

![drupal 8 core install]({{site.baseurl}}/assets/2016-02-05/drupal 8 core install.jpg)

After defining the usual settings during installation, for example timezone you are done...

![drupal 8 core website]({{site.baseurl}}/assets/2016-02-05/drupal 8 core website.jpg)

In the next part, I will install the Drupal migration modules and use Drush to migrate the Drupal 6 database to Drupal 8.
