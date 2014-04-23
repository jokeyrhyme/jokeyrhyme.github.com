---
layout: post
title: "Imitating Google Hangouts with CSS Flexbox"
subtitle: "my attempt at solving a layout issue with CSS Flexbox"
date: 2014-04-23
nth: 1
permalink: /blog/2014/04/23/1/imitating-google-hangouts-with-css-flexbox.html
summary: "In this short post, I introduce my CodePen.io profile, and demonstrate how I used CodePen.io to experiment with CSS Flexbox."
author: Ron
---

## {{ page.title }}

## _{{ page.subtitle }}_

{{ page.summary }}

### What is CodePen.io?

[CodePen.io](http://codepen.io/) is a site that hosts your HTML, CSS and JavaScript snippets in a way that facilitates sharing them and demonstrating what they do. In the past, I've used [JSFiddle](http://jsfiddle.net/) to achieve the same end. CodePen is just a bit newer and prettier. :) JSFiddle does offer better version control, in my opinion.

These are just like [GitHub Gist](https://gist.github.com/), except that they are primarily for web code, and will execute that code right there in your web browser.

[My profile on CodePen.io](http://codepen.io/jokeyrhyme/) lists all the "Pens" I've produced so far.

Note: a friend of mine has a quick explanation of [embedding CodePens on a Jekyll site](http://www.growingwiththeweb.com/2014/02/embedding-codepens-on-a-jekyll-site.html), if you happen to be using GitHub Pages or some other Jekyll-powered static blog like our respective efforts.

By the way, if you haven't already done so, it's well worth checking out Daniel's [Growing With The Web](http://www.growingwiththeweb.com/) site. Besides exploring web specifications and technologies, he also has an excellent series of posts on algorithms and interview questions. Definitely worth a look.

### My Google Hangouts Pen

<p data-height="268" data-theme-id="0" data-slug-hash="zCDAj" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/jokeyrhyme/pen/zCDAj/'>CSS Flexbox: Google Hangouts</a> by Ron (<a href='http://codepen.io/jokeyrhyme'>@jokeyrhyme</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async="async" src="//codepen.io/assets/embed/ei.js"></script>

CSS Generated Content (using `::before` in this example to create pure-CSS triangles) doesn't work without the `content` property. This took me ages to remember!

I'm trying out the [BEM](http://bem.info/) CSS methodology here, and I quite like it. It's a little verbose but I can already appreciate how it allows for parallel development of components.

### CSS-Tricks.com

Chris Coyer has a more thorough attempt that he talks about in [this article](http://css-tricks.com/replicating-google-hangouts-chat/). I came across this months ago, but did not refer to it whilst I was tinkering on my own. I actually didn't recall him using Flexbox until writing this post. So my effort is completely redundant, but I stand by its educational value (to me, at least). :)

Chris uses `justify-content: flex-end;` to get the current user's messages to be arranged in reverse. I ended up using `flex-direction: row-reverse;`. I'll have to revisit this, as I'm sure there are valid use cases for either property.

Chris's HTML structure differs from mine primarily surrounding the users' avatar images. I just plonk the 'img' element down, but Chris wraps it in a 'div'. I think this is mostly a personal taste thing.

My CSS triangles definition is almost the reverse of Chris'. We both set a border with the shorthand `border` property, and define the exceptional border sides separately. However, my exceptional border sides have the visible colour, whilst Chris' are transparent. I feel my version is slightly easier to read, because it defines what is visible, rather than what is invisible. Probably just a personal taste thing too. /shrug

Chris' site, [CSS-Tricks](http://css-tricks.com/), is probably the best CSS-focused design and development feed in my RSS reader right now. I highly recommend it.

### Summary

So, in short, CodePen is cool and CSS Flexbox is cool. :)
