---
layout: post
date: '2016-10-03 16:14 +0100'
author: Hywel
published: true
custom_js:
- /_includes/lib/axios/dist/axios.standalone.js
- /_includes/lib/CryptoJS/rollups/hmac-sha256.js
- /_includes/lib/CryptoJS/rollups/sha256.js
- /_includes/lib/CryptoJS/components/hmac.js
- /_includes/lib/CryptoJS/components/enc-base64.js
- /_includes/lib/url-template/url-template.js
- /_includes/lib/apiGatewayCore/sigV4Client.js
- /_includes/lib/apiGatewayCore/apiGatewayClient.js
- /_includes/lib/apiGatewayCore/simpleHttpClient.js
- /_includes/lib/apiGatewayCore/utils.js
- /_includes/apigClient.js
title: Java AWS Lambda API Gateway using Javascript Client - Auto Quote
---
{% if page.custom_js %}
  {% for js_file in page.custom_js %}
  <script src='{{ js_file }}' type="text/javascript"></script>
  {% endfor %}
{% endif %}

{% include autoquote.html %}

http://mattgemmell.com/page-specific-assets-with-jekyll/
