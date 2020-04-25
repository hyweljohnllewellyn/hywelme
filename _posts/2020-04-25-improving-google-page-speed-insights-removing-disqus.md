---
layout: post
date: '2020-04-25 17:22 +0100'
author: Hywel
published: true
title: Improving Google Page Speed Insights - Removing Disqus
categories: disqus google page speed insights optimisation
meta: disqus google page speed insights mobile boptimisation
excerpt: "This site has never been optimised for mobile. There hasn't been a need. However, 15% of traffic is now from mobile devices, compared with just 2% in 2016.
Using the fantactic Google PageSpeed Insights, it can be seen where the site has potential for improvement. A score of 48 out of 100 is just awful for mobile."
---
## A trend of increasing traffic to my site from mobile
​
This site has never been optimised for mobile. There hasn't been a need. However, 15% of traffic is now from mobile devices, compared with just 2% in 2016.

Using the fantactic [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), it can be seen where the site has potential for improvement. A score of 48 out of 100 is just awful for mobile.
​
![Google Page Speed Insights Before Removing Disqus on Mobile]({{site.baseurl}}/assets/google page speeds mobile score before.jpg)
​
Even on desktop, there is an opportunity to improve from a score of 93.
​
![Google Page Speed Insights Before Removing Disqus on Desktop]({{site.baseurl}}/assets/google page speeds desktop score before.jpg)

## Why I decided to remove Disqus comments system from my site?
​
I have been using Disqus on this site since 2015. It is a great tool to add comments capablity to a static site, such as this. Analysing the potential opportunities, it can be seen that Disqus is the worst offender at impacting load performance.
![Disqus Impacting Load Performance]({{site.baseurl}}/assets/Disqus impacting load performance .jpg)
​
There are options to potentially improve the performance whilst keeping Disqus.  This site shows how use [lazy-loading](https://en.wikipedia.org/wiki/Lazy_loading) of the Disqus scripts [How to Prevent Disqus Comments System from Slowing Page Speed & Performance](https://usefulangle.com/post/251/disqus-comments-improve-page-load-speed).
​
 I have had some good feedback through Disqus from users of this site, but I don't want to change the default Disqus script behaviour and I definitely don't want to compromose the user experience from mobile devices.
​
## What Improvement Was Achieved by Removing Disqus from the Static Site?
​
As you can see, after removing the Disqus comments script from the site, the mobile performance is now  95 out of 100.  That's an improvement of almost 50!
​
![Google Page Speed Insights After Removing Disqus on Mobile]({{site.baseurl}}/assets/2020/google page speeds mobile score after removing disqus.jpg)
​
Crucially, the Disqus script is no longer impacting the page load performance.
​
![third party code is not blocking page load]({{site.baseurl}}/assets/2020/third party code is not blocking page load.jpg)
​
And amazingly, the desktop performance is now at 100!
​
![Google Page Speed Insights After Removing Disqus on Desktop]({{site.baseurl}}/assets/2020/google page speeds desktop score after.jpg)
​
I will investigate other static site comment systems in a later blog post, for example [staticman](https://staticman.net/), but for now, job done.
​