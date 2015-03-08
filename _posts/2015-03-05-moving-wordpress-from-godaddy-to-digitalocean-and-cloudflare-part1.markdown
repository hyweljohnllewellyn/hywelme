---
layout: post
title:  " Moving a WordPress site from GoDaddy to DigitalOcean - Part 1"
date:   2015-03-05 21:31:00
author: Hywel
categories: DigitalOcean WordPress
---


It it time for a change.  I had a great deal for a 5 year ultimate hosting plan with free SSL at [GoDaddy.com](http://GoDaddy.com).  

However, now they want to charge me an arm and a leg to renew - GoDaddy provides a great price for new customers, but charge **alot** when you are locked in.

Also, the response time for all the websites hosted with them has not been good enough - especially now that Solid State Disks (SSDs) are becoming more commonplace with hosting companies.

I have decided try out the *do it yourself* cloud hosting option provided by [DigitalOcean.com](https://www.digitalocean.com/?refcode=92e12787bf7a) partly to learn some new skills and also they have had some great reviews.

After a quick search online, I found a promotional code to get 2 months free hosting with DigitalOcean.com, so at least I could try before I buy. 

As a member, DigitalOcean offer a referal scheme - please click my link if you'd like to try it for free:

[$10 credit at Digital Ocean](https://www.digitalocean.com/?refcode=92e12787bf7a)

DigitalOcean's documentation and user forums are very active and I found it quite straight forward as a tech-savvy person to get a basic Ubuntu operating system insalled on a *droplet* . 

DigitalOcean is managed through a command line terminal, so if you are slightly allergic to the thought of typing commands, it's propably not for you.

[Serverpilot.io](https://www.serverpilot.io/?refcode=c2131f64db72 ) is a simple  management system for DigitalOcean servers. Even their free plan takes care automatically of basic server security and PHP application management.  

[$10 credit at ServerPilot.io](https://www.serverpilot.io/?refcode=c2131f64db72) 

I was also tempted with the [CloudFlare.com](https://www.cloudflare.com) service as it offers free SSL/ SDPY and static file cache - which is supposed to translate to faster and more Google friendly websites. Worth a try right?

[In my next post,]({% post_url 2015-03-07-moving-wordpress-from-godaddy-to-digitalocean-part2 %}) I'll describe the steps to move the WordPress site to DigitalOcean using ServerPilot.io and then, hopefully CloudFlare!