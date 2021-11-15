---
layout: post
date: '2021-11-15 20:02 +0100'
author: Hywel
published: true
title: Website page with Contact Form using HTML GitHub and Netlify
categories: sites
meta: Hosting GitHub Netlify Contact Form HTML
---

## Using Netlify and GitHub to create a website with a contact form
This is a step—by-step example showing how to create and deploy a website page with a contact form - from start to finish.

I use the [Netlify](https://www.netlify.com) platform to host many static sites and landing pages and Netlify’s contact forms are great for these sites.

Netlify forms also includes free spam protection and a way to redirect to your own success page.

[GitHub](https://github.com) is great as a place to store your site code - not only as it does the usual version control , but the interface is relatively friendly and there is seamless integration to Netlify 

You can think of GitHub repositories as folders to keep files. 

If you are new to GitHub, register if you want to follow along. 

### Step 1 - Create a new GitHub repository
After logging in to GitHub, Click on New next to Repository, give it a name and click Create repository.



I have used GitHub in a previous turorial on [how to create a static site from WordPress](https://www.hywel.me/static/site/wordpress/2016/07/17/fast-free-static-website-with-wordpress-and-github-pages.html)

### Step 2 - Create a basic HTML page
Click add file, selecting Create new file, give it a name of index.html. 

This is important as this is a one-page site, Netlify looks for index.html as default. 

A [basic html page is already coded](https://github.com/hyweljohnllewellyn/html-form-netflify-example/blob/main/index_without_form.html), which can be used as a starting point. 

Paste the code into the file and commit changes, in other words, save the file. 

### Step 3 - Publish the html page using Netlify
Log in to Netlify. 

If you don’t have an account then pause this video and sign up. I've used GitHub credentials for login. 

Select New site from [Git](https://en.wikipedia.org/wiki/Git) and then GitHub, where the source code is hosted.

Find the repository created in step 2, select it and then scroll down and click Deploy site.

This is where Netlify finds the index.html in GitHub and creates a website that is live to the internet.

### Step 4 - Change site address
You can see the website address is not too friendly, so click on Site Setting and change site name. 

Note that it is possibly to use a custom domain, but I won’t cover that in this guide.

Click on the website address and you can see the live html page at [html-form-example.netlify.app](https://html-form-example.netlify.app).

### Step 5 - Create a contact form
Go to [bootstrapformbuilder.com](https://bootstrapformbuilder.com).

Click Add a Text Field and change the Title to ‘name’.

Repeat this for ‘email’, and check the ‘required’ option. This validates that any user has entered an email, else you cannot reply!

Add a Text Area so that a user can enter why they are contacting.

Copy the code to clipboard.

### Step 6 - Add form to your page with the required Netlify attribute
Paste the form code to the website page,  commit the change, refresh your page in the browser to check the form is there.

Then add data=netlify=“true” to the form element so Netlify defects that there is a form and commit the change. 

### Step 7 - Configure Netlify to send email notifications for form submissions 
In the Netlify dashboard for the site, click Forms then Settings and Usage.

Under Form notifications, click Add Notifications and select Email Notifications.

Enter the email address that to be notified, usually the owner of the website and Save.

### Step 8 - Test the form!
We are done. Refresh the page and enter a form submission.

You will receive an email to the address given in step 7.

Note that I went back to give the form a name =“contact” to more easily identify the source in the email notifications.

I also later added a recaptcha, for added spam protection.

Thank you for following along.

## Links
- [Example website with contact form hosted by Netlify](https://html-form-example.netlify.app)
- [GitHub repository with all code used in this how-to](https://github.com/hyweljohnllewellyn/html-form-netflify-example)
- [Form builder](https://bootstrapformbuilder.com)
- [How to setup Netlify forms](https://docs.netlify.com/forms/setup/)
- [How to use Netlify forms spam filters](https://docs.netlify.com/forms/spam-filters/)
- [Netlify forms pricing](https://www.netlify.com/pricing/?_ga=2.16704886.1902366666.1636880523-1782783829.1636880523#add-ons-forms)