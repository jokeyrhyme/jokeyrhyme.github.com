---
title: PTS Results on Provisioned IOPS on AWS EBS, Part 2
date: 2013-09-24 00:00:00 Z
permalink: "/blog/2013/09/24/1/pts_results_for_piops_on_aws_ebs_part2.html"
layout: post
subtitle: More results running PTS with PIOPS 1000 and 2000
summary: Continuing my evaluation of cloud hosted file-systems, I started looking
  at Provisioned IOPS as offered by AWS. This post is light on instructions and is
  basically just graphs of performance results.
author: Ron
results:
- caption: 'AIO-Stress v0.21: random write'
  footer: "&rarr; MB/s, more is better"
  max: 40.95
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
  - config: small-attached-ebs-piops1000
    score: 35.9
    error: 0.47
  - config: small-attached-ebs-piops2000
    score: 40.95
    error: 0.25
- caption: 'Flexible IO Tester v1.57: Intel IOMeter File Server Access Pattern'
  footer: "&larr; seconds, less is better"
  max: 7123.3
  rows:
  - config: small-attached-ebs
    score: 1234.69
    error: 286.56
  - config: small-attached-ebs-piops200
    score: 7123.3
    error: 10.69
  - config: small-attached-ebs-piops400
    score: 3567.55
    error: 5.0
  - config: small-attached-ebs-piops1000
    score: 1469.18
    error: 2.64
  - config: small-attached-ebs-piops2000
    score: 802.62
    error: 1.14
- caption: 'SQLite v3.7.3: 12,500 INSERTs'
  footer: "&larr; seconds, less is better"
  max: 377.2
  rows:
  - config: small-attached-ebs
    score: 156.35
    error: 3.04
  - config: small-attached-ebs-piops200
    score: 377.2
    error: 0.1
  - config: small-attached-ebs-piops400
    score: 188.27
    error: 0.03
  - config: small-attached-ebs-piops1000
    score: 75.76
    error: 0.52
  - config: small-attached-ebs-piops2000
    score: 89.05
    error: 2.02
- caption: 'FS-Mark v3.3: 1000 Files, 1MB Size'
  footer: "&rarr; files/s, more is better"
  max: 33.27
  rows:
  - config: small-attached-ebs
    score: 27.1
    error: 1.12
  - config: small-attached-ebs-piops200
    score: 12.6
    error: 0.0
  - config: small-attached-ebs-piops400
    score: 22.73
    error: 0.03
  - config: small-attached-ebs-piops1000
    score: 31.7
    error: 0.06
  - config: small-attached-ebs-piops2000
    score: 33.27
    error: 0.09
- caption: 'Dbench v4.0: 1 Client'
  footer: "&rarr; MB/s, more is better"
  max: 82.46
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
  - config: small-attached-ebs-piops1000
    score: 82.46
    error: 2.45
  - config: small-attached-ebs-piops2000
    score: 69.69
    error: 1.49
- caption: 'Dbench v4.0: 12 Clients'
  footer: "&rarr; MB/s, more is better"
  max: 128.37
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
  - config: small-attached-ebs-piops1000
    score: 119.3
    error: 0.03
  - config: small-attached-ebs-piops2000
    score: 126.7
    error: 0.58
- caption: 'Dbench v4.0: 48 Clients'
  footer: "&rarr; MB/s, more is better"
  max: 129.76
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
  - config: small-attached-ebs-piops1000
    score: 120.72
    error: 0.63
  - config: small-attached-ebs-piops2000
    score: 129.03
    error: 0.97
- caption: 'Dbench v4.0: 128 Clients'
  footer: "&rarr; MB/s, more is better"
  max: 123.01
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
  - config: small-attached-ebs-piops1000
    score: 108.84
    error: 0.25
  - config: small-attached-ebs-piops2000
    score: 123.01
    error: 0.66
- caption: 'IOzone v3.405: 8GB Read Performance'
  footer: "&rarr; MB/s, more is better"
  max: 34.89
  rows:
  - config: small-attached-ebs
    score: 34.89
    error: 0.02
  - config: small-attached-ebs-piops200
    score: 12.77
    error: 0.0
  - config: small-attached-ebs-piops400
    score: 25.57
    error: 0.0
  - config: small-attached-ebs-piops1000
    score: 34.86
    error: 0.2
  - config: small-attached-ebs-piops2000
    score: 34.73
    error: 0.01
- caption: 'IOzone v3.405: 8GB Write Performance'
  footer: "&rarr; MB/s, more is better"
  max: 34.26
  rows:
  - config: small-attached-ebs
    score: 33.73
    error: 0.29
  - config: small-attached-ebs-piops200
    score: 11.57
    error: 0.15
  - config: small-attached-ebs-piops400
    score: 22.85
    error: 0.1
  - config: small-attached-ebs-piops1000
    score: 33.66
    error: 0.0
  - config: small-attached-ebs-piops2000
    score: 34.26
    error: 0.17
- caption: 'Threaded I/O Tester v0.3.3: 64MB Random Read - 32 Threads'
  footer: "&rarr; MB/s, more is better"
  max: 122.08
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
  - config: small-attached-ebs-piops1000
    score: 11.54
    error: 0.04
  - config: small-attached-ebs-piops2000
    score: 23.64
    error: 0.15
