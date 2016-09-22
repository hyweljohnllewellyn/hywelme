---
layout: post
title:  "How to Configure Mac Mail Client for Sending and Receiving Email from Office 365 Shared Mailbox"
date:   2015-11-21 13:45:00
author: hywel
meta: Office 365 small business email shared mailbox configure mac mail client
categories: small business email
excerpt: Assuming you have already setup your shared mailbox through the Office 365 Admin, here are the steps to set up Mac Mail to receive and send email using the shared mailbox.
---
### Microsoft Office 365 for Email

Email is an essential part of managing a small business.  In our experience, we found that [Zoho Mail](https://www.zoho.com/mail/) was allowing too much spam content through to the inbox, hiding essential emails from clients.  

[Microsoft Office 365](https://products.office.com/en-gb/business/compare-office-365-for-business-plans) is a full productivity suite.   The business essentials subscription of £3.10 per user per month provides:

- 1 Microsoft Exchange user email account - 50 Gb
- 1 Tb of cloud storage
- Online (cloud) versions of Word, Excel and Powerpoint
- Unlimited Online meetings through Skype

<script type="text/javascript" src="https://impus.tradedoubler.com/imp?pop(under)g(23085440)a(2850736)" charset="ISO-8859-1"></script>

There are several guides to using Office 365 and comparison with other productivity solutions, notably  [Zoho](https://www.zoho.com/mail/) and [Google Apps](https://apps.google.com/intx/en_uk/).

The key reason we chose Office 365 over Google Apps was that we already had a Google Email for the business, but Google would not allow this account to be *converted* to a Google Apps account.

### Setting up a Mac Mail Client for the Shared Mailbox

In this example  hywel@customdomain.co.uk is the active user with an assigned Office 365 license.  A shared mail box of info@customdomain.co.uk has been setup through [Office 365 Admin](https://support.office.com/en-in/article/Create-shared-mailboxes-in-Office-365-for-Small-Business-ecacf5b0-b5c8-449f-a89a-b7e87dcb55d4?ui=en-US&rs=en-IN&ad=IN).  Here are the steps to set up Mac Mail client to receive and send mail using the new shared mailbox.

#### Receiving Mail

1. Go to Mac Mail -> Preferences
![step 1 go to mail preferences]({{ site.url }}/assets/2015-11-21/step 1 go to mail preferences.jpg)

2. Add new account by selecting the plus icon
![step 2 add new account]({{ site.url }}/assets/2015-11-21/step 2 add new account.jpg)

3. Choose the *Other Mail Account* radio button
![step 3 choose other mail account]({{ site.url }}/assets/2015-11-21/step 3 choose other mail account.jpg)

4. Enter the *shared* mailbox email address, info@customdomain.co.uk and password of hywel@customdomain.co.uk (the user with an assigned Office 365 license)
![step 4 fill in email of shared mailbox]({{ site.url }}/assets/2015-11-21/step 4 fill in email of shared mailbox.jpg)

5. Don't worry if you see the error *Unable to verify account name of password*. Enter the following:

Email Address: **info@customdomain.co.uk**  *(the shared mailbox email address)*

User Name: **hywel@customdomain.co.uk/info**  *(the user email address with the shared mailbox name after a trailing slash)*

Account Type: **IMAP**  *(POP is available, but I prefer IMAP)*

Incoming Mail Server: **outlook.office365.com**

Outgoing Mail Server: **smtp.office365.com**

![step 5 set username and mail servers]({{ site.url }}/assets/2015-11-21/step 5 set username and mail servers.jpg)

6. Click 'Sign In' button and then select 'Mail' as the app to use
![step 6a sign in]({{ site.url }}/assets/2015-11-21/step 6a sign in.jpg)
![step 6b select mail as the app to use]({{ site.url }}/assets/2015-11-21/step 6b select mail as the app to use.jpg)

7. Your new *Shared Inbox* is ready and should be receiving email
![step 7 Receiving Email]({{ site.url }}/assets/2015-11-21/step 7 Receiving Email.jpg)

#### Sending Mail

8. Go to Mac Mail -> Preferences and under *Outgoing Mail Server (SMTP)* select **Edit SMTP Server List...**
![step 8 edit SMTP server list]({{ site.url }}/assets/2015-11-21/step 8 edit SMTP server list.jpg)

9. Select *Advanvced* button and under *Authentication* select **Password**
![step 9 click advanced authentication password]({{ site.url }}/assets/2015-11-21/step 9 click advanced authentication password.jpg)

10. Set *Port* to **25** and enter:

User Name:  **hywel@customdomain.co.uk** *(the user email address)*

Password:  the user's password

![step 10 set port to 25 username and password of primary user]({{ site.url }}/assets/2015-11-21/step 10 set port to 25 username and password of primary user.jpg)

All done, you should now be able to send and receive email using the shared mail box.
