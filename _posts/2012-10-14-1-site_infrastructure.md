---
layout: post
title: site infrastructure
subtitle: AWS Route53, EC2 and EBS, oh my!
date: 2012-10-14
permalink: /blog/2012/10/14/1/site_infrastructure.html
summary: In this post, I cover the basic cloud infrastructure I'm using. I also evangelise Amazon Web Services a fair bit. In fairness, ever since Microsoft supported Linux nodes in Azure, I've been pretty tempted to try them out.
author: Ron
---

## {{ page.title }}

## _{{ page.subtitle }}_

As [previously mentioned](http://jokeyrhy.me/blog/2012/10/13/1/welcome!), I’ve decided to go with Amazon’s Web Service cloud offering to host this site. One of the reasons is [cost](http://aws.amazon.com/economics/):

- AWS is billed per-hour. If your “cloud” service isn’t billed with at least this granularity, then your service is dead to me. The whole point of The Cloud is being able to provision a server precisely when I need it, and being able to shut it down to save money when I don’t.

- AWS has a [Free Usage Tier](http://aws.amazon.com/free/), which drastically cuts the cost of running a small cluster like mine (i.e. because it runs with decent performance on their Micro instances). Even after my 12-months runs out, my AWS fees are still likely to be around the same as my home ADSL2+ subscription, which is perfectly affordable.

If you are just getting into this space, I highly recommend signing up for AWS and just messing about with everything they have to offer. Remember, you can (and probably should) terminate any experimental services you configure, so it doesn’t cost a fortune to come to terms with The Cloud. 

### [AWS Virtual Private Cloud](http://aws.amazon.com/vpc/)


I did originally start out wanting to use an AWS VPC, because it makes a great deal of sense to make public only what needs to be public (e.g. HTTP servers), with everything else (e.g. the database) hiding behind the curtain. VPCs also don’t cost any extra, so the expertise barrier is pretty much the main issue.

I’ll be implementing a 3-node database cluster, and each node in this cluster will need to communicate with the other 2. It would be terrific if this intra-cluster messaging could occur over private channels.

Unfortunately, I can’t use a VPC:
- It isn’t covered by the Free Usage Tier, so my initial costs are increased.
- Small instances are as small as it allows, which are roughly 3 times more expensive than Micro instances. I’d basically have to cut my 3-node cluster down to 1, which defeats the point of even using a VPC.
- I have spread out my cluster across 2 regions (California and Oregon) as part of my highly-available design, however VPCs cannot span multiple regions. So even if I was using VPCs, I’d still need to figure out a VPN solution to connect them together.

### [Name.com](http://name.com/)


So if you are building a web site, one of the first things you’ll need to do is actually go and get yourself a domain name. I ended up going with Name.com, as they got a decent review in one of the many podcasts I listen too (unfortunately I can’t remember which one).

Domain name registrars are almost completely [fungible](http://dictionary.reference.com/browse/fungible), however, I would discourage you from doing any business with [GoDaddy](http://godaddy.com/). I don’t think anyone should forget their support for the [Stop Online Piracy Act](http://www.theverge.com/tag/sopa) (a.k.a. SOPA) anytime soon.

One of the weird things with Name.com, is that it almost seemed like I could log in with my Google account (which would have let me avoid creating yet another password). Oddly, I only glimpsed the button once, and couldn’t get to to appear again. Oh well.

### [AWS Route53](http://aws.amazon.com/route53/)


Named after a [short stretch of road](http://en.wikipedia.org/wiki/U.S._Route_53), AWS Route53 is the domain name service offered by Amazon. Each request does cost money, although a small-timer like me won’t notice the fractions of a cent I’ll be billed.

After created a Hosted Zone in Route53 matching my new domain name, I copied the settings from it over to the domain name setting at Name.com. This sets up a relationship so that clients looking for my domain name know to ask Route53 about it.

Anyhow, I plan on talking about AWS EC2 (a.k.a ECC, a.k.a Elastic Compute Cluster) next, but there’s a fair amount of detail to cover, so I think I’ll leave it at that for now.
