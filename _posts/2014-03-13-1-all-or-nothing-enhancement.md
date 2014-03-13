---
layout: post
title: "All-Or-Nothing Enhancement"
subtitle: Progressive-Enhancement for the lazy
date: 2014-03-13
nth: 1
permalink: /blog/2014/03/13/1/all-or-nothing-enhancement.html
summary: "Progressive Enhancement can spiral out of control with all the different levels of browser-compatibility that may need to be addressed. I attempt to reduce this to just two levels, whilst introducing my latest JavaScript library: noscript.js"
author: Ron
---

## {{ page.title }}

## _{{ page.subtitle }}_

{{ page.summary }}

As the title of this post hopefully suggests, I propose that we just focus on providing two different experiences for web content: one with all the bells and whistles, and one with no JavaScript or advanced web features whatsoever. A [quick Google search](http://lmgtfy.com/?q=all+or+nothing+enhancement) seems to indicate that I'm the lucky chap to have coined what is hopefully the latest buzzword in web development. Hooray.

### [Progressive Enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement)

From Wikipedia:

> Progressive enhancement is a strategy for web design that emphasises accessibility, semantic HTML markup, and external stylesheet and scripting technologies. Progressive enhancement uses web technologies in a layered fashion that allows everyone to access the basic content and functionality of a web page, using any browser or Internet connection, while also providing an enhanced version of the page to those with more advanced browser software or greater bandwidth.

I think semantic HTML and accessibility are very noble goals. My only beef with
Progressive Enhancement (henceforth: PE) is:

- the spectrum of features supported and not supported by browser is astounding

- I'm far too lazy to cover the full spectrum

#### CSS

Thankfully, the PE approach to CSS is actually fairly straightforward. After all, old browsers simply ignore modern CSS, so you don't need to worry too much about new techniques causing issues. The recommended approach seems to be:

- start with basic colour schemes and typography (stick to CSS 2.1 and earlier)

- sprinkle in the latest in CSS magic to taste

Layout is a little bit more complex, but the mobile-first [Responsive Web Design](http://en.wikipedia.org/wiki/Responsive_web_design) school of thought boils it down for us:

- focus on your content and its space requirements

- do NOT fall into the trap of assuming popular device dimensions, these WILL change

- layout your content for the minimum feasible dimensions for your content

- using CSS Media Queries, define how this layout changes as screen space increases

#### JavaScript

When granular PE meets JavaScript, things can get a little silly.

Clean, efficient, [isomorphic code](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/) is best achieved with ECMAScript 5 (and 6, soon), but using this by itself will cause your dynamic behaviour to die a quick and inglorious death in browsers older than Internet Explorer 9. But you don't want to be serving unnecessary code to users with good browsers. So your options are:

- maintain multiple versions of your code, and build the simplest compatibility test you can so you can deliver smallest compatible version

- write your code for ECMAScript 5 and 6, and [compile it down](https://github.com/google/traceur-compiler) for older browsers: you have one version of your code, but you still have to detect and load the smallest version appropriate

- avoid ECMAScript 5 and 6, and rely on cross-browser libraries like jQuery and Lo-Dash to achieve similar levels of convenience: you have one version of your code, but now you need to load the smallest compatible build of those libraries

And this only covers language syntax-level incompatibility. You need a similar approach for DOM APIs and the new HTML5 elements:

- you'll need an `if` statement at a minimum to initiate XMLHttpRequests via Microsoft's ActiveX if you need to support Internet Explorer 6 and older

- you'll need a server-side proxy if you plan on making use of [Cross-Origin Resource Sharing](https://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/) in browsers that don't support it, and an `if` statement just for Internet Explorer 8

- you'll probably end up using a cross-browser abstraction like [localForage](https://github.com/mozilla/localForage) if you wind up relying on client-side storage in the browser (Safari still doesn't implement IndexedDB)

- if you dynamically inject the new HTML5 elements, then you'll need the [html5shiv](http://www.paulirish.com/2011/the-history-of-the-html5-shiv/) just to get styles working in pre-HTML5 browsers like Internet Explorer 8

- if you rely on the new form input types in HTML5, then you may need to detect when they are missing and poly-fill them or provide alternative widgets

- ... and the list goes on

The final frustrating aspect of granular PE for JavaScript, is that popular upstream libraries no longer test against nor aim to be compatible with old browsers like Internet Explorer 8:

- [Angular.JS](http://blog.angularjs.org/2013/12/angularjs-13-new-release-approaches.html)

- [ZURB's Foundation](http://foundation.zurb.com/docs/compatibility.html)

- [Twitter's Bootstrap](http://getbootstrap.com/getting-started/#support)

Popular and well-maintained upstream libraries aren't the only tool in our arsenal for dealing with cross-browser concerns, but (used sparingly) they can certainly alleviate some of the burden. Without them, I feel granular PE is just infeasible for dynamic behaviour.

So, what's a lazy web developer to do?

### All-Or-Nothing Enhancement

The approach I am proposing with starts out with essentially the same mission statement as PE, and the same spectrum: static browsers and screen readers, through to modern browsers with all the bells and whistles. The only difference, is that my All-Or-Nothing Enhancement approach drops almost everything in-between.

- start with the static and accessible content, with extremely basic CSS, relying on source order for layout

- use CSS Media Queries to extend your smallest-feasible layout to larger screens

- do all your layout using [CSS Flexbox](http://philipwalton.github.io/solved-by-flexbox/)

- stick to the current stable specifications and implementations of ECMAScript and CSS (the only exception being vendor-prefixed support for Flexbox as needed, especially for silly Safari)

Isn't that deliciously simple? I can feel all the stress leaving my body and following all those crazy granular in-between support levels out the door. Wonderful.

But, modern JavaScript will still behaviour unpredictably in old browsers, potentially mangling your content and leaving it in an interim state. Right?

### [noscript.js](https://github.com/jokeyrhyme/noscript.js)

I put together this little JavaScript utility with two methods:

- `noscript.show()` will display any `noscript` HTML elements as though JavaScript were disabled in the browser

- `noscript.lockdown()` will prevent any other JavaScript from functioning, completing the illusion that JavaScript was disabled in the browser

This means that, assuming `lockdown()` works as advertised, you can be guaranteed that JavaScript is either on or off, or "all-or-nothing" if you will. I recommend combining it with the feature detection from [Modernizr](http://modernizr.com/), so that you can easily draw your line in the sand.

```
if (!Modernizr.strictmode || !Modernizr.es5object || !Modernizr.flexwrap) {
  noscript.show();
  noscript.lockdown();
}
```

I also recommend putting a message either in the header or footer of the page. Perhaps something like:

```
<noscript><p>This site is designed for modern web browsers with JavaScript enabled.</p></noscript>
```

I've tested nooscript.js all the way back to Internet Explorer 6, and it successfully defeats jQuery and a growing number of other libraries. If you find a JavaScript library that isn't blocked, then [please let me know](https://github.com/jokeyrhyme/noscript.js/issues). I'm mainly concerned with code that manipulates the DOM, but Storage and Network access also should be blocked, ideally.

As web authors, we control the other scripts on our pages, so this isn't necessarily going to become a cat-and-mouse arms-race between JavaScript libraries and noscript.js.

Once you've decided where to draw the line, and how to express that as JavaScript feature detection, you should concatenate `noscript.min.js` with your feature detection code (e.g. Modernizr) and the `if`-guarded call to `noscript.show(); noscript.lockdown();`. That way you have a single network transfer to cover this functionality.

### Why isn't this a good idea?

There are a few issues with All-Or-Nothing Enhancement:

- this isn't going to fly in a corporate environment with legacy browsers

- even after `noscript.lockdown()`, the browser will still download and attempt to execute the rest of the JavaScript on the page

### So why bother?

The main attractions are:

- your code takes the simplest and most modern form necessary, easing your maintenance burden

- you get to use the newest, coolest web design and development techniques, without worrying too much about their backwards-compatibility or legacy browser support

- even though network usage is not optimised, the scrolling and rendering performance of your static content should be maximised after `noscript.lockdown()`

- because you're only using the latest features with no regard for backwards-compatibility, the compute performance of your page should be maximised for modern browser environments

- depending on where you draw the line, the majority of your user base is still likely to experience the fully enhanced version of your content

### conclusion

I'd love to know what others think on this subject. Am I crazy for wanting to simplify my life? Have I missed any major downsides? Have others already started doing this (perhaps under a cooler name)? Please tell me about your success stories (or pitfalls) with All-Or-Nothing Enhancement.
