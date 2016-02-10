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

- [Conact Forms](https://www.ostraining.com/blog/drupal/drupal-8-contact-forms/) instead of Webform
- [Content Construction Kit (CCK)](https://www.drupal.org/node/2606836) is now in Core Drupal 8

The obvious module that stands out is the [XML Sitemap](https://www.drupal.org/project/simple_sitemap).

To install that module, again using Drush

cd /Users/hywel/Sites/drupal8
drush dl simple_sitemap 
drush en simple_sitemap
