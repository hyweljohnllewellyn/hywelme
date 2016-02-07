---
layout: post
date: "2016-02-07 10:00 +0000"
author: Hywel
categories: drupal
excerpt: ""
meta: Drupal 8 Migration Upgrade from Drupal 6 using Drush
published: true
title: "A Website Journey from Drupal 6 to Drupal 8 - Part 2"
---


## Preparing for Upgrade 

[In my previous post,]({% post_url 2016-02-06-a-website-journey-from-drupal-6-to-drupal-8-part-1 %}) I described why I was upgrading a website from Drupal 6 to Drupal 8 and some of the key considerations.

For this post, I will install the Drupal Migration Modules.

From [Preparing an Upgrade](https://www.drupal.org/node/2350603) I will check:

> A fresh installation of Drupal 8 with the core module Migrate Drupal enabled.
    
> Access to the Drupal 6 database and site files from the Drupal 8 site.
    
> The Migrate Upgrade module installed and enabled on the Drupal 8 site.  If you plan on running the upgrade from Drush, you’ll need Drush 8 and the module Migrate tools.  Using Drush is more robust and allows selective migration. But it requires an additional module and it must be run from the command line.

## Installing Drush 8 Locally

[Executing an upgrade using Drush](https://www.drupal.org/node/2350651) describes that the latest Drush needs to be used to upgrade - so lets' get it.

~~I will install Drush using Homebrew package manager as described in [Install Drush on a Mac](https://www.drupal.org/node/1674222)~~

~~I already have Homebrew installed, otherwise I followed the commands on [Installing Drush on Mac using Homebrew](https://www.drupal.org/node/954766)~~

**Issue - The above methods caused all kinds of errors on install and may not be the best way for Drush 8 or Drupal 8 as described at [Installing Drush 8 using Composer](http://whaaat.com/installing-drush-8-using-composer)** 

Before installing, I decided to change the default MAMP document folder to be in my usual /Sites/ folder :

![updated MAMP site root folder]({{site.baseurl}}/assets/2016-02-07/updated MAMP site root folder.png)

The local URL now looked like this:

![updated Drupal 8 local URL]({{site.baseurl}}/assets/2016-02-07/updated drupal 8 local URL.png)

Drush was then installed with Composer using instruction at [Install a global Drush via Composer](http://docs.drush.org/en/master/install-alternative/) :

### Step 1 - Install Composer Globally
{% highlight bash %}
cd /Sites/drupal8
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
{% endhighlight %}

![installing composer]({{site.baseurl}}/assets/2016-02-07/installing composer.png)

### Step 2 - Add Composer to my bash_profile

{% highlight bash %}
cd /Users/hywel
nano .bash_profile
{% endhighlight %}

Add the following line 

{% highlight bash %}
export PATH="$HOME/.composer/vendor/bin:$PATH"
{% endhighlight %}

Start a new Terminal session to ensure the path is updated

### Step 3 - Install Drush using Composer and verify Status

{% highlight bash %}
cd /Users/hywel/Sites/drupal8
composer global require drush/drush
drush status
{% endhighlight %}

![installing drush with composer]({{site.baseurl}}/assets/2016-02-07/installing drush with composer.png)

![drush 8 status]({{site.baseurl}}/assets/2016-02-07/drush 8 status.png)

### Step 4 - [Update Path to ensure systems uses the MAMP version of PHP](http://stackoverflow.com/questions/4145667/how-to-override-the-path-of-php-to-use-the-mamp-path/10653443#10653443)  

{% highlight bash %}
cd /Users/hywel
nano .bash_profile
{% endhighlight %}

Add the following lines:

{% highlight bash %}
export MAMP_PHP=/Applications/MAMP/bin/php/php7.0.0/bin
export PATH="$MAMP_PHP:$PATH"
{% endhighlight %}

![update path to MAMP php]({{site.baseurl}}/assets/2016-02-07/update path to MAMP php.png)

### Step 5 - Install the Migration Modules

[Executing an upgrade using Drush](https://www.drupal.org/node/2350651) describes:

> To migrate using Drush you need to download and enable the Migrate Upgrade contributed module. You will also need Migrate Tools if you plan on doing more than running a one-time complete upgrade.

Drush has extensive functionality to install and maintain Drupal - see the [Drush Site](https://github.com/drush-ops/drush) and [Drush Commands](http://drushcommands.com/).

[To install and enable the contributed modules](https://www.drupal.org/documentation/install/modules-themes/modules-8) :

{% highlight bash %}
cd /Users/hywel/Sites/drupal8
drush dl migrate_upgrade 
drush en migrate_upgrade
{% endhighlight %}

The first part worked:

![drush dl migrate_upgrade]({{site.baseurl}}/assets/2016-02-07/drush dl migrate_upgrade.png)

**Issue: Drush was not able to start (bootstrap) the Drupal database**
![drush en migrate_upgrade issue]({{site.baseurl}}/assets/2016-02-07/drush en migrate_upgrade issue.png)

[julianlmedina](http://julianlmedina.com/getting-drush-working-with-mamp-3-on-mac/)  and [Installing Drush on Mac using Homebrew](https://www.drupal.org/node/954766) have described

> If you are running your Drupal sites with MAMP, you need to tell Drush to use MAMP's mysql.sock or you will run into the following error.  Easiest way to do this is by creating a symlink

{% highlight bash %}
sudo mkdir /var/mysql
sudo ln -s /Applications/MAMP/tmp/mysql/mysql.sock /var/mysql/mysql.sock
{% endhighlight %}

![MAMP mysql sock]({{site.baseurl}}/assets/2016-02-07/MAMP mysql sock.png)

Now to retry..

{% highlight bash %}
cd /Users/hywel/Sites/drupal8
drush en migrate_upgrade
{% endhighlight %}

**Issue: Drush still could not connect with the same error as before - I determined that the mysql command was not available from /Users/hywel/Sites/drupal8 with MAMP**
Following the instructions at [Solving mysql command not found" on MAMP](http://www.webbykat.com/2012/06/solving-sh-mysql-command-not-found-mamp-pro-2) 

{% highlight bash %}
cd /Users/hywel
nano .bash_profile
{% endhighlight %}

Add this line to .bash_profile: 

{% highlight bash %}
export PATH=$PATH:/Applications/MAMP/Library/bin 
{% endhighlight %}

Now to retry..

{% highlight bash %}
cd /Users/hywel/Sites/drupal8
drush en migrate_upgrade
{% endhighlight %}

![migrate upgrade enable success]({{site.baseurl}}/assets/2016-02-07/migrate upgrade enable success.png)

{% highlight bash %}
cd /Users/hywel/Sites/drupal8
drush dl migrate_tools 
drush en migrate_tools
{% endhighlight %}

![migrate tools success]({{site.baseurl}}/assets/2016-02-07/migrate tools success.png)

Success - Do you want to continue... yes I think so!  See you next time.