- caption: 'Threaded I/O Tester v0.3.3: 64MB Random Write - 32 Threads'
  footer: "&rarr; MB/s, more is better"
  max: 13.03
  rows:
  - config: small-attached-ebs
    score: 13.03
    error: 0.41
  - config: small-attached-ebs-piops200
    score: 0.87
    error: 0.0
  - config: small-attached-ebs-piops400
    score: 1.75
    error: 0.0
  - config: small-attached-ebs-piops1000
    score: 4.4
    error: 0.0
  - config: small-attached-ebs-piops2000
    score: 8.88
    error: 0.02
- caption: 'Compile Bench v0.6: Test: Compile'
  footer: "&rarr; MB/s, more is better"
  max: 35.36
  rows:
  - config: small-attached-ebs
    score: 27.87
    error: 0.96
  - config: small-attached-ebs-piops200
    score: 9.1
    error: 0.03
  - config: small-attached-ebs-piops400
    score: 18.27
    error: 0.05
  - config: small-attached-ebs-piops1000
    score: 35.36
    error: 0.04
  - config: small-attached-ebs-piops2000
    score: 35.35
    error: 0.0
- caption: 'Compile Bench v0.6: Test: Initial Create'
  footer: "&rarr; MB/s, more is better"
  max: 28.75
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
  - config: small-attached-ebs-piops1000
    score: 28.68
    error: 0.04
  - config: small-attached-ebs-piops2000
    score: 28.75
    error: 0.15
- caption: 'Compile Bench v0.6: Test: Read Compiled Tree'
  footer: "&rarr; MB/s, more is better"
  max: 102.61
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
  - config: small-attached-ebs-piops1000
    score: 47.89
    error: 0.64
  - config: small-attached-ebs-piops2000
    score: 49.1
    error: 0.54
- caption: 'Unpacking The Linux Kernel: linux-2.6.32.tar.bz2'
  footer: "&larr; seconds, less is better"
  max: 56.25
  rows:
  - config: small-attached-ebs
    score: 48.8
    error: 1.11
  - config: small-attached-ebs-piops200
    score: 56.25
    error: 2.95
  - config: small-attached-ebs-piops400
    score: 54.11
    error: 1.02
  - config: small-attached-ebs-piops1000
    score: 51.0
    error: 0.82
  - config: small-attached-ebs-piops2000
    score: 46.48
    error: 0.35
- caption: 'PostMark v1.51: Disk Transaction Performance'
  footer: "&rarr; TPS, more is better"
  max: 634
  rows:
  - config: small-attached-ebs
    score: 614
    error: 5.36
  - config: small-attached-ebs-piops200
    score: 210
    error: 1.96
  - config: small-attached-ebs-piops400
    score: 403
    error: 2.6
  - config: small-attached-ebs-piops1000
    score: 606
    error: 1.45
  - config: small-attached-ebs-piops2000
    score: 634
    error: 2.33
- caption: 'Gzip Compression: 2GB File Compression'
  footer: "&larr; seconds, less is better"
  max: 279.83
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
  - config: small-attached-ebs-piops1000
    score: 60.36
    error: 1.16
  - config: small-attached-ebs-piops2000
    score: 56.85
    error: 1.1
- caption: 'PostgreSQL pgbench v8.4.11: TPC-B Transactions Per Second'
  footer: "&rarr; TPS, more is better"
  max: 335.26
  rows:
  - config: small-attached-ebs
    score: 250.39
    error: 3.3
  - config: small-attached-ebs-piops1000
    score: 301.47
    error: 4.62
  - config: small-attached-ebs-piops2000
    score: 335.26
    error: 17.91
- caption: 'Apache Benchmark v2.4.3: Static Web Page Serving'
  footer: "&rarr; Requests/s, more is better"
  max: 1233.82
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
  - config: small-attached-ebs-piops1000
    score: 1135.76
    error: 4.5
  - config: small-attached-ebs-piops2000
    score: 1233.82
    error: 9.55
---

## {{ page.title }}

## _{{ page.subtitle }}_

{{ page.summary }}

### test configurations

- **small-attached-ebs**: m1.small EC2 instance, standard EBS volume (ext4)
- **small-attached-ebs-piops200**: m1.small EC2 instance, EBS volume (ext4) provisioned for 200 IOPS
- **small-attached-ebs-piops400**: m1.small EC2 instance, EBS volume (ext4) provisioned for 400 IOPS
- **small-attached-ebs-piops1000**: m1.small EC2 instance, EBS volume (ext4) provisioned for 1000 IOPS
- **small-attached-ebs-piops2000**: m1.small EC2 instance, EBS volume (ext4) provisioned for 2000 IOPS

Note: there's a 10:1 minimum ratio between the size of an AWS EBS volume and the IOPS you provision for it. As such, the smallest EBS volume that can be provisioned for 200 IOPS is 20GB, and the smallest volume with support for 400 IOPS is 40GB.

### results

#### [OpenBenchmarking.org]

