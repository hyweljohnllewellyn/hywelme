---
layout: post
title:  " Moving a WordPress site from GoDaddy to DigitalOcean - Part 2"
date:   2015-03-07 21:51:00
categories: DigitalOcean WordPress
---
###Create the Site  

The site I am moving from GoDaddy is [operascool.org](http://operascool.org).

![My helpful screenshot]({{ site.url }}/assets/2015-03-07/0operascoolorg_godaddy.png)

On my DigitalOcean server I use ServerPilot.io to manage the server as mentioned in part 1 of this blog.

So login to the ServerPilot.io account and create a new app called operascoolorg

![My helpful screenshot]({{ site.url }}/assets/2015-03-07/1serverpilot_create_app.png)

This creates a new public folder for my new operascoolorg app.

![My helpful screenshot]({{ site.url }}/assets/2015-03-07/2serverpilot_app_directory.png
)

and it is instantly available on the web:

![My helpful screenshot]({{ site.url }}/assets/2015-03-07/3serverpilot_app_setup.png
)

###Migrate WordPress Folders

Next, SSH to the apps public directory on the DigitalOcean server.  My app is located in apps/operascoolorg/public folder.

Then download the latest wordpress version using the following:

{% highlight bash %}
wget https://wordpress.org/latest.tar.gz
tar xzf latest.tar.gz
mv wordpress/* .
rm latest.tar.gz
rmdir wordpress
{% endhighlight %}

Browsing the sites domain URL will show the WordPress installer:

![My helpful screenshot]({{ site.url }}/assets/2015-03-07/4wordpress_installer.png
)

As I am migrating an existing WordPress site, I am not going to continue with the install.  

Now, using Filezilla to download the operascool WordPress files from GoDaddy to a local folder on my Mac.

The only content that I want to keep from the GoDaddy server are in the wp-content folder: a custom theme "wpcartoons" and the uploads folder with the images for the site.

Again using Filezilla, I upload these folders to the wp-content folde on the DigitalOcean server:

![My helpful screenshot]({{ site.url }}/assets/2015-03-07/5ftp_wpcontent_to_newsite.png
)

###Migrate WordPress Database 

Going back to ServerPilot.io, a database is created for the operascoolorg app. 
 
![My helpful screenshot]({{ site.url }}/assets/2015-03-07/6serverpilot_create_database.png
)


Using my favorite MySQL database software [SequelPro](http://www.sequelpro.com/), I export the database from GoDaddy and Import to the newly created operascoolorg database.

![My helpful screenshot]({{ site.url }}/assets/2015-03-07/7sequelpro_export_database.png
)

Whilst still in SequelPro, I need to update the post id's as they have moved folder location (you may not need to do this):

{% highlight SQL %}
update wp_posts set guid = replace(guid, 'http://operascool.org/operascoolwp/','http://operascool.org');
{% endhighlight %}

Now we need to update the database credentials in the WordPress config file.  

SSH back to to the apps public directory on the DigitalOcean server and type hte following:

{% highlight bash %}
mv wp-config-sample.php wp-config.php
nano wp-config.php
{% endhighlight %}


![My helpful screenshot]({{ site.url }}/assets/2015-03-07/8nano_wpconfig.png)

This will allow me to update the database configuration to that created by ServerPilot.

{% highlight bash %}
define('DB_NAME', 'database_name_here');
define('DB_USER', 'username_here');
define('DB_PASSWORD', 'password_here');
define('DB_HOST', 'localhost');
{% endhighlight %} 

Note that the localhost for my server is 127.0.0.1.  Save the file.

###Move Domain Name Server to DigitalOcean

Firstly, I will add the operascool.org domain to my operascoolorg app in ServerPilot.io:

![My helpful screenshot]({{ site.url }}/assets/2015-03-07/10Aserverpilot_add_domain.png
)

Now to add the operascool.org DNS to my DigitalOcean server:

![My helpful screenshot]({{ site.url }}/assets/2015-03-07/9digitalocean_add_domain.png
)

and for good practice add the www. CNAME - remembering to put the ending dot in operascool.org. else it won't work.  

![My helpful screenshot]({{ site.url }}/assets/2015-03-07/10digitalocean_add_cname.png
)

Login to the GoDaddy account and go to the operascool.org Domain settings to manage the Nameservers:

![My helpful screenshot]({{ site.url }}/assets/2015-03-07/11godaddy_nameserver.png
)

Select Custom and enter the DigitalOcean domain servers:

{% highlight bash %}
ns1.digitalocean.com
ns2.digitalocean.com
ns3.digitalocean.com 
{% endhighlight %}


![My helpful screenshot]({{ site.url }}/assets/2015-03-07/12godaddy_costom_nameserver.png)

Wait the usual time for the details to propogate across the world.

Lastly, i rysync the file from the DigitalOcean server to my local Mac as a backup:

{% highlight bash %}
rsync -avP serverpilot@178.62.78.182:/srv/users/serverpilot/apps/operascoolorg/public /Users/Hywel/operascoolorg/public/
{% endhighlight %}

That is it, for now.  In my last post in this series, I will add the site to CloudFlare CDN.  

More details on Creating DigitalOcean droplets and ServerPilot.io accounts can be found at this useful blog by [Pascal Becker](http://blog.thepascalbecker.com/2015/01/05/getting-started-with-a-vps/)