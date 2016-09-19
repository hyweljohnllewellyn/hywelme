---
layout: post
date: '2016-09-19 13:52 +0100'
author: Hywel
published: true
title: >-
  Free Office 365 Email Service for Secondary - Multiple Domains - Part 2
  Configure Exchange Shared Mailbox for Additional Domain
meta: Office 365 small business email free
---
## Free Outlook Email for Secondary or More Domains in Office 365

In my previous post I described how to [Configure CloudFlare DNS for an Additional Domain to use Office 365 for email]({{site.baseurl}}/small/business/email/2016/09/18/free-office-365-email-service-for-multiple-domains-part-1-configure-dns-in-cloudflare-host.html).  If you already have a domain that is licensed for Office 365 services, then there is an option to configure additional domains for email using the shared mailbox feature.  The email for these extra domains do not require new user licenses and so are Free.

In this post I will describe how to configure the Office 365 shared mailbox for a an additional domain, effectively giving a free Office 365 email service.

Steps 1 to 7 from [Part 1]({{site.baseurl}}/small/business/email/2016/09/18/free-office-365-email-service-for-multiple-domains-part-1-configure-dns-in-cloudflare-host.html) cover setting up the Office 365 DNS for email on the DNS Host.  As this is a continuation, I will start with Step 8.

## Step 8: Add the Basic Exchange Shared Mailbox for the New Domain

### 8.1 Under Office 365 Admin Centre, Click Exchange (login from  [step 2.1](http://www.hywel.me/small/business/email/2016/09/18/free-office-365-email-service-for-multiple-domains-part-1-configure-dns-in-cloudflare-host.html))

![8.1 Under Office 365 Admin Centre Click Exchange]({{site.baseurl}}/assets/2016-09-19/8.1 Under Office 365 Admin Centre Click Exchange.jpg)

### 8.2 Click Shared under Recipients of Office Exchange Admin

![8.2 Click Shared under Recipients of Office Exchange Admin]({{site.baseurl}}/assets/2016-09-19/8.2 Click Shared under Recipients of Office Exchange Admin.jpg)

### 8.3 Click the plus + icon to add a new Shared Mailbox

![8.3 Click the plus icon to add a new Shared Mailbox]({{site.baseurl}}/assets/2016-09-19/8.3 Click the plus icon to addd a new Shared Mailbox.jpg)

### 8.4 Enter the Display Name and Email Address for the new Domain Name domain2.com

Note that the primary/ licensed domain for this tutorial is customdomain.com.  The name given for the new domain, before the @ sign should be unique even for the primary domain.

The simplest option is to use the name of the second domain as the shared mailbox email in this step.  Therefore I will use domain2@domain2.com as the email address.  Note that this step will also create a new Active user of domain2@customdomain.com.

![8.4 Enter the Display Name and Email Address for the new Domain Name domain2.com]({{site.baseurl}}/assets/2016-09-19/8.4 Enter the Display Name and Email Address for the new Domain Name domain2.com.jpg)

### 8.5 Click the Plus + icon to add existing to access this new Shared Mailbox

![8.5 Click the Plus icon to add existing to access this new Shared Mailbox]({{site.baseurl}}/assets/2016-09-19/8.5 Click the Plus icon to add existing to access this new Shared Mailbox.jpg)

### 8.6 Select Shared Mailbox Users, click Add and then click OK

![8.6 Select Shared Mailbox Users click Add and then click OK]({{site.baseurl}}/assets/2016-09-19/8.6 Select Shared Mailbox Users click Add and then click OK.jpg)

### 8.7 Click Save to add the New Shared Mailbox domain2@domain2.com

![8.7 Click Save to add the New Shared Mailbox domain2@domain2.com]({{site.baseurl}}/assets/2016-09-19/8.7 Click Save to add the New Shared Mailbox domain2@domain2.com.jpg)

## Step 9: Edit the Shared Mailbox for the New Domain
I want to use this domain email as a catch all email info@domain2.com, rather than domain2@domain2.com.  I can now update the email for this shared mailbox.

### 9.1 Highlight the new Shared Mailbox and click the pencil icon to Edit

![9.1 Highlight the new Shared Mailbox and click the pencil icon to Edit ]({{site.baseurl}}/assets/2016-09-19/9.1 Highlight the new Shared Mailbox and click the pencil icon to Edit .jpg)

### 9.2 Click email address for the domain2.com shared mailbox

![9.2 Click email address for the domain2.com shared mailbox]({{site.baseurl}}/assets/2016-09-19/9.2 Click email address for the domain2.com shared mailbox.jpg)

### 9.3 Ensure that domain2@domain2.com email is highlighted and Click the pencil icon to edit

![9.3 Ensure that domain2@domain2.com email is highlighted and Click the pencil icon to edit]({{site.baseurl}}/assets/2016-09-19/9.3 Ensure that domain2@domain2.com email is highlighted and Click the pencil icon to edit.jpg)

### 9.4 Update the email address from domain2@domain2.com to info@domain2.com and click OK

![9.4 Update the email address from domain2@domain2.com]({{site.baseurl}}/assets/2016-09-19/9.4 Update the email address from domain2@domain2.com.jpg)

![9.4 Update the email address to info@domain2.com and click OK]({{site.baseurl}}/assets/2016-09-19/9.4 Update the email address to info@domain2.com and click OK.jpg)

### 9.5 Click Save to confirm the shared Office 365 email

![9.5 Click Save to confirm the shared Office 365 email]({{site.baseurl}}/assets/2016-09-19/9.5 Click Save to confirm the shared Office 365 email.jpg)

## The Shared Mailbox email is now info@domain2.com and there is a domain2@customdomain.com active user

![9.6 The Shared Mailbox email is now info@domain2.com]({{site.baseurl}}/assets/2016-09-19/9.6 The Shared Mailbox email is now info@domain2.com.jpg)

![9.7 there is a domain2@customdomain.com active user]({{site.baseurl}}/assets/2016-09-19/9.7 there is a domain2@customdomain.com active user.jpg)

## Summary - Free Office 365 Email Service for Secondary, or More Domains

Together, [Part 1]({{site.baseurl}}/small/business/email/2016/09/18/free-office-365-email-service-for-multiple-domains-part-1-configure-dns-in-cloudflare-host.html) and Part 2 of this tutorial, show how to add secondary, or more additional custom domains to Office 365 and use the outlook email service for _free_*.  As long as you only need a relatively basic catch-all type email for the additional domain.  

_* note that you still need at least one licensed Office 365 account_

You may also find my other Office 365 tips useful:

- [Convert Office 365 User Email to Shared Mailbox and Remove the User License]({{site.baseurl}}/small/business/email/2016/01/12/convert-office-365-user-email-to-shared-mailbox-and-remove-the-user-license.html)
- [How to Configure Mac Mail Client for Sending and Receiving Email from Office 365 Shared Mailbox]({{site.baseurl}}/small/business/email/2015/11/21/office-365-configure-shared-mailbox-mac-email-client.html)
- [Microsoft Office 365 Catch-all using Additional Alias Email Addresses]({{site.baseurl}}/small/business/email/2015/11/19/microsoft-office-365-catch-all-additional-email-alias.html)
