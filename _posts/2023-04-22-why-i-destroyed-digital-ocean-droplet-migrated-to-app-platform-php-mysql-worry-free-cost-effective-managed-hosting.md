---
layout: post
date: '2023-04-22 19:02 +0100'
author: Hywel
published: true
title: Why I destroyed Digital Ocean Droplet and Moved to the App Platform PHP MySQL Worry Free Cost Effective Managed Hosting
categories: PHP MySQL Hosting
meta: Hosting PHP MySQL DigitalOcean Security
---

## DigitalOcean as a Host
I have been using [DigitalOcean](https://m.do.co/c/92e12787bf7a) for 8 years to host various PHP MySQL websites.

I feel that they strike a great balance between price and performanve and importantly, unlike other hosting providers the costs are easy to understand.  I feel you need a PhD to understand Amazon pricing.

I have been using a droplet, costing as little as $4 a month, which has been great.  However, as times change, I have been getting more concerned about security and wanted peace of mind, so started looking for more of a managed solution.

##  Managed Hosting
When considering 'peace of mind' managed hosting, I wanted all security patching and other maintenance to be done by the host.  There are a few out there including [heroku.com](https://www.heroku.com/pricing), but again it was just not as simple as [DigitalOcean](https://m.do.co/c/92e12787bf7a).


## Digital Ocean App Platform with Managed Database
So, I decided to migrate to the [DigitalOcean](https://m.do.co/c/92e12787bf7a) App platform to host the PHP app for $5, monthly. Note that the app platform has a free tier for hosting static sites.

![DigitalOcean App Platform Pricing]({{site.baseurl}}/assets/2023/digitalocean-app-platform-pricing.png)

In the app platform you can also define app level environment variablesand also forward logs to providers such as papertrail, whjich is great as I now receive daily emails of any errors in my PHP application

For the database, [DigitalOcean's managed database]( https://www.digitalocean.com/blog/just-how-managed-are-digitaloceans-managed-databases) provide daily backups,  data encryption at rest and in transit , and only allow-listed IP addresses can access the database.

![DigitalOcean Managed Database Pricing]({{site.baseurl}}/assets/2023/digitalocean-managed-database-pricing.png)

Worry free!

##  The End of the DigicalOcean Droplet, long live DigitalOcean App platform

It was quite painful migrating my old PHP appliation to the App Platform, but mostly that was because I needed top modify my ageing code to the latest PhP 8.x standards.

I finally pushed the Destroy Droplet button, wow, that was a scary moment - 8 years in the making.

![DigitalOcean App Platform Pricing]({{site.baseurl}}/assets/2023/digitalocean-destroy-droplet.png)

So, now I'm paying $20 a month for a Fully Managed PHP MySQL Website, compared to a $6 droplet.

Would I go back to managing a Droplet? No thanks! Too much worry in today's security landscape.  

Bring on cost-effective managed hosting by [![DigitalOcean Referral Badge](https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg)](https://www.digitalocean.com/?refcode=92e12787bf7a&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)

Please click on the above link, you'll get $200 credit to use over 60 days, and I'll get some $ in return if you decide to stay with [DigitalOcean](https://m.do.co/c/92e12787bf7a).

Contact me on Twitter @messageHal if you have any questions. 

Thanks fo reading.

Love and Power,
Hywel.