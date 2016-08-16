---
title: Google announces Chromium WebView
date: 2013-11-09 00:00:00 Z
permalink: "/blog/2013/11/09/1/google-announces-chromium-webview.html"
layout: post
subtitle: my response to a big change in Android KitKat
summary: In this post, I discuss Google's announcement, its impact on hybrid-app developers
  and possible future improvements. This is a cross-posting of an entry I made on
  my employer's blog [earlier](http://blinkmobile.com.au/news/blog/218-google-announces-chromium-webview).
author: Ron
---

## {{ page.title }}

## _{{ page.subtitle }}_

{{ page.summary }}

Google's latest Android confectionary has been announced: [4.4 KitKat](http://developer.android.com/about/versions/kitkat.html). One of the changes I've been most anxious for is the much needed update to the WebView. Officially, developers have been clamoring for this (at least) since [February 2012](https://code.google.com/p/chromium/issues/detail?id=113088), but the old WebView had been a problem since Android's debut in 2007.

![Android desserts / versions](http://blinkmobile.com.au/images/blog/avh.jpg)

### WebView? Hybrid apps?

Without getting into the nitty-gritty, `WebView` is a native component available when building native apps for Android. On iOS there is a similar `UIWebView` component. These components allow a native app (i.e. Java or Objective-C) to include web content, e.g. HTML, CSS and JavaScript.

Native apps that use WebView components are often referrred to as "hybrid apps". They mix and match native code and web code to (hopefully) offer the best of both worlds to end-users.

#### Native code

- great for performance-sensitive functionality e.g. maths, games, transcoding

- great for platform-specific functionality e.g. inter-app communication, app store presence, in-app purchases, sensors, cameras

- platform vendors (e.g. Apple, Google, Microsoft) work hard to regularly release new native functionality with each platform update

- developers have to learn each target platform individually, although some concepts are portable

- code written is platform-specific, so Android code will not run on iOS, etc

#### Web: HTML, CSS, JavaScript

- great for displaying content already available in this format, and there's loads of this already on the Web

- great for cross-platform development as every major device platform has a web engine, so most JavaScript code runs on any device without modification

- standards take years to develop, so a new native feature might take years before it is available with pure web technology

- while they mostly agree on behaviour, different browser engine vendors (e.g. Apple, Google, Microsoft, Mozilla) have different bugs and quirks

### pre-KitKat WebView

Previous versions of Android include a version of [WebKit](http://www.webkit.org/) (the web engine used by Safari and Mobile Safari) that has [not been updated since 2011](http://www.mobilexweb.com/blog/android-browser-eternal-dying). In addition to stagnating over the last two years, it has long been the subject of much lamentation. There are (at the time of writing) [370 reported issues](https://code.google.com/p/android/issues/list?can=2&q=webview) for "webview" and [244 reported issues](https://code.google.com/p/android/issues/list?can=2&q=webkit) for "webkit" (with some overlap).

Some of the problems include:

- missing or incomplete support for many newer standard web technologies e.g. Canvas, Web Forms 2.0, Web Workers, IndexedDB, Web Sockets, CSS Level 3

- missing or incomplete support for older standards e.g. XPath and XSLT in Android 2.x, SVG and GIF in older Androids

- several unexpected rendering and behavioural glitches e.g. `select` elements in Android 2.x, `position:fixed` elements, crashes

- poor performance e.g. CSS Animations, touch responsiveness, touch scrolling

- limited Java API for app developers e.g. unable to override lower-level behaviour as with UIWebView on iOS

- difficult and painful to debug

- many users are stuck with old copies much as they were with old versions of Internet Explorer

### Chromium WebView in KitKat

After five years of near-silence on the matter, Google finally provided an answer with Android 4.4: [Chromium WebView](http://developer.android.com/about/versions/kitkat.html#44-webview). This is based on Google's excellent [Chrome](http://google.com/chrome) browser, version 30 to be specific. This promises to drastically simplify debugging and improve web feature support and performance. It is possible that the majority of the issues reported against the previous implementation have been addressed.

Rendering performance, specifically, remains to be seen. [Chrome for Android](https://play.google.com/store/apps/details?id=com.android.chrome) does have known performance issues in certain situations, so it is doubtful we're looking at a perfect user experience. However, the web feature support and JavaScript performance is definitely a welcome change.

Google provided an [overview](https://developers.google.com/chrome/mobile/docs/webview/overview) of the new WebView, and I'll discuss some of the details I take issue with.

#### "Chrome for Android is separate from WebView"

Chrome for Android uses 63.63MB of storage on my Nexus 4, not including caches and user data. Chrome and WebView duplicate the web engine (Chromium) which includes the V8 JavaScript engine. I'd estimate around 18MB based on storage used by Opera.

There are other issues here, but for now I'll just point out that there is a minor waste of persistent storage space. Not a big deal when new devices have 16GB and 32GB of space, but this could be an issue for the low-end devices that KitKat is supposedly targeting.

#### "Chrome for Android supports a few features which aren't enabled in the WebView"

The listed features not provided by WebView (but available in pure Chromium if you compile it yourself) are WebGL, WebRTC, WebAudio, Fullscreen API and Form Validation. This list is not exhaustive, so there may be more.

The first four are web features that are much better expressed by their native counterparts. WebGL and WebAudio in particular may still perform too poorly in WebView to bother offering for now. It's disappointing that Google blocks these features, but you really ought to be using Java for this stuff, not JavaScript and HTML.

The omission that makes me scratch my head is Form Validation. JavaScript solutions to compensate for this are likely to perform far worse than the standard built-in implementation provided by Chromium. This functionality helps prevent developers from "reinventing the wheel" by providing solid baseline features. It's a little perplexing as to why Google forces us to implement this from scratch when the same `form` HTML can use this in Chrome for Android and other modern browsers.

#### "WebView will continue to be tied to releases of the Android platform for the time being"

And here's the major consequence of keeping Chrome for Android separate from WebView: updates. Android OEMs produce many devices at different price points (at the behest of carriers) and historically fail to keep all but the top-of-the-line devices up to date. That means the majority of Android devices sold wind up running stale versions of Android _forever_.

Android 2.3 "Gingerbread" was obsoleted in [October 2011](http://en.wikipedia.org/wiki/Android_version_history) by 4.0 "Ice Cream Sandwich" and still represents a [at least 28.5%](http://developer.android.com/about/dashboards/index.html) of the user base. Hybrid app developers will likely still have to support devices running the old WebView, perhaps for the next 3-5 years if this rate doesn't improve.

This is a very different scenario to the update frequency that Firefox and Chrome web developers are accustomed to: these browsers are automatically updated almost monthly.

One positive consequence of this model is that the open source version of Android accurately represents what is shipping on new devices. This is good for the open source community, and for app developers curious about how the platform functions.

It remains to be seen what Google means by "... for the time being".

##### Play Services: the alternative

It's still possible that Google may change the way they distribute Chromium WebView in future. If they were to exploit the Play Services bundle for this, they could update every device with the Play Store (the majority of Android devices outside of China) regardless of Android operating system version.

As a new API, it would not necessarily be beholden to the same behaviour as the old WebView, so it could also be an opportunity to provide new features (like the ability to override low-level behaviours, network access, etc).

Once available, Chrome for Android could be adjusted to use it instead of providing its own copy, allowing for nearly perfect consistency between web apps in the browser and web code in hybrid apps.

For apps tailored to use it, hybrid app developers could immediately benefit from updates without waiting the usual 3-5 years as with Android OS updates. Google would be able to innovate at the pace usually associated with web browsers without needing to wait for manufacturer support and carrier approval.

A negative consequence of this model is more thoroughly explored by [Ars Technica](http://arstechnica.com/gadgets/2013/10/googles-iron-grip-on-android-controlling-open-source-by-any-means-necessary/). APIs that are part of Google Play Services cannot be relied upon with devices running Amazon's fork of Android, or those devices running in China. These also diminish the value of open source Android within the community.

#### "it brings ... remote debugging of web content using the Chrome DevTools"

This is a massive improvement to the previous status quo. Deploying web code in a native app used to be akin to throwing it in a black box. Now it will be possible to debug HTML, CSS and JavaScript in a hybrid app as easily and completely as within the Chrome browser (personally regarded as the best web browser for developers).

Web code in a hybrid app is likely to have the same or similar logic regardless of the version of Android that the app is installed upon. Thus, developers may be able to use their KitKat devices (or the emulator) to diagnose logic issues present when the app runs on JellyBean and older. So this does improve our diagnosis capabilities for what may be a decent range of bugs.

This also marks debug parity between Android's WebView and iOS' UIWebView. Diagnosing bugs just got a heck of a lot easier.

### Conclusion

Google's [lofty goal](http://allthingsd.com/20131031/google-aims-for-the-next-billion-users-with-android-kitkat/) of replacing those Gingerbread devices with KitKats may yet manifest, that remains to be seen. I'm sure my fingers aren't the only ones crossed in that regard.

In the meantime, Google has provided us with a "glass half full" update: it doesn't solve all of our problems, but it breaks 2 years of stagnation and provides remedial relief to a large portion of frustrated Android app developers.


