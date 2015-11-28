---
layout: post
date: "2015-11-28 21:26 +0000"
author: Hywel
categories: Jekyll Static Site
excerpt: ""
meta: "HTML5 image map jquery audio area play pause "
published: false
title: Toggle Play and Pause on Multiple Audio Files by Clicking Areas on an Image Map
---

## Playing Audio Files Without a Player

There are many solutions available for playing audio, on of my favourites was the Yahoo Media Player, from times past. HTML5 introduced the [audio tag](https://en.wikipedia.org/wiki/HTML5_Audio), which is widely suppored.  There are also several [jQuery](https://en.wikipedia.org/wiki/JQuery) media players for websites including [jplayer](http://jplayer.org/).  

I wanted to add a bit of fun to a website by allowing users to play audio by clicking on objects in an image.  I realise this is not new, but I have not found any resource that ties up creating an image map linked to multiple areas and audio, controlled using jquery.

## Mapping Areas in an Image - Being Responsive

The fist step was to create defined <Areas> in an image that could be clicked.  The co-ordinates of the areas also need  to be recalculated when viewed on different screen sizes, so that the clickable area whould also be recalculated.

![Victorian Carol Singers London]({{site.baseurl}}/http://victoriancarolsingershire.uk/images/Victorian%20Carol%20Singers%20Colourful%20Dresses%20and%20Top%20Hats.jpg)

The areas to be clicked are the objects being held.  There were four audio samples, each to be mapped to four objects.

I tried calculating the co-ordinates of the objects manually, but in the end decided to find an app.  There are several choices available, some are polished and have several functions such as [coffee cup](http://www.coffeecup.com/image-mapper/), but as I only wanted a basic map I found this simple, effective [Online Image Map Editor](http://www.maschek.hu/imagemap/imgmap) by Adam Maschek.  

I chose a simple rectangle shape for the area co-ordinates.  So the HTML code looked like this:

{% highlight html %}
<img src="http://victoriancarolsingershire.uk/images/Victorian Carol Singers Colourful Dresses and Top Hats.jpg" class="entry-feature-image" alt="London's Premier Victorian Carollers" usemap="#my_image" style="margin-top:0;">
<audio id="sound1">
    <source src="{{ site.url }}/audio/joy to the world.mp3" type="audio/mpeg" />
</audio>
<audio id="sound2">
    <source src="{{ site.url }}/audio/jingle bells.mp3" type="audio/mpeg" />
</audio>
<audio id="sound3">
    <source src="{{ site.url }}/audio/silent night short.mp3" type="audio/mpeg" />
</audio>
<audio id="sound4">
    <source src="{{ site.url }}/audio/deck the halls.mp3" type="audio/mpeg" />
</audio>
<map name="my_image" id ="my_image">
<area shape="rect" coords="408,556,660,996" id="area1" />
<area shape="rect" coords="880,552,1096,852" id="area2" />
<area shape="rect" coords="1120,428,1360,732" id="area3" />
<area shape="rect" coords="1712,544,2444,1160" id="area4" />
</map>
{% endhighlight %}

There is the image with the usemap="#my_image", the four HTML5 audio files along with the map of areas and their co-ordinates.  




https://github.com/stowball/jQuery-rwdImageMaps
http://stackoverflow.com/questions/31430502/jquery-toggle-play-pause-button-multiple-audios
http://stackoverflow.com/questions/9283656/stopping-html5-audio
http://stackoverflow.com/questions/10978103/determine-which-area-in-a-map-imagemap-was-clicked-using-javascript-or-jquery

For my most 
