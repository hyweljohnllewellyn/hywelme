---
layout: post
date: '2016-07-17 10:28 +0100'
author: Hywel
published: true
title: Fast Free Static Website with WordPress and GitHub Pages
categories: static site wordpress
meta: github pages wordpress static plugin
---
# WordPress is Great, But what about Static Sites

If you would do a search, WordPress.org is used by more that 20% of sites on the public internet.  

However, I find that maintaining multiple sites, with constant maintenance for security and plugin updates can be tedious.  There are also hosting fees to consider if using [WordPress.org](https://wordpress.org/), though I can recommend Digital Ocean for this - starting at $5 a month it has provided me with a great service.

Also, many WordPress sites are not as fast as they should be because it is generating content dynamically as the user requests it, unless using a cache plugin, which is effectively saving a "static" copy of the site.

So, as described in the migrate a Drupal 6 Website to a Static Site post, I have  investigated Static Site Generators such as [Jekyll](https://jekyllrb.com/) and [Hugo](http://gohugo.io/).   However, I found that these generators are currently too technical for most users.

# Best of Both?

What about installing WordPress on a local computer, writing the site and publishing only static content to the public web?  This would provide:

1. free hosting for static websites with [Github Pages](https://pages.github.com/)
2. the speed and security of a static site
3. the usability and resourcefulness of WordPress

What do others on the web say?

As as described in and old post on [How to export a WordPress site to a static HTML](https://www.quora.com/How-do-you-export-a-WordPress-site-to-a-static-HTML/) , the drawbacks of static sites are:

- no comments functionality. Using third party commenting systems such as Disqus is suggested.
- dynamically generated content such as recent posts, recent comments, related posts, would be saved as static (if used)

However, the speed increase of a static site, even over a cache'd site is well described by [Building a Static Site with Wordpress](https://www.futurehosting.com/blog/building-a-static-site-with-wordpress/) 

My favourite is an amusing look at using WordPress to generate static content is by [Tim Nash](https://timnash.co.uk/using-wordpress-static-site-generator/):

> "Now you can do the same with Drupal and there are dedicated Static Site Generators that are more then capable of doing all that but they don’t have the level of resources, the ease of training and all the usual benefits of WordPress – in effect, it allows the best of both worlds. I don’t want to use yet another CMS when WordPress will do an excellent job for me.

So, to summarise for this guide, we will create a GitHub Pages Repository, Generate Static Content from WordPress and then Publish to GitHub.

# Create a Github Pages Repository to Host the Static WordPress Site 

# Create a Static Site from WordPress

So, after some research and trial and error, my preferred WordPress plugin to generate static content is https://en-gb.wordpress.org/plugins/simply-static/.  Not only it work, but it is kept up to date and it has top ratings.

## Step 1 - Update Simply Static Settings

## Step 2 - Generate Content

# Publish Static Site to Github Pages

## Step 1 - 

The static websites hosted with Github Pages by default are shown in the form https://hyweljohnllewellyn.github.io/carolsingershire/ , with the Github username followed by the repository name. If you would like to use a Custom Domain Name, which is recommended for markeking and SEO for you business, then you can see my related blog at [GitHub Pages Custom Domain Names with CloudFlare](http://www.hywel.me/static/sites/2015/12/06/github-pages-custom-domain-names-with-cloudflare.html)