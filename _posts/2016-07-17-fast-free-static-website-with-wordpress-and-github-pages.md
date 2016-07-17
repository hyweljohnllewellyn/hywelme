---
layout: post
date: '2016-07-17 10:28 +0100'
author: Hywel
published: true
title: Fast Free Static Website with WordPress and GitHub Pages
categories: static site wordpress
meta: github pages wordpress static plugin
---
## WordPress is Great, But what about Static Sites

If you would do a search, WordPress.org is used by more that 20% of sites on the public internet.  

However, I find that maintaining multiple sites, with constant maintenance for security and plugin updates can be tedious.  There are also hosting fees to consider if using [WordPress.org](https://wordpress.org/), though I can recommend Digital Ocean for this - starting at $5 a month it has provided me with a great service.

Also, many WordPress sites are not as fast as they should be because it is generating content dynamically as the user requests it, unless using a cache plugin, which is effectively saving a "static" copy of the site.

So, as described in the migrate a Drupal 6 Website to a Static Site post, I have  investigated Static Site Generators such as [Jekyll](https://jekyllrb.com/) and [Hugo](http://gohugo.io/).   However, I found that these generators are currently too technical for most users.

## Best of Both?

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

## Create a Github Pages Repository to Host the Static WordPress Site

### Step 1 - Create a New GitHub Repository

#### Step 1a Once you have logged into your GitHub account, click the Repositories tab and select New.

![New GitHub Repository]({{site.baseurl}}/assets/2016-07-17/New GitHub Repository.jpg)

#### Step 1b Give your repository a name and ensure to select "Initialize this repository with a Readme"

![GitHub Repository Name]({{site.baseurl}}/assets/2016-07-17/GitHub Repository Name.jpg)

### Step 2 - Create gh-pages Branch Set as Default and Delete master Branch

For Hosting your static content, GitHub Pages requires that the content be in the gh-pages branch of the repository.  I feel that this makes the master branch redundant, so I delete this to keep things simple.  There are a few clicks, but it is quite simple.

#### Step 2a Create gh-pages branch:

![GitHub Repository Create gh-pages branch]({{site.baseurl}}/assets/2016-07-17/GitHub Repository Create gh-pages branch.jpg)

#### Step 2b Go to Settings:

![GitHub Repository Settings]({{site.baseurl}}/assets/2016-07-17/GitHub Repository Settings.jpg)

#### Step 2c Go to Branches:

![Click GitHub Branches]({{site.baseurl}}/assets/2016-07-17/GitHub Repository Branches.jpg)

#### Step 2d GitHub repository select default branch:

![GitHub repository select default branch]({{site.baseurl}}/assets/2016-07-17/GitHub Repository Default Branches.jpg)

#### Step 2e GitHub confirm default repository:

![GitHub confirm default repository]({{site.baseurl}}/assets/2016-07-17/GitHub%20Repository%20Default%20Branch%20Confirm.jpg)

#### Step 2f GitHub Repository select the 2 branches icon:

![GitHub Repository select the 2 branches ]({{site.baseurl}}/assets/2016-07-17/GitHub Repository Branches 2.jpg)

#### Step 2g GitHub delete master branch:

![GitHub delete master branch]({{site.baseurl}}/assets/2016-07-17/GitHub Repository Delete master Branch.jpg)

### Step 3 - Clone GitHub Repository to your Local Machine 

If like me you are relatively new to the world of Git repositories, the idea of cloning, pushing and merging is a bit uncomfortable.  But thankfully, there is a great App available [GitHub Desktop](https://desktop.github.com/) to make it a bit easier.  Download this to follow the rest of this guide.

#### Step 3a Select "clone or download" and "Open in Desktop"

![GitHub Repository Clone Open in Desktop]({{site.baseurl}}/assets/2016-07-17/GitHub Repository Clone - Open in Desktop.jpg)

Click the "Launch Application" or equivalent message to confirm

#### Step 3b Confirm Folder location to Clone Repository

![Location to Clone Repository]({{site.baseurl}}/assets/2016-07-17/GitHub Desktop Location to Clone.jpg)

Repository in Local Folder:

![Local Folder Showing readme]({{site.baseurl}}/assets/2016-07-17/Repository Cloned to Local Folder.jpg)


## Create a Static Site from WordPress

So, after some research and trial and error, my preferred WordPress plugin to generate static content is [Simply Static](https://en-gb.wordpress.org/plugins/simply-static/).  Not only it work, but it is kept up to date and it has top ratings.  To follow this guide, install and activate the plugin to WordPress as usual.

### Step 4 - Update Simply Static Settings

The static website URL hosted with Github Pages is shown on the Settings Page of your repository (see step 2b for the GitHub settings), it is the GitHub username followed by the repository name. For example; Your site is published at https://hyweljohnllewellyn.github.io/carol-singers-hire-uk/.  

#### Step 4a Go To Simply Static Settings

![Wordpress Simply Static Plugin Settings]({{site.baseurl}}/assets/2016-07-17/WordPress Simply Static Settings.jpg)

#### Step 4b Set the Destination URL

The Destination URL is where the site will be published on the public world wide web.  Note that the Origin URL will usually be localhost:8888 if WordPress is installed locally.

![Simply Static Destination URL]({{site.baseurl}}/assets/2016-07-17/WordPress Simply Static Destination URL.jpg)

#### Step 4c Set the Local Directory

The Local Directory is where the Static Site plugin will write its generated folders and files. This should be the location of the **GitHub Repository Folder** created previously in **Step 3b**. This will be used later to publish the site to GitHub Pages.

![WordPress Simply Static Set Local Directory]({{site.baseurl}}/assets/2016-07-17/WordPress Simply Static Local Directory.jpg)

Remember to press Save.

#### Step 4c Static Site Plugin - Advanced Tab

In order to ensure that all WordPress Content is generated, it is important to add the uploads folder through advanced settings tab

![Static Site Advanced Tab]({{site.baseurl}}/assets/20116-07-17/WordPress Simply Static Advanced Tab.jpg)

#### Step 4d Static Site Plugin - Enter Uploads Folder Location in Additional Folders

Remember to press Save.

![Static Site Additional Folder]({{site.baseurl}}/assets/2016-07-17/WordPress Simply Static Additional Folders.jpg)

### Step 5 - Simply Static Plugin - Generate Content

Great, now that the settings are all saved, we can now generate the static content.

#### Step 5a Navigate to Simply Static -> Generate and Click  "Generate Static Files"

![WordPress Simply Static Plugin Generate]({{site.baseurl}}/assets/2016-07-17/WordPress Simply Static Generate.jpg)

#### Step 5a Simply Static Review Generated Log

It may take a while to generate your static content, depending on the size of your site - I would recommend using a local machine with Solid State Disk.  You may see some errors, but hopefully nothing significant - this one is OK and only took 13 seconds.

![Simply Static Plugin Done]({{site.baseurl}}/assets/2016-07-17/WordPress Simply Static Done.jpg)

## Publish Static Site to Github Pages

### Step 6 - Commit Changes and Sync to Origin (GitHub Pages)

Open the GitHub Desktop Application and you will see uncommitted changes - lots if this is the first time you generate content for a new site.  It is worth noting that if you regenerate and synchronise that **only changed** files will be committed and synced - github keeps track of changes.  This is a major benefit of using GitHub - version control!

#### Step 6a GitHub Desktop - Enter a Meaningful Commit Summary 

![GitHub Dektop Commit Summary Message]({{site.baseurl}}/assets/2016-07-17/GitHub Desktop Commit Static Content.jpg)

#### Step 6b GitHub Desktop - Press Sync

![GitHub Desktop Sync]({{site.baseurl}}/assets/2016-07-17/GitHub Desktop Sync Button.jpg)

Note that you may be asked for your GitHub credentials:

![GitHub Credentials Log In]({{site.baseurl}}/assets/2016-07-17/GitHub Desktop Sign In.jpg)

If it is your initial commit for a new site, the sync may take some time.  

#### Step 6c GitHub Pages - Check your Repository

Particularly following an initial commit and sync for a new webisite, check the GitHub Pages Repository Online
![GitHub Pages Repository Online]({{site.baseurl}}/assets/2016-07-17/GitHub Pages Onlie Repository.jpg)

## Enjoy a Fast Free Static Website Generated from WordPress and Hosted on GitHub

Go to your URL, see my [https://hyweljohnllewellyn.github.io/carol-singers-hire-uk/](https://hyweljohnllewellyn.github.io/carol-singers-hire-uk/) example.

![Static Website Generated from Wordpress Hosted on GitHub Pages]({{site.baseurl}}/assets/2016-07-17/Static Website Live Hosted on GitHub Pages.jpg)


## Some Closing Thoughts 

If you would like to use a Custom Domain Name, which is recommended for markeking and SEO for you business, then you can see my related blog at [GitHub Pages Custom Domain Names with CloudFlare](http://www.hywel.me/static/sites/2015/12/06/github-pages-custom-domain-names-with-cloudflare.html)

Note that I have not discussed SEO or any other optimisation considerations. 
