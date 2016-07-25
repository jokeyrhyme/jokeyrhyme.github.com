---
layout: post
title: "Warning: jokeyrhy.me domain is not mine"
subtitle: "Domain lapsed and currently owned by an unaffiliated scraper"
date: 2016-07-13
summary: "Learning some lessons about domains and hosting"
author: Ron
---

## {{ page.title }}

## _{{ page.subtitle }}_

{{ page.summary }}


### Warning / TL;DR:

- I don't own the `jokeyrhy.me` domain, so update your bookmarks or RSS feed reader


### This blog on its custom CNAME

I originally started this blog with a custom CNAME on [GitHub Pages](https://pages.github.com/),
but there didn't seem to be a solution for HTTPS on top of this.
In retrospect, [CloudFlare](https://www.cloudflare.com/), or something like it,
probably would have worked well enough, but it didn't occur to me at the time.

What I was after:

- free static hosting

- custom CNAME: `jokeyrhy.me`

- HTTPS with a cheap / free certificate

Originally, the compromise I took was to drop the HTTPS requirement.
I registered a domain at [name.com](https://www.name.com/),
and used it as a [custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).

A little while later,
I transferred the domain over to [AWS Route53](https://aws.amazon.com/route53/).
This was primarily for convenience, as I had other AWS services at the time,
and I otherwise had no problems with name.com.


### About face, HTTPS is too important

With [Google](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html),
[Mozilla](https://blog.mozilla.org/security/2015/04/30/deprecating-non-secure-http/),
and [the EFF](https://www.eff.org/https-everywhere)
all strongly encouraging the use of HTTPS,
I eventually looked back at my 3 original requirements.
Of these three, I then decided to drop the custom CNAME requirement.
This is how I ended up with my blog hosted at
[https://jokeyrhyme.github.io/](https://jokeyrhyme.github.io/).

I did originally have a domain registered for the custom CNAME,
and I (foolishly?) decided to let it lapse,
given that I wasn't using it anymore. From what I can tell,
someone else registered it roughly 3 or 4 months after it lapsed.
They currently have it pointing at a stale copy of my blog.


### `whois jokeyrhy.me`

Some of the more useful information from a `whois jokeyrhy.me` is below:

```
Domain Name: JOKEYRHY.ME
Domain ID: D108500000017342012-AGRS
WHOIS Server:
Referral URL: www.namecheap.com
Updated Date: 2016-02-05T14:18:07Z
Creation Date: 2015-11-05T23:04:40Z
Registry Expiry Date: 2016-11-05T23:04:40Z
Sponsoring Registrar: NameCheap, Inc.
Sponsoring Registrar IANA ID: 1068
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Registrant ID: 1LNUBGQ0CMA1AX1C
Registrant Name: WhoisGuard Protected
Registrant Organization: WhoisGuard, Inc.
...
Registrant Email: 870fa39017074e43a8c7145c6a1e0277.protect@whoisguard.com
Admin ID: G2YHAUVDORRMKY3I
Admin Name: WhoisGuard Protected
Admin Organization: WhoisGuard, Inc.
...
Admin Email: 870fa39017074e43a8c7145c6a1e0277.protect@whoisguard.com
Tech ID: CD3A5N3UGLLZV0O2
Tech Name: WhoisGuard Protected
Tech Organization: WhoisGuard, Inc.
...
Tech Email: 870fa39017074e43a8c7145c6a1e0277.protect@whoisguard.com
Name Server: KATE.NS.CLOUDFLARE.COM
Name Server: SEAN.NS.CLOUDFLARE.COM
DNSSEC: unsigned
```


### Trying to be clever

When I first discovered this,
I thought I could be clever and add a JavaScript redirect or warning,
triggered if [`location.origin`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/origin)
was not a domain that I owned.
It was then that I realised they were hosting a static copy of my blog,
and adding any new script would not be an effective countermeasure.


### What now?

For now, I've just set an alarm for the domain expiry date,
so we'll see if I can get lucky and register it back.
Or maybe not. /shrug

