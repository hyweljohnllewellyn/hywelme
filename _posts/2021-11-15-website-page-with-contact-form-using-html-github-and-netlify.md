---
layout: post
date: '2021-11-15 20:02 +0100'
author: Hywel
published: true
title: Website page with Contact Form using HTML GitHub and Netlify
categories: sites
meta: Hosting GitHub Netlify Contact Form HTML
---

## Why Netlify and GitHub?
This is a step—by-step example showing how to create and deploy a website page with a contact form - from start to finish.

I use the [Netlify](https://www.netlify.com) platform to host many static sites and landing pages for free for up to 100 submissions per month per site, and [Netlify's Forms](https://www.netlify.com/products/forms/) are great way to gather user responses and includes free spam protection.

[GitHub](https://github.com) is great as a place to store your site code - not only as it does the usual version control , but the interface is relatively friendly and there is seamless integration to Netlify.

You can think of GitHub repositories as folders to keep files. 

If you are new to [GitHub, sign-up](https://github.com/signup) if you want to follow along. 

### Step 1 - Create a new GitHub repository
1a - After logging in to GitHub, click on New, next to Repository:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/3a_login_to_Netlify_toufEROMn.png?updatedAt=1637495642423" image_alt="1a_new_GitHub_repository" image_title="1a_new_GitHub_repository" %}

1b - Give the repository a name, note it must be unique:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/1b_name_GitHub_repository_h6zY0IZWx.png?updatedAt=1637492810318" image_alt="1b_name_GitHub_repository" image_title="1b_name_GitHub_repository" %}

1c - Click Create repository.
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/1c_create_GitHub_repository_iyLdN7CNr.png?updatedAt=1637492710345" image_alt="1c_create_GitHub_repository" image_title="1c_create_GitHub_repository" %}

I have used GitHub in a previous turorial on [how to create a static site from WordPress](https://www.hywel.me/static/site/wordpress/2016/07/17/fast-free-static-website-with-wordpress-and-github-pages.html)

### Step 2 - Create a basic HTML page
2a - Click add file, selecting Create new file:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/2a_create_new_GitHub_file_1ErpBpdIDI.png?updatedAt=1637492853585" image_alt="2a_create_new_GitHub_file" image_title="2a_create_new_GitHub_file" %}

2b - Give it a name of index.html: 
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/2b_give_GitHub_file_a_name_index_Q4wSfYsMC.png?updatedAt=1637492837704" image_alt="2b_give_GitHub_file_a_name_index" image_title="2b_give_GitHub_file_a_name_index" %}

This is important as this is a one-page site, Netlify looks for index.html as default. 

A [basic html page is already coded](https://github.com/hyweljohnllewellyn/html-form-netflify-example/blob/main/index_without_form.html), which can be used as a starting point. 

2c - Paste the code into the file :
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/2c_paste_basic_html_page__gJ3T1dkf6.png?updatedAt=1637492845783" image_alt="2c_paste_basic_html_page" image_title="2c_paste_basic_html_page" %}

2d - Commit changes, in other words, save the file:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/2d_commit_changes_to_GitHub_file_fYsX4_iQd.png?updatedAt=1637492826385" image_alt="2d_commit_changes_to_GitHub_file" image_title="2d_commit_changes_to_GitHub_file" %}

### Step 3 - Publish the html page using Netlify
3a - Log in to Netlify:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/3a_login_to_Netlify_toufEROMn.png?updatedAt=1637495642423" image_alt="3a_login_to_Netlify" image_title="3a_login_to_Netlify" %}

If you don’t have an account then pause this video and sign up. I've used GitHub credentials for login. 

3b - Select New site from [Git](https://en.wikipedia.org/wiki/Git):
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/3b_new_site_from_Git_W-smh1i9X.png?updatedAt=1637495652292" image_alt="3b_new_site_from_Git" image_title="3b_new_site_from_Git" %}

and then GitHub, where the source code is hosted:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/3b1_new_site_GitHub_QKJpXoPfF.png?updatedAt=1637495657760" image_alt="3b1_new_site_GitHub" image_title="3b1_new_site_GitHub" %}

3c - Find the repository created in step 2, select it:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/3c_find_GitHub_repository__ynt1XMP6z.png?updatedAt=1637495663899" image_alt="3c_find_GitHub_repository" image_title="3c_find_GitHub_repository" %}

3d - Scroll down and click Deploy site:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/3d_Deploy_Site_on_Netlify_G9W6nmop_.png?updatedAt=1637495671665" image_alt="3d_Deploy_Site_on_Netlif" image_title="3d_Deploy_Site_on_Netlif" %}

This is where Netlify finds the index.html in GitHub and creates a website that is live to the internet.

### Step 4 - Change site address
4a - You can see the website address is not too friendly, so click on Site Settings:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/4a_Netlify_Site_Settings_W-9atzYEB.png?updatedAt=1637496048758" image_alt="4a_Netlify_Site_Settings" image_title="4a_Netlify_Site_Settings" %}

4b - Change site name:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/4b1_Change_Netlify_site_Name__oPzoahQ-.png?updatedAt=1637496231136" image_alt="54b1_Change_Netlify_site_name" image_title="4b1_Change_Netlify_site_name" %}

{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/4b2_change_Netlify_Site_name_5WxJ1BUMm.png?updatedAt=1637496228341" image_alt="4b2_change_Netlify_Site_name" image_title="4b2_change_Netlify_Site_name" %}


Note that it is possibly to use a custom domain, but I won’t cover that in this guide.

4c - Click on the website address:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/4c_click_site_address_9rBlstWtD.png?updatedAt=1637496462811" image_alt="4c_click_site_address" image_title="4c_click_site_address" %}

4d - See the live html page at [html-form-example.netlify.app](https://html-form-example.netlify.app):
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/4c2_Live_at_html-form-example_LU8-nzixK.png?updatedAt=1637496469154" image_alt="html-form-example.netlify.app" image_title="html-form-example.netlify.app" %}

### Step 5 - Create a contact form
Go to [bootstrapformbuilder.com](https://bootstrapformbuilder.com).

5a - Click Add a Text Field:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/5a_form_builder_add_text_field_h8LNDoqLL.png?updatedAt=1637496889870" image_alt="5a_form_builder_add_text_field" image_title="5a_form_builder_add_text_field" %}

5b - Change the Title to ‘name’:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/5b_change_title_to_name_u1BYYLhmy.png?updatedAt=1637496894674" image_alt="5b_change_title_to_name" image_title="5b_change_title_to_name" %}

5c - Repeat this for ‘email’, and check the ‘required’ option. This validates that any user has entered an email, else you cannot reply!
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/5c_repeat_for_email_with_required_field_0y6xgK_-e.png?updatedAt=1637497106743" image_alt="5c_repeat_for_email_with_required_field" image_title="5c_repeat_for_email_with_required_field" %}

5d - Add a Text Area so that a user can enter why they are contacting:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/5d_add_Text_Area_CMPw_-Dipw.png?updatedAt=1637496904450" image_alt="5d_add_Text_Area" image_title="5d_add_Text_Area" %}

5e - Copy the code to clipboard:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/5e_copy_code_to_clipboard_SPZm56Ntw.png?updatedAt=1637496909435" image_alt="5e_copy_code_to_clipboard" image_title="5e_copy_code_to_clipboard" %}

### Step 6 - Add form to your page with the required Netlify attribute
6a - Click edit this file:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/6a_edit_file__4lnaMiZKv.png?updatedAt=1637497814344" image_alt="6a_edit_file" image_title="6a_edit_file" %}

6b - Paste the form code to the website page:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/6b_paste_the_form_45hN7-vqV.png?updatedAt=1637497824227" image_alt="6b_paste_the_form" image_title="6b_paste_the_form" %}

6c - Add data=netlify=“true” to the form element so Netlify defects that there is a form:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/6c_add_netlify_true_-Ga7E-yg4M.png?updatedAt=1637497831877)" image_alt="6c_add_netlify_true" image_title="6c_add_netlify_true" %}

6d - Commit the change:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/6d_commit_changes__bZItGd8oc.png?updatedAt=1637497837015)" image_alt="6d_commit_changes" image_title="6d_commit_changes" %}

6e - Refresh your page in the browser to check the form is there:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/6e_check_the_form_is_live_6ZXtjUsTx.png?updatedAt=1637497841532)" image_alt="6e_copy_code_to_clipboard" image_title="6e_copy_code_to_clipboard" %}

### Step 7 - Configure Netlify to send email notifications for form submissions
7a - In the Netlify dashboard for the site, click Forms:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/7a_click_Netlify_forms_aN6ZnSV32.png?updatedAt=1637498470963)" image_alt="7a_click_Netlify_forms" image_title="7a_click_Netlify_forms" %}

7b - Click Settings and usage:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/7b_click_settings_and_usage_Egz3B3iWE.png?updatedAt=16374988811803)" image_alt="7b_click_settings_and_usage" image_title="7b_click_settings_and_usage" %}


7c - Under Form notifications, click Add Notifications and select Email Notification:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/7c_add_form_email_notification_Z51ku3CGi.png?updatedAt=1637498887151)" image_alt="7c_add_form_email_notification" image_title="7c_add_form_email_notification" %}

7d - Enter the email address to be notified, usually the owner of the website and Save:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/7d_enter_email_for_form_notification_j6cg5F4U5.png?updatedAt=1637498892788)" image_alt="7d_enter_email_for_form_notification" image_title="7d_enter_email_for_form_notification" %}

### Step 8 - Test the form!
We are done. Refresh the page and enter a form submission:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/8a_submit_form__VJUnAsiHT.png?updatedAt=1637499123259)" image_alt="enter a form submission" image_title="enter a form submission" %}

You will receive an email to the address given in step 7:
{% include lazyload.html image_src="https://ik.imagekit.io/hywelllewellyn/8b_received_the_email_notification_D9xl06HUZ.png?updatedAt=1637499127616)" image_alt="8b_received_the_email_notification" image_title="8b_received_the_email_notification" %}

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