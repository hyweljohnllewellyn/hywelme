---
layout: post
date: "2015-12-06 19:20 +0000"
author: Hywel
categories: static site
excerpt: Step By Step to adding a Disqus Comment system
meta: Disqus Comments Canonical URL Jekyll
published: true
title: Adding a Comment System to a Jekyll Static Site with Disqus
---

## So I Received feedback through GitHub
Well, I was amazed to receive some feedback through GitHub regarding a post I made regarding [prose.io](http://www.hywel.me/2015/11/23/create-jekyll-static-site-posts-using-proseio.html) from [Phlow](https://github.com/Phlow).  As a side project and to allow comments, I have decided to add Disqus to this website and include as a step by step guide - just in case it's tricky...[so, what is Disqus?](https://help.disqus.com/customer/portal/articles/466179-what-is-disqus-).

###Step 1: Add Disqus to your site 
Once you have found an unique username and entered your email, Disqus will ask for your site details. 

![Add Disqus to your site]({{site.baseurl}}/assets/2015-12-06/disqus add site.jpg)

###Step 2: Choose your Platform
The list of platforms are :
- Universal Code
- Wordpress
- Blogger
- Tumblr
- Squarespace
- TypePad
- MovableType
- Drupal
- Joomla
As my site is static, I've chosen Universal Code
![Disqus choose your platform]({{site.baseurl}}/assets/2015-12-06/disqus choose your platform.jpg)



###Step 3: Disqus Setup Instructions.. for Universal Code
1. Place the following code where you'd like Disqus to load
2. Edit the RECOMMENDED CONFIGURATION VARIABLES section using your CMS or platform's dynamic values _(I will come back to this)_
3. How to display comment count..
4. Additional customization....
![Disqus setup instructions]({{site.baseurl}}/assets/2015-12-06/disqus setup instruction.jpg)

###Step 4: As a mimimim I'll add the code to my post pages
In my post.html after the closing article tag, I've added the Disqus code:

{% highlight javascript %}
  <article class="post-content">
    {{ content }}
  </article>

<!-- Hywel Start Disqus Comments -->
  <div id="disqus_thread"></div>
  <script>
      /**
       *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
       *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
       */
      var disqus_config = function () {
          this.page.url =  {{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }};  // Replace PAGE_URL with your page's canonical URL variable

          //this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };

      (function() {  // DON'T EDIT BELOW THIS LINE
          var d = document, s = d.createElement('script');

          s.src = '//hywelme.disqus.com/embed.js';

          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
      })();
  </script>
  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
<!-- Hywel End Disqus Comments -->

</div>
{% end highlight %}

Note that I used the canonical URL variable as defined in Jekyll's head.html

{% highlight html %}
  <link rel="canonical" href="{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}">
{% end highlight %}
