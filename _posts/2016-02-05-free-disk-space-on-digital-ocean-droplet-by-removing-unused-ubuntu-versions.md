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


 
[how-to-update-a-digitalocean-server-s-kernel](https://www.digitalocean.com/community/tutorials/how-to-update-a-digitalocean-server-s-kernel)
