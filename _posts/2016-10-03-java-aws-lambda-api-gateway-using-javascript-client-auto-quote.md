---
layout: post
date: '2016-10-03 16:14 +0100'
author: Hywel
published: true
custom_js:
- /javascript/apiGateway-js-sdk/lib/axios/dist/axios.standalone.js
- /javascript/apiGateway-js-sdk/lib/CryptoJS/rollups/hmac-sha256.js
- /javascript/apiGateway-js-sdk/lib/CryptoJS/rollups/sha256.js
- /javascript/apiGateway-js-sdk/lib/CryptoJS/components/hmac.js
- /javascript/apiGateway-js-sdk/lib/CryptoJS/components/enc-base64.js
- /javascript/apiGateway-js-sdk/lib/url-template/url-template.js
- /javascript/apiGateway-js-sdk/lib/apiGatewayCore/sigV4Client.js
- /javascript/apiGateway-js-sdk/lib/apiGatewayCore/apiGatewayClient.js
- /javascript/apiGateway-js-sdk/lib/apiGatewayCore/simpleHttpClient.js
- /javascript/apiGateway-js-sdk/lib/apiGatewayCore/utils.js
- /javascript/apiGateway-js-sdk/apigClient.js
- /javascript/jquery-3.1.1.min.js
- /javascript/jquery-serialize-object.min.js
title: Java AWS Lambda API Gateway using Javascript Client - Auto Quote
---
{% if page.custom_js %}
  {% for js_file in page.custom_js %}
  <script src='{{ js_file }}' type="text/javascript"></script>
  {% endfor %}
{% endif %}

{% include autoquote.html %}

http://mattgemmell.com/page-specific-assets-with-jekyll/
