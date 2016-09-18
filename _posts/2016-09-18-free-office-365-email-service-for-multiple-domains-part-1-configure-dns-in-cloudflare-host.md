---
layout: post
date: '2016-09-18 09:55 +0100'
author: Hywel
published: true
title: >-
  Free Office 365 Email Service for Multiple Domains - Part 1 Configure DNS in
  Cloudflare Host
meta: Office 365 small business email free
categories: small business email
---
## Free Email for Additional Domains in Office 365

For small business, adding user licences to Office 365 can get costly.  If you already have a domain that is licenced for Office 365 services, then there is an option to configure additional domains for email using the shared mailbox feature.  The email for these extra domains do not require new user licences and so are Free.

There are two parts, Configuring DNS for the Additional Domain, which is described in this post... and Configuring the Office 365 Shared Mailbox for Additional Domains, which will be covered in an upcoming post.

See other Office 365 tips in my previous articles:

[Convert Office 365 User Email to Shared Mailbox and Remove the User License](http://www.hywel.me/small/business/email/2016/01/12/convert-office-365-user-email-to-shared-mailbox-and-remove-the-user-license.html)
[How to Configure Mac Mail Client for Sending and Receiving Email from Office 365 Shared Mailbox](http://www.hywel.me/small/business/email/2015/11/21/office-365-configure-shared-mailbox-mac-email-client.html)
[Microsoft Office 365 Catch-all using Additional Alias Email Addresses](http://www.hywel.me/small/business/email/2015/11/19/microsoft-office-365-catch-all-additional-email-alias.html)

## Step 1 Identify Required Office 365 DNS for Email 

Using this link; [Create DNS records for Office 365](https://support.office.com/en-gb/article/Create-DNS-records-for-Office-365-using-Windows-based-DNS-9eec911d-5773-422c-9593-40e1147ffbde),  DNS records that are needed for email using Office 365 were identified.  

These are:

- An MX record so email for your domain will come to Office 365
- An Autodiscover CNAME record for the email (Exchange)
- An SPF TXT record for your domain to help prevent email spam

## Step 2: Add Domain to Office 365

### 2.1 Login to Office 365 and select Admin 
Screen Shot 2016-09-17 at 19.03.50

### 2.2 Under Settings click Domains 
Screen Shot 2016-09-17 at 19.08.50

### 2.3 Click  + Add Domain
Screen Shot 2016-09-17 at 19.09.33

### 2.4 Type your new additional domain and click Next
Screen Shot 2016-09-17 at 19.10.21

### 2.5 Copy the TXT value shown under the Verify domain screen
Screen Shot 2016-09-17 at 19.11.43

## Step 3: Verify Domain for Office 365 - Cloudflare DNS is used in this example

Open a new browser window, go to your domain within your DNS host. You will be adding a TXT record with the verify value provided by Office 365.

### 3.1 Select TXT
Screen Shot 2016-09-17 at 19.12.38

### 3.2 Paste the Office 365 TXT value - from Step 2.5 to TXT Content and Save
Screen Shot 2016-09-17 at 19.12.58

### 3.3 Click Add Record
Screen Shot 2016-09-17 at 19.13.14

Note there are some detailed step by step instructions provided to [Create DNS records at Cloudflare for Office 365](https://support.office.com/en-US/article/Create-DNS-records-at-Cloudflare-for-Office-365-84acd4fc-6eec-4d00-8bed-568f036ae2af#BKMK_add_CNAME), which may help.

### 3.4 Back in the Office 365 browser window, Click Verify
Screen Shot 2016-09-17 at 19.13.48