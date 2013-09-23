---
layout: post
title: PTS Results on Provisioned IOPS on AWS EBS
subtitle: Initial results running the Phoronix Test Suite with Provision IOPS...
date: 2013-09-23
permalink: /blog/2013/09/23/1/pts_results_for_piops_on_aws_ebs.html
summary: Continuing my evaluation of cloud hosted file-systems, I started looking at Provisioned IOPS as offered by AWS. This post is light on instructions and is basically just graphs of performance results.
author: Ron
results:
- caption: "AIO-Stress v0.21: random write"
  footer: "&rarr; MB/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 15.87
    error: 0.51
  - config: small-attached-ebs-piops200
    score: 8.43
    error: 0.1
  - config: small-attached-ebs-piops400
    score: 15.75
    error: 0.06
- caption: "Flexible IO Tester v1.57: Intel IOMeter File Server Access Pattern"
  footer: "&larr; seconds, less is better"
  rows:
  - config: small-attached-ebs
    score: 1234.69
    error: 286.56
  - config: small-attached-ebs-piops200
    score: 7123.30
    error: 10.69
  - config: small-attached-ebs-piops400
    score: 3567.55
    error: 5.00
- caption: "SQLite v3.7.3: 12,500 INSERTs"
  footer: "&larr; seconds, less is better"
  rows:
  - config: small-attached-ebs
    score: 156.35
    error: 3.04
  - config: small-attached-ebs-piops200
    score: 377.20
    error: 0.10
  - config: small-attached-ebs-piops400
    score: 188.27
    error: 0.03
- caption: "FS-Mark v3.3: 1000 Files, 1MB Size"
  footer: "&rarr; files/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 27.10
    error: 1.12
  - config: small-attached-ebs-piops200
    score: 12.60
    error: 0.00
  - config: small-attached-ebs-piops400
    score: 22.73
    error: 0.03
- caption: "Dbench v4.0: 1 Client"
  footer: "&rarr; MB/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 43.72
    error: 0.46
  - config: small-attached-ebs-piops200
    score: 29.76
    error: 0.01
  - config: small-attached-ebs-piops400
    score: 61.42
    error: 0.11
- caption: "Dbench v4.0: 12 Clients"
  footer: "&rarr; MB/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 128.37
    error: 1.16
  - config: small-attached-ebs-piops200
    score: 60.67
    error: 0.07
  - config: small-attached-ebs-piops400
    score: 107.33
    error: 0.03
- caption: "Dbench v4.0: 48 Clients"
  footer: "&rarr; MB/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 129.76
    error: 1.18
  - config: small-attached-ebs-piops200
    score: 52.21
    error: 0.22
  - config: small-attached-ebs-piops400
    score: 109.36
    error: 1.53
- caption: "Dbench v4.0: 128 Clients"
  footer: "&rarr; MB/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 115.54
    error: 0.67
  - config: small-attached-ebs-piops200
    score: 21.06
    error: 0.37
  - config: small-attached-ebs-piops400
    score: 55.91
    error: 0.14
- caption: "IOzone v3.405: 8GB Read Performance"
  footer: "&rarr; MB/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 34.89
    error: 0.02
  - config: small-attached-ebs-piops200
    score: 12.77
    error: 0.00
  - config: small-attached-ebs-piops400
    score: 25.57
    error: 0.00
- caption: "IOzone v3.405: 8GB Write Performance"
  footer: "&rarr; MB/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 33.73
    error: 0.29
  - config: small-attached-ebs-piops200
    score: 11.57
    error: 0.15
  - config: small-attached-ebs-piops400
    score: 22.85
    error: 0.10
- caption: "Threaded I/O Tester v0.3.3: 64MB Random Read - 32 Threads"
  footer: "&rarr; MB/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 122.08
    error: 3.14
  - config: small-attached-ebs-piops200
    score: 2.23
    error: 0.01
  - config: small-attached-ebs-piops400
    score: 4.53
    error: 0.02
- caption: "Threaded I/O Tester v0.3.3: 64MB Random Write - 32 Threads"
  footer: "&rarr; MB/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 13.03
    error: 0.41
  - config: small-attached-ebs-piops200
    score: 0.87
    error: 0.00
  - config: small-attached-ebs-piops400
    score: 1.75
    error: 0.00
