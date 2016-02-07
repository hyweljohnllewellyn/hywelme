---
layout: post
date: "2016-02-07 10:00 +0000"
author: Hywel
categories: drupal
excerpt: ""
meta: Drupal 8 Migration Upgrade from Drupal 6 Drush
published: true
title: "A Website Journey from Drupal 6 to Drupal 8 - Part 2"
---

## Preparing for Upgrade 

[In my previous post,]({% post_url 2016-02-06-a-website-journey-from-drupal-6-to-drupal-8-part-1 %}) I described why I was upgrading a website from Drupal 6 to Drupal 8 and some of the key considerations.

For this post, I will install the Drupal Migration Modules and upgrade the core content.

From [Praparing an Upgrade](https://www.drupal.org/node/2350603) I will check:

> A fresh installation of Drupal 8 with the core module Migrate Drupal enabled.
    
> Access to the Drupal 6 database and site files from the Drupal 8 site.
    
> The Migrate Upgrade module installed and enabled on the Drupal 8 site.  If you plan on running the upgrade from Drush, you’ll need Drush 8 and the module Migrate tools.  Using Drush is more robust and allows selective migration. But it requires an additional module and it must be run from the command line.

## [Executing an upgrade using Drush](https://www.drupal.org/node/2350651)

_ I will install Drush using Homebrew package manager as described in [Install Drush on a Mac](https://www.drupal.org/node/1674222)

I already have Homebrew installed, otherwise I followed the commands on [Installing Drush on Mac using Homebrew](https://www.drupal.org/node/954766) _

** The above methods caused all kinds of errors on install and may not be the best way for Drush 8 or Drupal 8 as described at [Installing Drush 8 using Composer](http://whaaat.com/installing-drush-8-using-composer)  ** 

So I decided to Install Drush using Composer using instruction at [Install a global Drush via Composer](http://docs.drush.org/en/master/install-alternative/) :

### Step 1 - Install Composer Globally
{% highlight bash %}
cd /Sites/drupal8
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
{% endhighlight %}

### Step 2 - Add Composer to my bash_profile

{% highlight bash %}
cd /Users/hywel
nano .bash_profile
{% endhighlight %}

Add the following line 

{% highlight bash %}
export PATH="$HOME/.composer/vendor/bin:$PATH"
{% endhighlight %}

Start a new Terminal session to ensure th path is updated

### Step 3 - Install Drush using Composer and verify Status

{% highlight bash %}
cd /Sites/drupal8
composer global require drush/drush
drush status
{% endhighlight %}
