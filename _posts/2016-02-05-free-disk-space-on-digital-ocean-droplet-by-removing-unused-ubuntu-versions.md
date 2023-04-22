---
layout: post
date: "2016-02-05 06:04 +0000"
author: hywel
categories: digitalocean
excerpt: ""
meta: "digital ocean droplet Ubuntu sudo apt-get autoremove"
published: true
title: Free Disk Space on Digital Ocean Droplet by removing unused Ubuntu versions
---


## Running out of Disk Space

22 April 2023 - Update - I have just moved to [DigitalOcean App Platform, click to read.](https://www.hywel.me/php/mysql/hosting/2023/04/22/why-i-destroyed-digital-ocean-droplet-migrated-to-app-platform-php-mysql-worry-free-cost-effective-managed-hosting.html)

It has reached a point where the disk usage of a Digital Ocean droplet has reached 69.4% of 19.56Gb.  

![running out of disk space.png]({{site.baseurl}}/assets/2016-02-05/running out of disk space.png)

I know that the total number of applications I use is broadly 2Gb - so what is using up all that disk space?

It took a while to learn some useful linux commands to investigate.  A good resource describing [tools to monitor server resources](https://www.digitalocean.com/community/tutorials/how-to-use-top-netstat-du-other-tools-to-monitor-server-resources#df) at [Digital Ocean](https://www.digitalocean.com/?refcode=92e12787bf7a).  

The most useful command for my investigation shows the usage of folders:

{% highlight bash %}
sudo du -h  --max-depth 1
{% endhighlight %}

![sudo du max depth 1.png]({{site.baseurl}}/assets/2016-02-05/sudo du max depth 1.png)
![sudo du lib.png]({{site.baseurl}}/assets/2016-02-05/sudo du lib.png)
![sudo du modules.png]({{site.baseurl}}/assets/2016-02-05/sudo du modules.png)
![too many old unused kernels.png]({{site.baseurl}}/assets/2016-02-05/too many old unused kernels.png)

As you can see in the /lib/modules folder, there were many old kernel versions taking a total of 5.8Gb.

I verified the currently running kernel using

{% highlight bash %}
uname -r
{% endhighlight %}

I was running linux-image-3.13.0-37-generic  - that was an old one....so wanted to use the latest.

### Use the latest Ubuntu kernel through Digital Ocean Control Panel

This is a great article on Digital Ocean to show how to change the kernel that is used by your server droplet.  I was not aware of needing to do this so was pleased to find the instructions

[how to update a digitalocean server  kernel](https://www.digitalocean.com/community/tutorials/how-to-update-a-digitalocean-server-s-kernel)

After following the instructions to change the kernel through the DigitalOcean Control Panel I powered off the droplet.

{% highlight bash %}
sudo poweroff
{% endhighlight %}

Note that whilst my droplet was powered off, I took the opportunity to take a snapshot Image.  This also restarts the droplet once the image is taken.  The droplet kernel was now updated.

![digital ocean droplet now running newer version.png]({{site.baseurl}}/assets/2016-02-05/digital ocean droplet now running newer version.png)

### Delete old Kernels using sudo apt-get remove

As I am using a service from [Serverpilot.io](https://www.serverpilot.io/?refcode=c2131f64db72 ), which is a simple  management system for DigitalOcean servers, I contacted them and received this confirmation regarding deleting old kernels:

> Justin Samuel (ServerPilot Support)
Feb 4, 13:55
Hi Hywel,
You're welcome to remove any kernel versions you don't intend to use again. What you should check before removing any version is that:
1) It isn't the most recent kernel version installed.
2) It isn't the same kernel version that's currently running according to uname -r
3) It isn't the kernel you have selected in your server settings in DigitalOcean.
You can then remove a specific kernel with this command:
sudo apt-get remove linux-image-X.Y.Z-XX-generic

![sudo apt get remove.png]({{site.baseurl}}/assets/2016-02-05/sudo apt get remove.png)

![sudo apt get remove continue.png]({{site.baseurl}}/assets/2016-02-05/sudo apt get remove continue.png)

### Delete old Kernels using sudo apt-get autoremove

The above method though good, still did not remove all the redundant packages and dependencies. It would also be slow and tedious.

Further reading, I found the following useful link [RemoveOldKernels](https://help.ubuntu.com/community/Lubuntu/Documentation/RemoveOldKernels) which describes the use of sudo apt-get autoremove:

> The system keeps track of which kernels are older and marks them eligible for removal using this method. Most users should run autoremove every few months or so. Systems with a separate /boot partition should run autoremove every two-four weeks. Mark your calendar, make it a routine. Autoremove can be run as often as you like - running it more often will **not** harm your system

{% highlight bash %}
sudo apt-get autoremove
{% endhighlight %}

![sudo apt get auto remove continue.png]({{site.baseurl}}/assets/2016-02-05/sudo apt get auto remove continue.png)

According to sudo apt-get autoremove, I cold free up over 7Gb.....here goes...

![sudo du after removing old files.png]({{site.baseurl}}/assets/2016-02-05/sudo du after removing old files.png)

![system information after.png]({{site.baseurl}}/assets/2016-02-05/system information after.png)

The disk usage of a Digital Ocean droplet is now 20.5% of 19.56Gb.  That has reduced the disk usage by almost 50%..I'd say a success.