- caption: "Compile Bench v0.6: Test: Compile"
  footer: "&rarr; MB/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 27.87
    error: 0.96
  - config: small-attached-ebs-piops200
    score: 9.10
    error: 0.03
  - config: small-attached-ebs-piops400
    score: 18.27
    error: 0.05
- caption: "Compile Bench v0.6: Test: Initial Create"
  footer: "&rarr; MB/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 24.17
    error: 1.13
  - config: small-attached-ebs-piops200
    score: 8.41
    error: 0.37
  - config: small-attached-ebs-piops400
    score: 14.38
    error: 0.17
- caption: "Compile Bench v0.6: Test: Read Compiled Tree"
  footer: "&rarr; MB/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 46.82
    error: 5.14
  - config: small-attached-ebs-piops200
    score: 100.15
    error: 0.63
  - config: small-attached-ebs-piops400
    score: 102.61
    error: 1.25
- caption: "Unpacking The Linux Kernel: linux-2.6.32.tar.bz2"
  footer: "&larr; seconds, less is better"
  rows:
  - config: small-attached-ebs
    score: 48.80
    error: 1.11
  - config: small-attached-ebs-piops200
    score: 56.25
    error: 2.95
  - config: small-attached-ebs-piops400
    score: 54.11
    error: 1.02
- caption: "PostMark v1.51: Disk Transaction Performance"
  footer: "&rarr; TPS, more is better"
  rows:
  - config: small-attached-ebs
    score: 614
    error: 5.36
  - config: small-attached-ebs-piops200
    score: 210
    error: 1.96
  - config: small-attached-ebs-piops400
    score: 403
    error: 2.60
- caption: "Gzip Compression: 2GB File Compression"
  footer: "&larr; seconds, less is better"
  rows:
  - config: small-attached-ebs
    score: 55.39
    error: 1.36
  - config: small-attached-ebs-piops200
    score: 279.83
    error: 4.93
  - config: small-attached-ebs-piops400
    score: 138.04
    error: 2.55
- caption: "PostgreSQL pgbench v8.4.11: TPC-B Transactions Per Second"
  footer: "&rarr; TPS, more is better"
  rows:
  - config: small-attached-ebs
    score: 250.39
    error: 3.30
- caption: "Apache Benchmark v2.4.3: Static Web Page Serving"
  footer: "&rarr; Requests/s, more is better"
  rows:
  - config: small-attached-ebs
    score: 1233.63
    error: 2.23
  - config: small-attached-ebs-piops200
    score: 1112.21
    error: 5.52
  - config: small-attached-ebs-piops400
    score: 1118.26
    error: 3.25
---

## {{ page.title }}

## _{{ page.subtitle }}_

{{ page.summary }}

### test configurations

- **small-attached-ebs**: m1.small EC2 instance, standard EBS volume (ext4)
- **small-attached-ebs-piops200**: m1.small EC2 instance, EBS volume (ext4) provisioned for 200 IOPS
- **small-attached-ebs-piops400**: m1.small EC2 instance, EBS volume (ext4) provisioned for 400 IOPS

Note: there's a 10:1 minimum ratio between the size of an AWS EBS volume and the IOPS you provision for it. As such, the smallest EBS volume that can be provisioned for 200 IOPS is 20GB, and the smallest volume with support for 400 IOPS is 40GB.

### results

#### [OpenBenchmarking.org]

I ran these tests with the same test name, however PTS didn't join the results together when it submitted them.
There must be a trick to getting PTS to collect results from multiple machines.

Anyway, here are the separate result pages:

