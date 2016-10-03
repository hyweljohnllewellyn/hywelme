---
layout: post
date: '2016-10-03 16:14 +0100'
author: Hywel
published: true
custom_js:
- /_includes/apiGateway-js-sdk/lib/axios/dist/axios.standalone.js
- /_includes/apiGateway-js-sdk/lib/CryptoJS/rollups/hmac-sha256.js
- /_includes/apiGateway-js-sdk/lib/CryptoJS/rollups/sha256.js
- /_includes/apiGateway-js-sdk/lib/CryptoJS/components/hmac.js
- /_includes/apiGateway-js-sdk/lib/CryptoJS/components/enc-base64.js
- /_includes/apiGateway-js-sdk/lib/url-template/url-template.js
- /_includes/apiGateway-js-sdk/lib/apiGatewayCore/sigV4Client.js
- /_includes/apiGateway-js-sdk/lib/apiGatewayCore/apiGatewayClient.js
- /_includes/apiGateway-js-sdk/lib/apiGatewayCore/simpleHttpClient.js
- /_includes/apiGateway-js-sdk/lib/apiGatewayCore/utils.js
- /_includes/apiGateway-js-sdk/apigClient.js
title: Java AWS Lambda API Gateway using Javascript Client - Auto Quote
---
{% if page.custom_js %}
  {% for js_file in page.custom_js %}
  <script src='{{ js_file }}' type="text/javascript"></script>
  {% endfor %}
{% endif %}

{% include autoquote.html %}

http://mattgemmell.com/page-specific-assets-with-jekyll/
