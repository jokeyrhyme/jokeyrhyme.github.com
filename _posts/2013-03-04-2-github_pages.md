---
layout: post
title: GitHub Pages
subtitle: getting to know Doctor Jekyll
date: 2013-03-04
permalink: /blog/2013/03/04/2/github_pages.html
summary: A brief justification for selecting GitHub Pages as my blog hosting system, and a quick rundown of how I've used it.
author: Ron
---

## {{ page.title }}

## _{{ page.subtitle }}_

I'll briefly discuss my choice of blog hosting technology / provider,
then describe how I've set it up.

### goals

#### must-haves

- complete control over served HTML
- easy to add new content
- free
- able to configure my current domain to point to it
- not PHP

#### nice-to-haves

- [Markdown ](http://daringfireball.net/projects/markdown/) support, for
articles that don't require precise HTML control
- templating to avoid unnecessary duplication and ease maintenance
- popular
- article version control

### solution

Wordpress is the obvious choice, however I've ruled it out because it is
PHP. I thought about something like Tumblr, but I'm not sure how much
control over the presented HTML I would retain.

I've been seeing links to [GitHub Pages](http://pages.github.com/) ever
since I started using GitHub. It seemed to align well with my goals, so
this is my current solution.

### GitHub Pages

I'm going with [User
Pages](https://help.github.com/articles/user-organization-and-project-pages)
as this is a general blog and not really specific to any one of my other
projects. I could have gone with the [Automatic Page
Generator](https://help.github.com/articles/creating-pages-with-the-automatic-generator)
but this might have fought my desire to control the HTML more closely.

GitHub Pages are powered by [Jekyll](https://github.com/mojombo/jekyll).
Files beginning with [YAML Front
Matter](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter) are
interpretted by Jekyll, with other files simply being copied across with
no alteration.

I used the blog by Jekyll's
[author](https://github.com/mojombo/mojombo.github.com) as an example of
usage, as I didn't really understand exactly how to knit it all together
otherwise.

Once I had some content slapped together, it was time for me to deploy
with my [custom
domain](https://help.github.com/articles/setting-up-a-custom-domain-with-pages),
which required changing some of my settings in AWS Route53.

### site makeover

I decided to go with ZURB's [Foundation](http://foundation.zurb.com/)
for my UI framework, as I like the semantic CSS class names used in its
responsive grid, and it's far less recognisable than Twitter's
[Bootstrap](http://twitter.github.com/bootstrap/).

All upstream CSS and JavaScript assets are currently delivered via the
[CDN.JS](http://cdnjs.com/) project or from Google's
[CDN](https://developers.google.com/speed/libraries/devguide).

All of this only took a few hours to put together, including the
research and figuring out how to use Jekyll.
