---
title: 'Web Browsers: Benchmarks and Observations'
date: 2015-01-31 00:00:00 Z
layout: post
subtitle: browser performance and standards-compliance
summary: I recently re-ran a selection of benchmarks and tests on my phone, laptop
  and desktop, involving multiple browsers and operating systems. Here is what I found.
author: Ron
---

## {{ page.title }}

## _{{ page.subtitle }}_

{{ page.summary }}

You may find the raw table of results in [this Google Spreadsheet](https://docs.google.com/spreadsheets/d/1Ed5kV6x3lchzpSYdYOu49IhdUSQdE99fthKBV1RUsb8/edit#gid=939752406).


## Test Setup

### Platforms

- iOS 8.1.2
- OS X 10.10.2
- Windows 10 Technical Preview
- Linux 3.18 (archlinux)

### Web Browsers

- Safari (per above iOS and OS X versions)
- WebKit Nightly r178708
- Chrome 39-40
- Chrome Canary 42
- Firefox 35
- Firefox Developer Edition 37
- Internet Explorer 10 (with and without Spartan)


## General Observations

### Benchmark ownership

Apple and Mozilla both win their own tests. Google generally always wins
in the [Octane](octane-benchmark.googlecode.com/svn/latest/index.html) test,
but usually loses to Apple in [Robohornet](http://www.robohornet.org/),
where both tests are Google-sponsored.

### Internet Explorer with Spartan

You can enable experimental web features in `about:flags` in Internet
Explorer (on Windows 10 Technical Preview), to switch from Trident to
Spartan. Spartan is an evergreen browser engine (like ChromiumWebView in
Android 5.0), meaning it will be silently and automatically updated.

Spartan does not appear to improve DOM performance much yet.

## The Good

Spartan significantly improves JavaScript performance, enough to beat
Chrome in one test. Further Spartan leads the pack in terms of
ECMAScript 6 implementation, although Firefox is hot on its heels.

All browser have made some progress towards ECMAScript 6, which is good
news for web developers.

It's terrific to see such competition in terms of performance. No single
browser takes first place in every test.


## The Bad

Windows 10 Technical Preview seems to perform slower than Linux on the
same hardware. This may be due to instrumentation, profiling and other
activities that are perfectly acceptable in a technical preview.

Internet Explorer with Spartan could not complete all tests. Internet
Explorer in Trident mode did complete the tests but crashed immediately
_after_ the last one, oddly.

Safari on iOS was unable to complete the tests. However, whilst the page
became unresponsive, the location bar, etc were still interactive.


## The Ugly

Chrome 39-40 was unable to complete all tests successfully on any
platform, making it consistently unreliable. However, I expect the
Speedometer issue to be cleared up in either Chrome 41 or 42 (it's
fixed in Canary already).

Both Safari and Chrome on iOS are even less reliable than desktop
Chrome. Worse, Chrome on iOS hangs in a way that causes both the page
and the surrounding UI (a.k.a. "chrome") to become unresponsive.


## Social Posts

You can find this article and (hopefully) some network-specific discussions at:

- [Google+](https://plus.google.com/+RonWaldon/posts/5E8LS2SbSrB)

Please leave comments using the above social network(s).

