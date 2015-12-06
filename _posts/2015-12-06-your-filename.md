---
layout: post
date: "2015-12-06 14:10 +0000"
author: Hywel
categories: static sites
excerpt: "GitHub allows the configuring of Apex Domains, however is it recommended to use a subdomain’.The CNAME file should be placed in your repository and there should only be one thing in the file, namely the name of you custom subdomain.  Add the www CNAME record within the victoriancarolsingershire.uk account in CloudFlare."
meta: CloudFlare GitHub Pages CNAME subdomain DNS
published: false
title: GitHub Pages Custom Domain Names with CloudFlare
---


## Why Use a Custom Domain Name 

Static websites hosted with Github Pages by default are shown in the form https://hyweljohnllewellyn.github.io/victoriancarolsingershire/, with the Github username followed by the repository name.

If the purpose of the website is for marketing a brand, service or product, then a custom domain would provide a better identity, for example, http://www.victoriancarolsingershire.uk.  This custom domain name describes the service being offered as well as the location.

The domain name was purchased through [Name Cheap](http://namecheap.com), which is great value for money for domains, though I have stuggled somewhat with managing settings through it's administration console.

Therefore, I generally use Cloudflare, which is a [Content Delivery Network](https://en.wikipedia.org/wiki/Content_delivery_network) to administer [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System) settings.

## GitHub Pages Custom Domain Names

GitHub allows the configring of Apex Domains, for example http://victoriancarolsingershire.uk i.e without the _'www'_, however  GitHub recommends using a subdomain, for example http://www.victoriancarolsingershire.uk, i.e with the _'www'_, as described by GitHub at [About Custom Domains](https://help.github.com/articles/about-custom-domains-for-github-pages-sites/).  Briefly, using GitHub Pages subdomains will make the pages load faster.

GitHub has a great guide to configuring [Custom Subdomains](https://help.github.com/articles/tips-for-configuring-a-cname-record-with-your-dns-provider/).

Note that I am aware that by using CloudFlare, then I may be losing some benefits of GitHub's own Content Delivery, but for now it seems to work for me.

### Step 1: Create a CNAME file
The CNAME File should be placed in your repository and there should only be one thing in the file, namely the name of you custom subdomain, in this case **www.victoriancarolsingershire.uk**

![CNAME GitHub Pages]({{site.baseurl}}/assets/2015-12-06/cname file github pages custom subdomain.jpg)

### Step 2: CloudFlare CNAME
Add the www CNAME record within the victoriancarolsingershire.uk account in CloudFlare.  

![cloudflare cname github subdomain]({{site.baseurl}}/assets/2015/-12-06/cloudflare cname github subdomain.jpg)

All Done, your page is published at the new subdomain:

![published.jpg]({{site.baseurl}}/assets/published.jpg)
