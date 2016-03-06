---
layout: post
date: "2016-03-06 08:34 +0000"
author: Hywel
categories: drupal
excerpt: ""
meta: child or sub theme stylesheets css javascript library HTML 5 audio element Drupal 8
published: true
title: Drupal 8 Sub Themes and Stylesheets
---




## Creating a Drupal 8 Sub Theme

It has been about a month since I started an exercise to upgrade to migrate from Drupal 6 to Drupal 8 using the migration tools provided in Drupal.

In the time since my last [post](http://www.hywel.me/drupal/2016/02/06/a-website-upgrade-from-drupal-6-to-drupal-8-part-4.html) on the subject, I have been concentrating on updating the look and feel of the theme.

I have to say that I am impressed with the ability in Drupal 8 to create a Child Theme of an existing Theme and then create separate libraries for the stylesheets and javascript that then enhance the base theme without compromising the integrity or upgrade path of the base theme.

[Creating a Sub Theme](https://www.drupal.org/theme-guide/8/creating-a-sub-theme) was one of the resources I used.

For this example , the sub theme will be called hartleyvoicescouk

### Create Sub Theme Info and Library Files

The basic configuration requires:

- a sub theme folder in the Drupal 'Themes' Folder (Note this is *not* in the 'Core' folders)
- an info file to which describes the sub theme region structure, libraries and parent theme
- a library file, which will describe the stylesheets and any javascript used


I used [Adding stylesheets (CSS) and JavaScript (JS) to a Drupal 8 theme](https://www.drupal.org/theme-guide/8/assets)  as a reference.


*[hartleyvoicescouk sub theme folder structure](https://github.com/hyweljohnllewellyn/hywelme/tree/gh-pages/assets/2016-03-06/hartleyvoicescouk)*

![drupal 8 sub theme folders]({{site.baseurl}}/assets/2016-03-06/drupal%208%20sub%20theme%20folders.png)

The Bartik base theme was used as a basis for this Sub theme.

*[hartleyvoicescouk.info.yml](https://github.com/hyweljohnllewellyn/hywelme/blob/gh-pages/assets/2016-03-06/hartleyvoicescouk/hartleyvoicescouk.info.yml) file*

{% highlight yaml %}
name: hartleyvoicescouk
type: theme
description: This is a hartleyvoices sub theme of Bartik
core: 8.x
# Defines the base theme
base theme: bartik
# Defines libraries group in which we can add css/js.
libraries:
  - hartleyvoicescouk/global-styling
# Regions
regions:
  header: Header
  primary_menu: 'Primary menu'
  secondary_menu: 'Secondary menu'
  content: Content
  sidebar_first: First sidebar
  sidebar_second: Second sidebar
  featured: Featured bottom first
  footer: Footer
{% endhighlight %}

*[hartleyvoicescouk.libraries.yml](https://github.com/hyweljohnllewellyn/hywelme/blob/gh-pages/assets/2016-03-06/hartleyvoicescouk/hartleyvoicescouk.libraries.yml) file*

{% highlight yaml %}
global-styling:
  css:
    theme:
      css/style.css: {}
  js:
      js/yahoomedia/hartleyvoicescouk.js: {}
{% endhighlight %}

### Activate the Sub Theme

![drupal 8 activated sub theme]({{site.baseurl}}/assets/2016-03-06/drupal%208%20activated%20sub%20theme.jpg)

### Sub Theme Stylesheet - [style.css](https://github.com/hyweljohnllewellyn/hywelme/blob/gh-pages/assets/2016-03-06/hartleyvoicescouk/css/style.css)

This was the tricky and time consuming part, mainly as for each of the style elements I wanted to customise, I needed to find the related element in the Parent Theme.  These were generally found in one of the css files in the
*bartik -> css -> components* folder

within the hartleyvoicescouk css folder a [style.css](https://github.com/hyweljohnllewellyn/hywelme/blob/gh-pages/assets/2016-03-06/hartleyvoicescouk/css/style.css) file contained all the custom css for the sub theme.

### Hartley Voices with Drupal 8

![Hartley Voices with Drupal 8]({{site.baseurl}}/assets/2016-03-06/drupal%208%20hartleyvoicescouk%20with%20css.jpg)

This was quite good..... but....

## Drupal 8 Shortcoming - Standard Support for Basic HTML 5 Elements - <audio>

I came across a shortcoming with the Drupal 8 that I cannot resolve.  http://www.hartleyvoices.co.uk is a live music events agency and so there is a need to support audio / mp3.  

Currently, the Hartley Voices site is running a version of the Yahoo Media Player that I customised to use since Yahoo ended support of it's media player.  Details of how I use the [Yahoo Media Player at my Git Page](https://github.com/hyweljohnllewellyn/yahoomediaplayer).  The simplicity and minimalism is I feel still unsurpassed.

I was very surprised that Drupal, as a 'modern' CMS does not support standard HTML5 <audio> elements.  Why they would need to be developed as a Module escapes me and the only real option at the moment would be to use a paid SoundCloud account for the [Mini embedded player](http://help.soundcloud.com/customer/en/portal/articles/2167181-the-mini-embedded-player) or revert to Drupal 7.

## Options Going Forward

Since using [Jekyll](http://www.hywel.me/jekyll/static/site/2015/11/15/installing-jekyll-locally-on-a-mac.html) as a static site generators and [prose.io](http://www.hywel.me/2015/11/23/create-jekyll-static-site-posts-using-proseio.html) as an online editor, I am now seriously considering converting the entire Drupal 6 site to [Jekyll](http://jekyllrb.com/) or potentially [Hugo](https://gohugo.io/).
