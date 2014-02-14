---
layout: post
title: jQuery Library Size
subtitle: exploring jQuery's role in web page weight
date: 2014-02-13
summary: In this post, I look at how jQuery has changed in size over recent versions. I always look at custom builds and how much each optional feature adds to your page weight.
author: Ron
---

## {{ page.title }}

## _{{ page.subtitle }}_

{{ page.summary }}

### recent jQuery versions

jQuery 2 drops support for browsers that are missing `querySelector` and
`addEventListener` (e.g. Internet Explorer 8 and older). In order to continue
supporting such browsers, jQuery 1.10 continues to be developed in parallel.

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
<div id="chart-dev"></div>
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
<div id="chart-prod"></div>
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

So, in practice, supporting old versions of Internet Explorer only adds between
3.5KB and 4KB to our page weight.

<script src="//www.google.com/jsapi"></script>
<script src="/js/jquery-library-sizes.js"></script>


