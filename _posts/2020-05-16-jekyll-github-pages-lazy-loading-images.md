---
layout: post
date: '2020-05-16 19:02 +0100'
author: Hywel
published: true
title: Jekyll and GitHub Pages - Lazy Loading Images
categories: optimising webpages mobile
meta: jekyll github pages optimising websites lazy load
---
## What is Lazy Loading Images?

Lazy loading images is a way to only load the image when the user can see it on their browser, that is when it is "on screen".  It means that the page will , or should load faster, paricularly on mobile devices where bandwidth is limited.  [Google developers](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video) offer more insight.  This [blog](https://addyosmani.com/blog/lazy-loading/) talks about native lazy loading in the browser and different attributes .  

## Can Lazy Loading Images be used by Jekyll?

The short answer is yes.  I wil be using the [ranvir blog](https://ranvir.xyz/blog/lazy-loading-your-images-in-jekyll-blog-improving-page-speed/) and the [lazysizes](https://github.com/aFarkas/lazysizes) lazy loader for images to see if it makes a difference to Google Page Speed Insights.     
 
## Mobile Google Page Speed Insights - Before

Before applying lazy loading of images to the test page, it achieved a mobile page speed score of 92, which is actually very good. Can lazy loading improve on this?

![google page speeds before lazy loading images]({{site.baseurl}}/assets/2020/google page speed before lazy loading images-min.jpg)

## Including the lazysizes javascript in the Webpage

According to the [ranvir blog](https://ranvir.xyz/blog/lazy-loading-your-images-in-jekyll-blog-improving-page-speed/), the best place to include the lazysizes script is the default.html.  I decided to add to the header.html and rather install locally reference the script from source: 

{% highlight html %}
<script src="https://afarkas.github.io/lazysizes/lazysizes.min.js" async=""></script>
{% endhighlight %}

I then added _includes/lazyload.html as instricted on the ranvir blog, and finally updated the image refernces in the Jekyll markdoen from:

{% highlight html %}
![Google Page Speed Insights Before Removing Disqus on Desktop]({{site.baseurl}}/assets/google page speeds desktop score before.jpg)
{% endhighlight %}

to this format:

{% highlight html %}
{% raw %}
{% include lazyload.html image_src="/assets/google page speeds desktop score before.jpg" image_alt="Google Page Speed Insights Before Removing Disqus on Desktop" image_title="Google Page Speed Insights Before Removing Disqus on Desktop" %}
{% endraw %}
{% endhighlight %}


Now, when inspecting the html, the lazyloaded class is included

{% highlight html %}
<img data-src="/assets/google page speeds desktop score before.jpg" alt="Google Page Speed Insights Before Removing Disqus on Desktop" title="Google Page Speed Insights Before Removing Disqus on Desktop" class="blur-up ls-is-cached lazyloaded" src="/assets/google page speeds desktop score before.jpg">
{% endhighlight %}

## Did Lazy Loading the images make a difference to Google Page Speed Insight?

No.  The score was exactly the same.  However, I am not convinced that lazy loading is being implemented.  I have started exploring how to check   [how to check lazy loading](https://medium.com/pixboost/step-by-step-guide-to-test-your-off-screen-image-performance-lazy-loading-with-pixboost-js-ca4ce8f54f86/).
 
 I'll update this post with my findings. 


