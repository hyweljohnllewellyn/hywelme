---
layout: post
title:  "Microsoft Office 365 Catch-all using Additional Alias Email Addresses"
date:   2015-11-19 21:23:00
author: hywel
meta: Microsoft Office 365 small business email setup catch-all alias  admin alternative
categories: small business email
excerpt: Office 365 does by default not support catch all email, that is addresses not specifically defined in the mail server.  Additional alias addresses can be created to re-direct email to a specified user as a simple and safe substitute to catch-all.
---
[Microsoft Office 365 Business Essentials](https://products.office.com/en-gb/business/compare-office-365-for-business-plans) costs from £3.10 per 'Exchange' user per month

An 'Exchange' user is a single email account for a specified domain, with 50 Gb of storage and highly configurable mail server rules.  

Some mail providers provide multiple email accounts for a given domain, so Office 365 can get quite expensive with multiple users, just for email.  

Though it has to be said - the email service we have experienced for the last 4 months from Office 365 has been great for spam protection and reliability.  You get what you pay for.

Office 365 by default does not support [catch-all](https://en.wikipedia.org/wiki/Catch-all), that is email addresses not specifically defined in the mail server.

Additional alias addresses can be created to re-direct email to a specified user as a simple and safe substitute to catch-all.  

Note that an additional alias address is distinct to a shared mailbox, which appears as a separate mail box from the user.  Setting up shared mailboxes on Office 365 will be described in an upcoming post.

For this example, the 'Exchange' user will be hywel@customdomain.co.uk.  Additional  'catch-all' email addresses for howell@customdomain.co.uk and contact@customdomain.co.uk will be configured.

1. Login to Office 365
![step1_office365_login]({{ site.url }}/assets/2015-11-19/step1_office365_login.jpg)

2. Click the little box icons at the top left of the screen, then select the Admin icon
![step2_office365_select_admin]({{ site.url }}/assets/2015-11-19/step2_office365_select_admin.jpg)

3. Under 'USERS' on the left hand pane, select 'Active Users'
![step3_office365_active_users]({{ site.url }}/assets/2015-11-19/step3_office365_active_users.jpg)

4. Select the user and click 'EDIT', on the right hand side
![step4_office365_edit_active_user]({{ site.url }}/assets/2015-11-19/step4_office365_edit_active_user.jpg)

5. Select 'Email addresses'
![step5_office365_user_email_addresses]({{ site.url }}/assets/2015-11-19/step5_office365_user_email_addresses.jpg)

6. Click **Add new** under **Other email addresses**
![step6_office365_add_new_email_address]({{ site.url }}/assets/2015-11-19/step6_office365_add_new_email_address.jpg)

7. Enter 'howell' in the space before the @ sign and click 'Add'.  
![step7_office365_add_additional_address]({{ site.url }}/assets/2015-11-19/step7_office365_add_additional_address.jpg)

8. Repeat steps 6 and 7 to add 'contact' as an alias

That's it, this method provides functionality similar to catch-all,  whilst maintaining the excellent service from Office 365 email.

If you really do want a catch-all in Office 365 Business Essentials, then there is a good post by [yourithelp.co.uk](http://www.yourithelp.co.uk/office-365-create-catchall-wildcard-address-office-365/).
