---
layout: post
date: '2016-06-11 20:05 +0100'
author: Hywel
published: true
title: Migrate a Drupal 6 Website to a Static Site
categories: static site
meta: Drupal 6 Jekyll Hugo CMS functionality for static site
---
## The End of Database CMS - Rise of Static Sites?

Following my attempt to Migrate from Drupal 6 to Drupal 8, I found the whole experience disappointing.  I also found Drupal over complicated for what is a relatively simlpe website.

I have been using [Jekyll](http://jekyllrb.com/) and [Prose.io](https://prose.io) for this blog for some time and have enjoyed using them.  I was inspired to try migrating to a static site generator after reading the [CMS is dead](http://atchai.com/blog/the-cms-is-dead-long-live-hugo-wercker-proseio-and-cloudfront/), from [Atchai](http://atchai.com/), a digital consultancy and development house based in London... 

> "we realised with significant joy that we could jettison our 5-year old CMS (Drupal) in favour of a Static Site Generator".

There is an increasing trend of sites are moving to static site generators, see [modern static website generators the next big thing](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/ )  including  [healthcare.gov](https://www.healthcare.gov/), see [healthcare gov is cms free](https://developmentseed.org/blog/new-healthcare-gov-is-open-and-cms-free/)  and https://mailchimp.com , see [building the new mailchimp](https://blog.mailchimp.com/building-the-new-mailchimp/).

This is driven by mobile and the need for simple streamlined and fast content, which database driven sites that generate "content on the fly” are over engineered and slow in comparison to static sites.

Some static site services are now available such as [bowtie.io](https://bowtie.io/), which describes in their [cms for static html websites article](https://bowtie.io/news/cms-for-static-html-websites/)

> "helps you deploy websites that are faster, easier to maintain, and more secure than a traditional content management system - without losing convenience.”  .

Another interesting approach is taken by [contentful.com](https://www.contentful.com/), in which they manage the content and integrates using API's to static site generators, from their [static site atricle](https://www.contentful.com/r/knowledgebase/contentful-api-cms-static-site-generators/) 

> "you get the all the benefits of content management features while still being able to embrace the static site generator mantra."

My goal is to convert the Drupal 6 CMS to a **responsive**, **mobile friendly**, **static site**, that can be **easily maintained by a non-technical user**.

This is not as easy as it sounds as static site geneator tend to be developer, not user freiendly.

The contenders to be explored in this article are Jekyll and Hugo.  

## Summary of Findings (cut to the chase)

As expected, neither Jekyll or Hugo are fit for the purpose - they are great static site generators and are mobile friendly BUT mainianing them and adding content is just too technical.

Though I am interested in investigating a servive such as [contentful.com](https://www.contentful.com), however, I am steering away because of a potential lock in to their proprietary technology and ultimately their fees.

I think the idea of _"best of both wordls"_ between a classic CMS such as [Wordpress](https://wordpress.org/) to create the content and then generate statc HTML is the current best option for my needs....See next post..

Some of the steps carried out to convert from Drupal 6 to Jekyll or Hugo are described below...

## Drupal 6 to Jekyll 

To begin, I will convert the Drupal 6 “nodes” to static content using  a [Drupal 6 Importer](https://import.jekyllrb.com/docs/drupal6/) provided by [Jekyll](https://import.jekyllrb.com/).

Note that I am a Mac user and already have Jekyll installed.

### Step 1 Create a new Jekyll Site and install the jekyll-import

{% highlight bash %}
~/Sites> jekyll new hartleyvoices_jekyll
New jekyll site installed in /Users/hywel/Sites/hartleyvoices_jekyll. 
~/Sites> cd hartleyvoices_jekyll
~/Sites/hartleyvoices_jekyll> gem install jekyll-import
Successfully installed jekyll-import-0.10.0
Parsing documentation for jekyll-import-0.10.0
Done installing documentation for jekyll-import after 1 seconds
1 gem installed
~/Sites/hartleyvoices_jekyll> 
{% endhighlight %}

### Step 2 Export the Production Drupal 6 Database 

Generally, it is a good idea to  develop using a local version of data and files to protect production.  Using Sequel Pro http://www.sequelpro.com/, log into the production data base and Export as a SQL file.
Note Ensure that the SQL is unzipped.

### Step 3 Create a local MySQL user and database and Import the Drupal 6 Database

As I already have [MAMP](https://www.mamp.info/en/) and the excellent [phpMyAdmin](https://www.phpmyadmin.net/).

Add a MySQL user and creeate database with all privileges:

![add mysql user and create database]({{site.baseurl}}/assets/Add mysql server user and create database with all privileges.jpg)

Select the SQL database file to import from Step 2:

![select sql file to import]({{site.baseurl}}/assets/2016-06-11/select to import.jpg)

Import:

![import the sql database file]({{site.baseurl}}/assets/2016-06-11/import the file.jpg)


Success:

![success]({{site.baseurl}}/assets/2016-06-11/success.jpg)

### Step 5 Execute the Jekyll Import

Following the [Jekyll Drupal 6 Import](https://import.jekyllrb.com/docs/drupal6/) instructions: 

> "By default, the Jekyll importer will pull in nodes of type blog, story, and article. To specify custom types, you can use the types option when you run the importer."

The node types in my site are “page", “talent”,”testimonial”.  Enter the Drupal 6 database credentials created in Step 3:

{% highlight bash %}
ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::Drupal6.run({
      "dbname"   => "hartleyvoices",
      "user"     => "hartleyvoices",
      "password" => "",
      "host"     => "localhost",
      "prefix"   => "",
      "types"    =>  ["page", "talent", "testimonial"]
    })’
{% endhighlight %}

I received the error "Whoops! Looks like you need to install 'sequel' before you can use this importer."

![whoops need to install sequel]({{site.baseurl}}/assets/2016-06-11/whoops need to install sequel.png)

{% highlight bash %}
gem install sequel
{% endhighlight %}

![gem install sequel]({{site.baseurl}}/assets/2016-06-11/gem install sequel.png)

{% highlight bash %}
sudo gem install mysql
{% endhighlight %}

![sudo gem install mysql]({{site.baseurl}}/assets/2016-01-11/sudo gem install mysql.png)

{% highlight bash %}
mysql.server start
{% endhighlight %}

![mysql server start]({{site.baseurl}}/assets/2016-06-11/mysql server start.png)

{% highlight bash %}
ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::Drupal6.run({
      "dbname"   => "hartleyvoices",
      "user"     => "hartleyvoices",
      "password" => "",
      "host"     => "localhost",
      "prefix"   => "",
      "types"    =>  ["page", "talent", "testimonial"]
    })’
{% endhighlight %}

![drupal 6 to jekyll import no errors]({{site.baseurl}}/assets/2016-06-11/drupal 6 to jekyll import no errors.png)

{% highlight bash %}
mysql.server stop
{% endhighlight %}

Now to run Jekyll and hopefully see something..


{% highlight bash %}
~/Sites/hartleyvoices_jekyll> jekyll serve
Configuration file: /Users/hywel/Sites/hartleyvoices_jekyll/_config.yml
            Source: /Users/hywel/Sites/hartleyvoices_jekyll
       Destination: /Users/hywel/Sites/hartleyvoices_jekyll/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 14.248 seconds.
 Auto-regeneration: enabled for '/Users/hywel/Sites/hartleyvoices_jekyll'
Configuration file: /Users/hywel/Sites/hartleyvoices_jekyll/_config.yml
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
{% endhighlight %}

Here is one of the Drupal 6 posts imported to Jekyll.  Not too bad, though is missing all the images:

![jekyll post imported from drupal 6]({{site.baseurl}}/assets/2016-06-11/jekyll post imported from drupal 6.png)


## Jekyll to Hugo

Now, granted I am cheating here as I will be importing the Drupal 6 Post vial Jekyll to Hugo, the reason was I didn't find any alternative to convert directly from Drupal 6 to Hugo.

Following the instructions at [Hugo import Jekyll](http://gohugo.io/commands/hugo_import_jekyll/): 

Import the posts:

{% highlight bash %}
~/Sites/hartleyvoices_hugo> hugo import jekyll ~/Sites/hartleyvoices_jekyll ~/Sites/hartleyvoices_hugo
Importing...
Congratulations! 137 posts imported!
{% endhighlight %}

Clone a Hugo theme:

{% highlight bash %}
cd /Users/hywel/Sites/hartleyvoices_hugo/themes/
git clone https://github.com/spf13/herring-cove.git 
{% endhighlight %}

Run the Hugo Server:

{% highlight bash %}
~/Sites/hartleyvoices_hugo> hugo server -w --theme=herring-cove
0 of 2 drafts rendered
0 future content
135 pages created
0 paginator pages created
0 tags created
1 categories created
in 568 ms
Watching for changes in /Users/hywel/Sites/hartleyvoices_hugo/{data,content,layouts,static,themes}
Serving pages from memory
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
{% endhighlight %}

Here is the Drupal 6 post imported to Hugo (via Jekyll):

![hugo post imported from jekyll]({{site.baseurl}}/assets/2016-06-11/hugo import jekyll.png)


### Jekyll or Hugo….?

Well, here’s the decision - Continue with Jekyll or Hugo?

Both generators have benefits, and If it were purely my choice alone, I would proceed with Hugo because of its speed and pure environment (no dependencies inlace Jekyll).

However, at the moment neither offer a really simple way for a user without development background to add content - unlike CMS - The primary user of the site is not a developer.

So in my next post, I will be investigating options to use a CMS locally and then generate static site content to be published to the web - possible best of both worlds for now... time will tell.