I ran these tests with the same test name, however PTS didn't join the results together when it submitted them.
There must be a trick to getting PTS to collect results from multiple machines.

Anyway, here are the separate result pages:

- [1308270-SO-JOKEYRHYM25](http://openbenchmarking.org/result/1308270-SO-JOKEYRHYM25)
- [1309225-SO-JOKEYRHYM57](http://openbenchmarking.org/result/1309225-SO-JOKEYRHYM57)
- [1309224-SO-JOKEYRHYM67](http://openbenchmarking.org/result/1309224-SO-JOKEYRHYM67)
- [1309230-SO-JOKEYRHYM39](http://openbenchmarking.org/result/1309230-SO-JOKEYRHYM39)
- [1309233-SO-JOKEYRHYM49](http://openbenchmarking.org/result/1309233-SO-JOKEYRHYM49)

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

{% assign result = page.results[7] %}
{% include ptsresulttable.html %}

##### IOZONE

{% assign result = page.results[8] %}
{% include ptsresulttable.html %}

{% assign result = page.results[9] %}
{% include ptsresulttable.html %}

##### THREADED I/O TESTER

This is one benchmark where PIOPS 2000 performance was actually double that of PIOPS 1000.
Now that we have 4 data points for PIOPS levels, it looks like this test scales linearly
with the PIOPS level.

{% assign result = page.results[10] %}
{% include ptsresulttable.html %}

{% assign result = page.results[11] %}
{% include ptsresulttable.html %}

With a bit of napkin math, we can see that PIOPS 2000 is roughly 5 time slower than no-PIOPS
for random reads, and PIOPS 1000 is roughly 3 times slower than no-PIOPS for random writes.
So, for this test, it would take PIOPS 10k to match no-PIOPS read performance, and PIOPS 3k
to match its write performance.

##### COMPILE BENCH

{% assign result = page.results[12] %}
{% include ptsresulttable.html %}

{% assign result = page.results[13] %}
{% include ptsresulttable.html %}

{% assign result = page.results[14] %}
{% include ptsresulttable.html %}

##### UNPACKING THE LINUX KERNEL

{% assign result = page.results[15] %}
{% include ptsresulttable.html %}

##### POSTMARK

{% assign result = page.results[16] %}
{% include ptsresulttable.html %}

##### GZIP COMPRESSION

{% assign result = page.results[17] %}
{% include ptsresulttable.html %}

##### POSTGRESQL PGBENCH

{% assign result = page.results[18] %}
{% include ptsresulttable.html %}

So apparently this benchmark ran as expected with PIOPS 1000 and 2000. At some
point, I'll need to go back and re-run with 200 and 400 to see what really happened here. :S

##### APACHE BENCHMARK

{% assign result = page.results[19] %}
{% include ptsresulttable.html %}

This is a pretty dull benchmark. It doesn't look like PIOPS 200 through to 2000
makes much of a difference in performance.

### observations

PIOPS 1000 and 2000 tend to out-perform PIOPS 400, which in turn out-performs PIOPS 200.

Cases where PIOPS 1000 clearly out-performed no-PIOPS:

- AIO-Stress
- SQLite
- FS-Mark
- Dbench with 1 client
- Compile Bench: Compile
- PostgreSQL pgbench

Cases where PIOPS 1000 performed about the same as no-PIOPS (&plusmn; 10%):

- Flexible IO Tester
- Dbench with 12, 48 and 128 clients
- IOzone
- Compile Bench: Initial Create and Read Compiled Tree
- Unpacking The Linux Kernel
- PostMark
- Gzip Compression
- Apache Benchmark

Cases where PIOPS 1000 and 2000 were out-classed by no-PIOPS:

- Threaded I/O Tester with 32 threads

### conclusions

For most cases, it seems that PIOPS 1000 is sufficient to smooth out the spikey
performance of no-PIOPS without sacrificing performance.

PIOPS 2000 was not anywhere near double the performance of PIOPS 1000, except for the
Threaded I/O Tester benchmark. This may be due to the "low" performance rating of
the network interface on the m1.small EC2 instance. If you're going to be using
m1.small instances, it does not seem worth going past PIOPS 1000.

If you actually care about EBS performance and can afford it, then you'll probably
be using an "EBS-optimized" size (e.g. m1.large) that offers additional network
bandwidth and EBS performance. The tests I've been running so far cover cases
where capacity and cost-effectiveness are more important than performance, but I
will be testing with different sizes in future articles.

### series

1. [Phoronix Test Suite on AWS](/blog/2013/08/27/1/phoronix_test_suite_on_aws.html)
2. [PTS Results on Provisioned IOPS on AWS EBS](/blog/2013/09/23/1/pts_results_for_piops_on_aws_ebs.html)
3. **{{ page.title }}**
4. [PTS on AWS with m1.medium EC2 and EBS with Provisioned IOPS](/blog/2013/09/28/1/pts_results_for_piops_on_medium_aws_ebs.html)


[Phoronix Test Suite]: http://www.phoronix-test-suite.com/
[OpenBenchmarking.org]: http://openbenchmarking.org/
[EC2 Instance Types]: http://aws.amazon.com/ec2/instance-types/
