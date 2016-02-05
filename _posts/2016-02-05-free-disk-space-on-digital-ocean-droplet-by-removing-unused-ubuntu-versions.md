---
layout: post
date: "2016-02-05 06:04 +0000"
author: Hywel
categories: digitalocean
excerpt: ""
meta: "digitalocean droplet Ubuntu "
published: true
title: Free Disk Space on Digital Ocean Droplet by removing unused Ubuntu versions
---

## Running out of Disk Space
It has reached a point where the disk usage of a Digital Ocean droplet has reached 69.4% of 19.56Gb.  

I know that the total number of applications I use is broadly 2Gb - so where us the rest?

It took a while to learn some useful linux commands to investigate.  A key command shows the uswge of the root level folders:

sudo du -h / --max-depth 1 

So, as you can see, there were many old kernel versions taking a total of 5.8Gb.

Ideally, i will keep the currently running kernel  - confirm by 

uname -r

and the newest version.

###Use the latest Ubunte kernel through Digital Ocean Control Panel 
This is a great article on Digital Ocean to show how to change the kernel that is used by your server droplet. 

[how-to-update-a-digitalocean-server-s-kernel](https://www.digitalocean.com/community/tutorials/how-to-update-a-digitalocean-server-s-kernel)

Note that whilst my droplet was powered off, I took the opportunity to take a snapshot Image.

###Delete old Kernels using sudo apt-get remove
As I am using a great service from serverpilot.io, I received this great confirmation regarding deleting old kernels:

> Justin Samuel (ServerPilot Support)
Feb 4, 13:55
Hi Hywel,
You're welcome to remove any kernel versions you don't intend to use again. What you should check before removing any version is that:
1) It isn't the most recent kernel version installed.
2) It isn't the same kernel version that's currently running according to uname -r
3) It isn't the kernel you have selected in your server settings in DigitalOcean.
You can then remove a specific kernel with this command:
sudo apt-get remove linux-image-X.Y.Z-XX-generic

sudo apt-get remove linux-image-3.13.0-32-generic

###Delete old Kernels using sudo apt-get autoremove
The above method though good, still did not remove all the redundant packages and dependencies. Further reading, I foun the following useful link: [RemoveOldKernels](https://help.ubuntu.com/community/Lubuntu/Documentation/RemoveOldKernels).

Simply  using sudo apt-get autoremove according to this link:

> The system keeps track of which kernels are older and marks them eligible for removal using this method. Most users should run autoremove every few months or so. Systems with a separate /boot partition should run autoremove every two-four weeks. Mark your calendar, make it a routine. Autoremove can be run as often as you like - running it more often will **not** harm your system

According to sudo apt-get autoremove, I cold free up over 7Gb.....here goes...

