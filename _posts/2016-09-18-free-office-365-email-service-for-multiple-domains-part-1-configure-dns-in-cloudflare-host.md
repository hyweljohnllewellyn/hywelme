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

- [Convert Office 365 User Email to Shared Mailbox and Remove the User License](http://www.hywel.me/small/business/email/2016/01/12/convert-office-365-user-email-to-shared-mailbox-and-remove-the-user-license.html)
- [How to Configure Mac Mail Client for Sending and Receiving Email from Office 365 Shared Mailbox](http://www.hywel.me/small/business/email/2015/11/21/office-365-configure-shared-mailbox-mac-email-client.html)
- [Microsoft Office 365 Catch-all using Additional Alias Email Addresses](http://www.hywel.me/small/business/email/2015/11/19/microsoft-office-365-catch-all-additional-email-alias.html)


## Step 1 Identify Required Office 365 DNS for Email 

Using this link; [Create DNS records for Office 365](https://support.office.com/en-gb/article/Create-DNS-records-for-Office-365-using-Windows-based-DNS-9eec911d-5773-422c-9593-40e1147ffbde),  DNS records that are needed for email using Office 365 were identified.  

These are:

- An MX record so email for your domain will come to Office 365
- An Autodiscover CNAME record for the email (Exchange)
- An SPF TXT record for your domain to help prevent email spam

## Step 2: Add Domain to Office 365

### 2.1 Login to Office 365 and select Admin

![2.1 Login to Office 365 and select Admin]({{site.baseurl}}/assets/2016-09-182.1 Login to Office 365 and select Admin 2.jpg)

### 2.2 Under Settings click Domains

![2.2 Under Office 365 Settings click Domains]({{site.baseurl}}/assets/2016-09-18/2.2 Under Office 365 Settings click Domains.jpg)

### 2.3 Click  + Add Domain

![2.3 Click Add Domain in Office 365]({{site.baseurl}}/assets/2016-09-18/2.3 Click Add Domain in Office 365.jpg)

### 2.4 Type your new additional domain and click Next

![2.4 Type your new Office 365 additional domain and click Next]({{site.baseurl}}/assets/2016-09-18/2.4 Type your new additional domain and click Next.jpg)

### 2.5 Copy the TXT value shown under the Verify domain screen

![2.5 Copy the TXT value shown under the Verify domain screen Office 365]({{site.baseurl}}/assets/2016-09-18/2.5 Copy the TXT value shown under the Verify domain screen.jpg)


## Step 3: Verify Domain for Office 365 - CloudFlare DNS is used in this example

Open a new browser window, go to your domain within your DNS host. You will be adding a TXT record with the verify value provided by Office 365.

### 3.1 Select TXT

![3.1 Select TXT in CloudFlare DNS]({{site.baseurl}}/assets/2016-09-18/3.1 Select TXT in CloudFlare DNS.jpg)

### 3.2 Paste the Office 365 TXT value - from Step 2.5 to TXT Content and Save

![3.2 Paste the Office 365 TXT value - from Step 2.5 to TXT Content and Save]({{site.baseurl}}/assets/2016-09-18/3.2 Paste the Office 365 TXT value - from Step 2.5 to TXT Content and Save.jpg)

### 3.3 Click Add Record

![3.3 Click Add Record to add TXT for Office 365 domain validation]({{site.baseurl}}/assets/2016-09-18/3.3 Click Add Record to add TXT for Office 365 domain validation.jpg)

Note there are some detailed step by step instructions provided to [Create DNS records at Cloudflare for Office 365](https://support.office.com/en-US/article/Create-DNS-records-at-Cloudflare-for-Office-365-84acd4fc-6eec-4d00-8bed-568f036ae2af#BKMK_add_CNAME), which may help.

### 3.4 Back in the Office 365 browser window, Click Verify

![3.4 Back in the Office 365 browser window Click Verify]({{site.baseurl}}/assets/2016-09-18/3.4 Back in the Office 365 browser window Click Verify.jpg)


## Step 4: Add MX Record To Direct Email for your Domain to Office 365

### 4.1 Select I'll my own DNS records and click Next

![4.1 Select I'll my own DNS records and click Next in Office 365]({{site.baseurl}}/assets/2016-09-18/4.1 Select I'll my own DNS records and click Next.jpg)

### 4.2 Copy the mail protection text to clipboard

![4.2 Copy the Office 365 mail protection text to clipboard]({{site.baseurl}}/assets/2016-09-18/4.2 Copy the Office 365 mail protection text to clipboard.jpg)

### 4.3 In a separate browser for your DNS Host select a new MX Record and paste the text, in this case CloudFlare

![4.3 In CloudFlare select a new MX Record and paste the Office 365 mail protection ]({{site.baseurl}}/assets/2016-09-18/4.3 In CloudFlare select a new MX Record and paste the Office 365 mail protection .jpg)

### 4.4 Click Add Record to add the MX record

![4.4 Click Add Record to add the MX record to CloudFlare]({{site.baseurl}}/assets/2016-09-18/4.4 Click Add Record to add the MX record to CloudFlare.jpg)


## Step 5: Add Autodiscover CNAME record for the email (Exchange)

### 5.1 From the the Office 365 browser, copy the autodiscover.outlook.com to clipboard

![5.1 From the the Office 365 browser copy the autodiscover.outlook.com to clipboard]({{site.baseurl}}/assets/2016-09-18/5.1 From the the Office 365 browser copy the autodiscover.outlook.com to clipboard.jpg)

### 5.2 In the CloudFlare browser window add a CNAME record for autodiscover as shown, remember to click Add Record

![5.2 CloudFlare add a CNAME record for outlook autodiscover as shown remember to click Add Record]({{site.baseurl}}/assets/2016-09-18/5.2 CloudFlare add a CNAME record for outlook autodiscover as shown remember to click Add Record.jpg)


## Step 6: Add SPF TXT record in DNS Host for your domain to help prevent email spam

### 6.1 From the the Office 365 browser, copy the TXT value for SPF to clipboard

![6.1 From Office 365 copy the TXT value for SPF to clipboard]({{site.baseurl}}/assets/2016-09-18/6.1 From Office 365 copy the TXT value for SPF to clipboard.jpg)

### 6.2 In the CloudFlare browser window add a TXT, pasting the SPF text from step 6.1

![6.2 CloudFlare add a TXT pasting the SPF for Outlook Spam prevention]({{site.baseurl}}/assets/2016-09-18/6.2 CloudFlare add a TXT pasting the SPF.jpg)

### 6.3 Click Add Record

![6.3 Click Add Record to add the TXT CloudFlare SPF record for outlook ]({{site.baseurl}}/assets/2016-09-18/6.3 Click Add Record to add the TXT CloudFlare SPF record for outlook .jpg)


## Step 7: Verify the new Domain DNS Settings in Office 365 and Finish

### 7.1 In the Office 365 Browser - Update DNS Settings window, click Verify

![7.1 Office 365 - Update DNS Settings window click Verify]({{site.baseurl}}/assets/2016-09-18/7.1 Office 365 - Update DNS Settings window click Verify.jpg)

### 7.2 You may see some warning triangles against CNAME and SRV, that's because we only configured DNS for email, not all Office 365 services.  Just click Skip

![7.2 You may see some warning triangles against CNAME and SRV -not all Office 365 services selected click Skip]({{site.baseurl}}/assets/2016-09-18/7.2 You may see some warning triangles against CNAME and SRV -not all Office 365 services selected click Skip.jpg)

### 7.3 Click Finish

![7.3 Verify the new Domain DNS Settings in Office 365 and Finish]({{site.baseurl}}/assets/2016-09-18/7.3 Verify the new Domain DNS Settings in Office 365 and Finish.jpg)


## Summary
We have added the new domain2.com to Office 365 and configured the required DNS records for email in the CloudFlare DNS Host.  In my next post I will describe how to configure Office 365 to use this additional domain for email.
