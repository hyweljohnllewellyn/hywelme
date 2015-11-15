---
layout: post
title:  " Installing Jekyll Locally on a Mac"
date:   2015-11-15 12:56:00
author: Hywel
meta: jekyll homebrew brew gem bundle bash profile ruby static site
categories: Jekyll Static Site
---
###Static Sites with Jekyll  

Static sites provide many benefits compared with other sites that require a database, for example Wordpress or Drupal.  Static sites are particularly suited to projects requiring relatively simple websites with only a few pages, or blog style sites where [markdown](https://help.github.com/articles/markdown-basics/) is key.  I considered [Hugo](https://gohugo.io/) , but decided to try [Jekyll](http://jekyllrb.com/) because of the effectively **free** hosting and native integration on [GitHub](http://jgithub.com/).  Also, there are more [Themes](http://jekyllthemes.org/) readily available.

###Some Problems Installing Jekyll Locally on a Mac

After cloning the So Simple Theme, by [Michael Rose](http://mademistakes.com), I tried to install Jekyll locally as described on [Jekyll](http://jekyllrb.com/)
{% highlight bash %}
gem install Jekyll
{% endhighlight %}
However, I received the following error
{% highlight bash %}
"You don't have write permissions for the /Library/Ruby/Gems/2.0.0 directory"
{% endhighlight %}
This error has been described on the Jekyll forums [gem-install-jekyll-failed-on-Mac-OS-X](https://github.com/jekyll/jekyll/issues/3984).

The steps taken to resolve these were as follows:

Install [HomeBrew](http://brew.sh/) using
{% highlight bash %}  
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}
Install a user specific version of Ruby using  
{% highlight bash %}
brew install ruby
{% endhighlight %}
Create a user specific bash profile as described at [How To Edit Your PATH Environment Variables On Mac OS X](http://hathaway.cc/post/69201163472/how-to-edit-your-path-environment-variables-on-mac) using
{% highlight bash %}
nano .bash_profile  
{% endhighlight %}
Inside the .bash_profile add the line so it can find the updated path to the ruby as described [How to add /usr/local/bin in $PATH on Mac](http://stackoverflow.com/questions/11025980/how-to-add-usr-local-bin-in-path-on-mac)
{% highlight bash %}
export PATH=$PATH:/usr/local/git/bin:/usr/local/bin
{% endhighlight %}
To ensure that all the Jekyll dependencies were installed I installed [Bundler](http://bundler.io/) using
{% highlight bash %}
gem install bundler
{% endhighlight %}
and then  within the directory having the Jekyll/ Github repository I ran
{% highlight bash %}
bundle install
{% endhighlight %}

Finally, as I was using Bundler to manager my dependencies, in order to run Jekyll locally, I needed to use
{% highlight bash %}
bundle exec jekyll serve
{% endhighlight %}
Now my site was successfully being served locally  at http://127.0.0.1:4000/ using the built in web server provided by Jekyll.

It is worth noting that there is a great resource at [GitHub Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages/), which may be a simpler way to install Jekyll.  I may try that next time...