- [1308270-SO-JOKEYRHYM25](http://openbenchmarking.org/result/1308270-SO-JOKEYRHYM25)
- [1309225-SO-JOKEYRHYM57](http://openbenchmarking.org/result/1309225-SO-JOKEYRHYM57)
- [1309224-SO-JOKEYRHYM67](http://openbenchmarking.org/result/1309224-SO-JOKEYRHYM67)

#### comparison

Note: each test is actually run several times, with the below scores representing the average.
The "error" column is the maximum deviation from the average by one or more test runs.

##### AIO-STRESS

{% assign result = page.results[0] %}
{% include ptsresulttable.html %}

##### FLEXIBLE IO TESTER

{% assign result = page.results[1] %}
{% include ptsresulttable.html %}

##### SQLITE

{% assign result = page.results[2] %}
{% include ptsresulttable.html %}

##### FS-MARK

{% assign result = page.results[3] %}
{% include ptsresulttable.html %}

##### DBENCH

{% assign result = page.results[4] %}
{% include ptsresulttable.html %}

{% assign result = page.results[5] %}
{% include ptsresulttable.html %}

{% assign result = page.results[6] %}
{% include ptsresulttable.html %}

With 48 clients, we see one of those rare moments when performance variance with
Provisioned IOPS is higher than without. Strange.

{% assign result = page.results[7] %}
{% include ptsresulttable.html %}

##### IOZONE

{% assign result = page.results[8] %}
{% include ptsresulttable.html %}

{% assign result = page.results[9] %}
{% include ptsresulttable.html %}

##### THREADED I/O TESTER

This benchmark highlights a specific case where provisioning 200-400 IOPS performs
abysmally compared to no-PIOPS.

{% assign result = page.results[10] %}
{% include ptsresulttable.html %}

{% assign result = page.results[11] %}
{% include ptsresulttable.html %}

##### COMPILE BENCH

{% assign result = page.results[12] %}
{% include ptsresulttable.html %}

{% assign result = page.results[13] %}
{% include ptsresulttable.html %}

{% assign result = page.results[14] %}
{% include ptsresulttable.html %}

Here's one of the few cases where provisioning only 200 IOPS still managed to
perform significantly better than without.

##### UNPACKING THE LINUX KERNEL

{% assign result = page.results[15] %}
{% include ptsresulttable.html %}

##### POSTMARK

{% assign result = page.results[16] %}
{% include ptsresulttable.html %}

##### GZIP COMPRESSION

{% assign result = page.results[17] %}
{% include ptsresulttable.html %}

Here's another use case where Provisioned IOPS (at least at the 200 and 400 level)
actually has greater performance variance than without.

##### POSTGRESQL PGBENCH

{% assign result = page.results[18] %}
{% include ptsresulttable.html %}

Not sure why this benchmark didn't run for the Provisioned IOPS cases.  It may simply
have been disabled in the version of PTS I used.

##### APACHE BENCHMARK

{% assign result = page.results[19] %}
{% include ptsresulttable.html %}

Here's the last case where Provisioned IOPS (at least at the 200 and 400 level)
actually has greater performance variance than without.

### observations

For almost every benchmark, EBS with Provisioned IOPS had a lower variance between
test runs, often drastically lower. This is the stated value proposition for this feature:
you pay more, but you get a guaranteed level of performance. Without Provisioned IOPS,
EBS performance varies quite a bit with spikes and valleys. If your application depends
on consistent storage performance, then you really ought to turn Provisioned IOPS on.

That said, provisioning only 200 IOPS tended to worsen performance in almost every
benchmark. While it's the cheapest option, the compromise here may not be suitable for all
applications: trading spikey but decent performance for consistently poor performance.

Provisioning 400 IOPS tended to performance somewhere between no-PIOPS and 200 PIOPS.

### conclusions

I chose to examine the Provisioned IOPS feature for 200 IOPS and 400 IOPS. While the
results are interesting, I did not find the point where paying for PIOPS brings
consistently better performance than not.

According to Amazon's documentation on [EC2 Instance Types], m1.small instances only
have a "low" network performance rating. This is likely to affect my test results,
as EC2 instances must communicate with EBS volumes over their network interface.

I will have to follow-up these results with a wider range of Provisioned IOPS levels,
and perhaps a wider range of instances sizes.

### series

1. [Phoronix Test Suite on AWS]
2. **{{ page.title }}**


[Phoronix Test Suite]: http://www.phoronix-test-suite.com/
[OpenBenchmarking.org]: http://openbenchmarking.org/
[EC2 Instance Types]: http://aws.amazon.com/ec2/instance-types/

[Phoronix Test Suite on AWS]: /blog/2013/08/27/1/phoronix_test_suite_on_aws.html
