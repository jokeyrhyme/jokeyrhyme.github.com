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

## recent jQuery versions

jQuery 2 drops support for browsers that are missing `querySelector`. In order
to continue supporting older browsers, jQuery 1.10 has been developed in
parallel. If you don't wish to perform feature detection, then you should use
jQuery 1.10.

The following table shows the version numbers for the parallel releases:

| compatible | modern |
| ---        | ---    |
|            | 2.0.0  |
| 1.10.0     | 2.0.1  |
| 1.10.1     | 2.0.2  |
| 1.10.2     | 2.0.3  |
| 1.11.0     | 2.1.0  |

## page weight between releases

### process

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

### results

The following tables shows the sizes (in bytes) for the development build of jQuery
(including comments, etc):

<table id="table-compat-dev">
<caption>compatible development build sizes</caption>
<thead>
<tr><th>version</th><th>raw</th><th>gzipped</th></tr>
</thead>
<tbody>
<tr><td>1.10.0</td><td>273810</td><td>81377</td></tr>
<tr><td>1.10.1</td><td>274080</td><td>81488</td></tr>
<tr><td>1.10.2</td><td>273199</td><td>81125</td></tr>
<tr><td>1.11.0</td><td>282944</td><td>83999</td></tr>
</tbody>
</table>

<figure>
<figcaption>chart for compatible development build</figcaption>
<div id="chart-compat-dev"></div>
</figure>

<table id="table-modern-dev">
<caption>modern development build sizes</caption>
<thead>
<tr><th>version</th><th>raw</th><th>gzipped</th></tr>
</thead>
<tbody>
<tr><td>2.0.0</td><td>240196</td><td>71176</td></tr>
<tr><td>2.0.1</td><td>242727</td><td>71991</td></tr>
<tr><td>2.0.2</td><td>242915</td><td>72089</td></tr>
<tr><td>2.0.3</td><td>242142</td><td>71793</td></tr>
<tr><td>2.1.0</td><td>244963</td><td>72530</td></tr>
</tbody>
</table>

<figure>
<figcaption>chart for compatible development build</figcaption>
<div id="chart-modern-dev"></div>
</figure>

The following tables shows the sizes (in bytes) for the production build of jQuery
(optimised and minified):

<table id="table-compat-prod">
<caption>compatible production build sizes</caption>
<thead>
<tr><th>version</th><th>raw</th><th>gzipped</th></tr>
</thead>
<tbody>
<tr><td>1.10.0</td><td>93019</td><td>32809</td></tr>
<tr><td>1.10.1</td><td>93057</td><td>32829</td></tr>
<tr><td>1.10.2</td><td>93100</td><td>32790</td></tr>
<tr><td>1.11.0</td><td>96416</td><td>33392</td></tr>
</tbody>
</table>

<figure>
<figcaption>chart for compatible development build</figcaption>
<div id="chart-compat-prod"></div>
</figure>

<table id="table-modern-prod">
<caption>modern production build sizes</caption>
<thead>
<tr><th>version</th><th>raw</th><th>gzipped</th></tr>
</thead>
<tbody>
<tr><td>2.0.0</td><td>83095</td><td>29026</td></tr>
<tr><td>2.0.1</td><td>83513</td><td>29263</td></tr>
<tr><td>2.0.2</td><td>83495</td><td>29275</td></tr>
<tr><td>2.0.3</td><td>83606</td><td>29267</td></tr>
<tr><td>2.1.0</td><td>83650</td><td>29281</td></tr>
</tbody>
</table>

<figure>
<figcaption>chart for compatible development build</figcaption>
<div id="chart-modern-prod"></div>
</figure>

<script src="//www.google.com/jsapi"></script>
<script src="/js/jquery-library-sizes.js"></script>


