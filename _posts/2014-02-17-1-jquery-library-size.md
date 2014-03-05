---
layout: post
title: jQuery Library Size
subtitle: exploring jQuery's role in web page weight
date: 2014-02-17
nth: 1
permalink: /blog/2014/02/17/1/jquery-library-size.html
summary: In this post, I look at how jQuery has changed in size over recent versions. I also look at custom builds and how much each unused feature adds to your page weight.
author: Ron
---

<link rel="stylesheet" href="/css/jquery-library-sizes.css" />

## {{ page.title }}

## _{{ page.subtitle }}_

{{ page.summary }}

_Note: this article was updated 2014-03-06, check below the conclusion_

I've been reading [Secrets of the JavaScript Ninja](http://jsninja.com/), by
[John Resig](http://ejohn.org/). It's a terrific read, and I highly recommend
it. I have gained a deeper appreciation of the work that DOM libraries (like
[jQuery](http://jquery.com/) do for us, work I'd really rather not do myself.

So this post is a partly a reaction to the growing anti-jQuery sentiment
amongst JavaScript developers. I want to look at the custom build system and
come up with a way to keep jQuery relevant for my use cases without paying any
unnecessary penalties.

### recent jQuery versions

jQuery 2 drops support for browsers that are missing ECMAScript 5,
`querySelector` and `addEventListener` (e.g. Internet Explorer 8 and older).
In order to continue supporting such browsers, jQuery 1.10 continues to be
developed in parallel.

The following table shows the version numbers for the parallel releases:

| release date | compatible | modern |
| ---          | ---        | ---    |
| 2013-04-19   |            | 2.0.0  |
| 2013-05-25   | 1.10.0     | 2.0.1  |
| 2013-05-31   | 1.10.1     | 2.0.2  |
| 2013-07-03   | 1.10.2     | 2.0.3  |
| 2014-01-24   | 1.11.0     | 2.1.0  |

### page weight between releases

#### process

After checking out the jQuery source code, I ran the following shell commands
to automate building the above versions:

```sh
for tag in 1.10.0 1.10.1 1.10.2 1.11.0 2.0.0 2.0.1 2.0.2 2.0.3 2.1.0
do
  rm -fr src/sizzle test/qunit dist/*
  git checkout $tag
  npm install
  grunt
done
```

#### results

The following tables shows the sizes (in bytes) for the development build of jQuery
(including comments, etc):

<table id="table-dev">
  <caption>development build sizes</caption>
  <thead>
    <tr>
      <th></th><th colspan="2">compatible</th><th colspan="2">modern</th>
    </tr>
    <tr>
      <th>date</th><th>raw</th><th>gzipped</th><th>raw</th><th>gzipped</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>2013-04-19</td><td></td><td></td><td>240196</td><td>71176</td></tr>
    <tr><td>2013-05-25</td><td>273810</td><td>81377</td><td>242727</td><td>71991</td></tr>
    <tr><td>2013-05-31</td><td>274080</td><td>81488</td><td>242915</td><td>72089</td></tr>
    <tr><td>2013-07-03</td><td>273199</td><td>81125</td><td>242142</td><td>71793</td></tr>
    <tr><td>2014-01-24</td><td>282944</td><td>83999</td><td>244963</td><td>72530</td></tr>
  </tbody>
</table>

<figure>
  <figcaption>chart for development build</figcaption>
  <canvas id="chart-dev"></canvas>
</figure>

The following tables shows the sizes (in bytes) for the production build of jQuery
(optimised and minified):

<table id="table-prod">
  <caption>production build sizes</caption>
  <thead>
    <tr>
      <th></th><th colspan="2">compatible</th><th colspan="2">modern</th>
    </tr>
    <tr>
      <th>date</th><th>raw</th><th>gzipped</th><th>raw</th><th>gzipped</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>2013-04-19</td><td></td><td></td><td>83095</td><td>29026</td></tr>
    <tr><td>2013-05-25</td><td>93019</td><td>32809</td><td>83513</td><td>29263</td></tr>
    <tr><td>2013-05-31</td><td>93057</td><td>32829</td><td>83495</td><td>29275</td></tr>
    <tr><td>2013-07-03</td><td>93100</td><td>32790</td><td>83606</td><td>29267</td></tr>
    <tr><td>2014-01-24</td><td>96416</td><td>33392</td><td>83650</td><td>29281</td></tr>
  </tbody>
</table>

<figure>
  <figcaption>chart for production build</figcaption>
  <canvas id="chart-prod"></canvas>
</figure>

#### impact on page weight

The easiest version for humans to read is the raw development build, which is
constructed by joining all the individual source code files together. Thus, we
can see that the additional source code to support old versions of Internet
Explorer is between 31KB and 38KB.

This legible code is then optimised for production use, typically stripping
white space and comments, renaming variables and safely re-ordering code.
Further, almost all web browsers request the GZIP-compressed version of this
optimised code, reducing the size of the download significantly.

So, in practice, supporting old versions of Internet Explorer with jQuery only
adds between 3.5KB and 4KB to our page weight.

Note: this comparison does not examine the memory usage or possible performance
impact for the extra code, only the impact on network usage.

### custom builds

For several releases now, it has been possible to customise jQuery's build
process so that it only includes the pieces that you want. How this is achieved
is documented [here](https://github.com/jquery/jquery/blob/master/README.md).

#### modules I keep

- **event**: this jQuery feature allows us to bind event handlers just once on
`document.body`, which simplifies our code and saves memory

- **exports/global** and **exports/amd**: these don't take up much space and
just make including jQuery in both sorts of projects that much easier

- **sizzle**: I only need this in my 1.x compatibility build, because
this enables jQuery to function without `querySelector` (which is missing in
old browsers)

- **css**, **dimensions** and **offset**: these make working with DOM elements
and their styles a breeze, some of which still isn't as easy without jQuery

#### modules I exclude

- **deprecated**: I don't use deprecated features, so I don't need them

- **event/alias**: I prefer `.on('click', ...)` to `.click(...)` for
consistency

- **wrap**: the `.wrap()` methods can be quite handy, but I my use of templates
and data binding tends to limit their usefulness

- **sizzle**: I can remove this from the 2.x modern build, because I avoid
using jQuery's non-W3C CSS selectors (for performance reasons)

  - **css/hiddenVisibleSelectors** and **effects/animatedSelector**: removed
  from the 1.x build for parity with 2.x

- **deferred**: these aren't Promises/A+ compliant

  - [more complete explanation here](https://thewayofcode.wordpress.com/tag/jquery-deferred-broken)

  - [great overview of alternatives](http://www.html5rocks.com/en/tutorials/es6/promises)

- **ajax**: using this module is
[an exercise in frustration for me](http://bugs.jquery.com/ticket/11548)
even when I need to support ancient browsers

- **core/ready**: putting your `script` elements at the end of `body` is an
easy enough alternative, and is considered to be better practice anyway

- **effects**: I tend to use CSS Animations and/or JS libraries with fancier
features

#### process

```sh
git checkout 1.11.0
npm install
grunt
grunt custom:-deprecated,-event/alias,-wrap,-core/ready,-ajax,-effects,-deferred,-css/hiddenVisibleSelectors compare_size

git checkout 2.1.0
npm install
grunt
grunt custom:-deprecated,-event/alias,-wrap,-core/ready,-ajax,-effects,-deferred,-sizzle compare_size
```

For the `grunt custom:...` lines, I will group the exclusions in batches where
the reduction isn't likely to be very high, or where dependencies need to be
accounted for:

- **A**: deprecated, event/alias, and wrap
- **B**: ajax
- **C**: effects
- **D**: deferred, ajax, effects, core/ready
- **E**: sizzle for 2.x, css/hiddenVisibleSelectors and
effects/animatedSelector for 1.x
- **F**: all of the above

#### results

For each of the above batches, the following table compares the sizes of the
following:

- raw source code for the 1.x compatibility build
- raw source code for the 2.x modern build
- production minified and gzipped output for the 1.x build
- production minified and gzipped output for the 2.x build

The stock sizes (from the earlier comparisons) are repeated here for
convenience.

<table id="table-custom">
  <caption>custom build sizes</caption>
  <thead>
    <tr>
      <th></th><th colspan="2">raw source</th><th colspan="2">min + gzip</th>
    </tr>
    <tr>
      <th>batch</th><th>1.x</th><th>2.x</th><th>1.x</th><th>2.x</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>stock</td><td>282944</td><td>244963</td><td>33392</td><td>29281</td></tr>
    <tr><td>A</td><td>280469</td><td>242476</td><td>32968</td><td>28885</td></tr>
    <tr><td>B</td><td>247945</td><td>214621</td><td>29218</td><td>25615</td></tr>
    <tr><td>C</td><td>261416</td><td>225658</td><td>30498</td><td>26685</td></tr>
    <tr><td>D</td><td>218373</td><td>188786</td><td>25543</td><td>22351</td></tr>
    <tr><td>E</td><td>282458</td><td>191483</td><td>33333</td><td>23495</td></tr>
    <tr><td>mine</td><td>215508</td><td>132915</td><td>25106</td><td>16148</td></tr>
  </tbody>
</table>

<figure>
  <figcaption>chart for custom build</figcaption>
  <canvas id="chart-custom"></canvas>
</figure>

#### impact on page weight

I'm happy to restrict my queries to W3C CSS (and not rely on the extra
selectors added by [Sizzle](https://github.com/jquery/sizzle)), so I exclude
it from my 2.x build. As a result, we see my 2.x build drop 89KB of source code
and 10KB of page weight with batch E.

### thoughts

#### jQuery vs custom jQuery

My production-optimised 1.x build is ~25% smaller than the full version, and my
2.x build is ~45% smaller. Those are huge savings, and could mean the
difference between meeting a page weight budget and going over.

#### jQuery vs pure JavaScript

Even though [you might not need jQuery](http://youmightnotneedjquery.com/) in
modern web browsers, I feel that jQuery still has much to offer. There are
loads of bugs and browser quirks that jQuery handles for us.

jQuery offers easier event management compared to the standard DOM APIs. This
is very important for use cases that involve dynamic insertion of content and
binding events. For this, `addEventListener` is still inadequate.

The APIs exposed by jQuery are well-understood and frequently emulated by other
libraries like [Angular.JS](http://angularjs.org/) and
[Zepto](http://zeptojs.com/). Developers should absolutely learn how to use the
W3C DOM APIs, but jQuery's are something of a standard, too.

#### light-weight alternatives

- [Better DOM](https://github.com/chemerisuk/better-dom)

- [Zepto.JS](http://zeptojs.com/)

Note: these are younger projects, and may not offer the same comprehensive bug
fixes for browser quirks, or the same highly-tuned performance. I mention them
here because you might care most of all about page weight, and these do beat
jQuery on that score.

### conclusion

jQuery 2.x is smaller than 1.x, but not significantly so. You can widen the gap
with a custom 2.x build that eschews Sizzle. I am a little disappointed that I
wasn't able to reduce it further.

A custom jQuery build such as mine could be used to enhance the selector
functionality for `angular.element`. Angular.JS provides its own cross-browser
AJAX and Promise functionality, which is wasted duplication with the complete
jQuery.

For new projects, you are probably better off starting without jQuery if you
can help it. It is definitely a wasted download if you only perform basic DOM
manipulation (or none at all).

For more complex needs, you should evaluate your options. Do you want to spend
loads of time battling quirky browsers? Or would you rather use a library and
have your users wait a bit longer?

### update: 2014-03-06

Before removing Sizzle from jQuery the way I have here, you should read this
[discussion I had with a Sizzle developer](https://github.com/jquery/sizzle/issues/249).

As expected, `querySelectorAll` isn't wired up to be a perfect replacement for
Sizzle, so you need to be aware of the differences.

There's also a great quote here:

> Measuring page weight is not the same as measuring load and render times.
> 100kb may in fact have a negligible effect on the performance of your page.

<script src="/js/min/jquery-library-sizes.min.js"></script>
