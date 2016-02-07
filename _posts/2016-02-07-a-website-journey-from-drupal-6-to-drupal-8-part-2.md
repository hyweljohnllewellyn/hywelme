---
layout: post
date: "2016-02-07 10:00 +0000"
author: Hywel
categories: drupal
excerpt: ""
meta: Drupal 8 Migration Upgrade from Drupal 6
published: true
title: "A Website Journey from Drupal 6 to Drupal 8 - Part 2"
---

## Preparing for Upgrade 

[In my previous post,]({% post_url 2016-02-06-a-website-journey-from-drupal-6-to-drupal-8-part-1 %}), I described why I was upgrading a website from Drupal 6 to Drupal 8 and some of the key considerations.

For this post, I will install the Drupal Migration modules and update the core content from Drupal 6 to 8.  

From [Praparing an Upgrade](https://www.drupal.org/node/2350603) I will check:

> A fresh installation of Drupal 8 with the core module Migrate Drupal enabled.
    
> Access to the Drupal 6 dtabase and site files from the Drupal 8 site.
    
> The Migrate Upgrade module installed and enabled on the Drupal 8 site.  If you plan on running the upgrade from Drush, you’ll need Drush 8 and the module Migrate tools.  Using Drush is more robust and allows selective migration. But it requires an additional module and it must be run from the command line.

## [Executing an upgrade using Drush](https://www.drupal.org/node/2350651)

I will install Drush using Homebrew package manager as described in [Install Drush on a Mac](https://www.drupal.org/node/1674222)

I already have Homebrew installed, otherwise I followed the commands on [Installing Drush on Mac using Homebrew](https://www.drupal.org/node/954766):

I ran the following to install Drush:

{% highlight bash %}
cd /Applications/MAMP/htdocs
brew install git
brew update
brew tap homebrew/dupes
brew tap homebrew/versions
brew tap homebrew/php
brew install drush
{% endhighlight %}
