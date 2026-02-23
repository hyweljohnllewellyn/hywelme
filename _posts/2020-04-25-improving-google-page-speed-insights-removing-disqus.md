---
layout: post
date: '2020-04-25 17:22 +0100'
author: Hywel
published: true
title: Improving Google Page Speed Insights - Removing Disqus
categories: disqus google page speed insights optimisation
meta: disqus google page speed insights mobile optimisation
excerpt: "This site has never been optimised for mobile. There hasn't been a need. However, 15% of traffic is now from mobile devices, compared with just 2% in 2016."
---
## A trend of increasing traffic to my site from mobile
​
This site has never been optimised for mobile. There hasn't been a need. However, 15% of traffic is now from mobile devices, compared with just 2% in 2016.

Using the fantastic Google PageSpeed Insights, it can be seen where the site has potential for improvement. A score of 48 out of 100 is just awful for mobile.
​
{% include lazyload.html image_src="/assets/google page speeds mobile score before.jpg" image_alt="Google Page Speed Insights Before Removing Disqus on Mobile" image_title="Google Page Speed Insights Before Removing Disqus on Mobile" %}
​
Even on desktop, there is an opportunity to improve from a score of 93.
​
{% include lazyload.html image_src="/assets/google page speeds desktop score before.jpg" image_alt="Google Page Speed Insights Before Removing Disqus on Desktop" image_title="Google Page Speed Insights Before Removing Disqus on Desktop" %}

​
## What Improvement Was Achieved by Removing Disqus from the Static Site?
​
As you can see, after removing the Disqus comments script from the site, the mobile performance is now  95 out of 100.  That's an improvement of almost 50!

{% include lazyload.html image_src="/assets/2020/google page speeds mobile score after removing disqus.jpg" image_alt="Google Page Speed Insights After Removing Disqus on Mobile" image_title="Google Page Speed Insights After Removing Disqus on Mobile" %}
​
Crucially, the Disqus script is no longer impacting page load performance.

{% include lazyload.html image_src="/assets/2020/third party code is not blocking page load.jpg" image_alt="third party code is not blocking page load" image_title="third party code is not blocking page load" %}
​
And amazingly, the desktop performance is now at 100!
​
{% include lazyload.html image_src="/assets/2020/google page speeds desktop score after.jpg" image_alt="Google Page Speed Insights After Removing Disqus on Desktop" image_title="Google Page Speed Insights After Removing Disqus on Desktop" %}