---
layout: post
title:  "Microsoft Office 365 Catch-all using Additional Alias Email Addresses"
date:   2015-11-19 21:23:00
author: Hywel
meta: Microsoft Office 365 small business email setup catch-all alias  admin alternative
categories: small business email
excerpt: Office 365 does not support catch all email, that is addresses not specifically defined in the mail server.  Additional alias addresses can be created to re-direct email to a specified user.
---
[Microsoft Office 365 Business Essentials](https://products.office.com/en-gb/business/compare-office-365-for-business-plans) costs from £3.10 per 'Exchange' user per month

An 'Exchange' user is a single email account for a specified domain, with 50 Gb of storage and highly configurable mail server rules.  

Some mail providers provide multiple email accounts for a given domain, so Office 365 can get quite expensive with multiple users, just for email.  

Though it has to be said - the email service we have experienced for the last 4 months from Office 365 has been great for spam protection and reliability.  You get what you pay for.

Office 365 **does not** support [catch-all](https://en.wikipedia.org/wiki/Catch-all), that is email addresses not specifically defined in the mail server.

Additional addresses can be created to re-direct email to a specified user.   Note that this is distinct to a shared mailbox, which appears as a separate mail box from the user.  Setting up shared mailboxes on Office 365 will be described in an upcoming post.

For this example, the 'Exchange' user will be hywel@customdomain.co.uk.  Additional  'catch-all' email addresses for howell@customdomain.co.uk and contact@customdomain.co.uk will be configured.

1. From the Office 365 admin center, select the user and click 'EDIT'
2. Select 'Email addresses' and click *Add new* under  **Other email addresses**
3. Enter 'howell' in the space before the @ sign and click 'Add'.  
4. Repeat steps 2 and 3 to add 'contact' as an alias

That's it, this method provides functionality similar to catch-all,  whilst maintaining the excellent service from Office 365 email.
