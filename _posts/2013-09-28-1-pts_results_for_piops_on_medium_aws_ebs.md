---
title: PTS on AWS with m1.medium EC2 and EBS with Provisioned IOPS
date: 2013-09-28 00:00:00 Z
permalink: "/blog/2013/09/28/1/pts_results_for_piops_on_medium_aws_ebs.html"
layout: post
subtitle: More results running PTS with PIOPS 1000 and 2000
summary: I took a look at AWS m1.medium EC2 instances with Provisioned IOPS. This
  post is light on instructions and is basically just graphs of performance results.
author: Ron
results:
- caption: 'AIO-Stress v0.21: random write'
  footer: "&rarr; MB/s, more is better"
  max: 62.16
  rows:
  - config: medium-attached-ebs
    score: 55.19
    error: 1.1
  - config: medium-attached-ebs-piops1000
    score: 53.41
    error: 0.4
  - config: medium-attached-ebs-piops2000
    score: 62.16
    error: 0.67
  - config: small-attached-ebs
    score: 15.87
    error: 0.51
  - config: small-attached-ebs-piops1000
    score: 35.9
    error: 0.47
  - config: small-attached-ebs-piops2000
    score: 40.95
    error: 0.25
- caption: 'Flexible IO Tester v1.57: Intel IOMeter File Server Access Pattern'
  footer: "&larr; seconds, less is better"
  max: 3190.45
  rows:
  - config: medium-attached-ebs
    score: 3190.45
    error: 78.95
  - config: medium-attached-ebs-piops1000
    score: 1469.41
    error: 2.32
  - config: medium-attached-ebs-piops2000
    score: 802.17
    error: 0.47
  - config: small-attached-ebs
    score: 1234.69
    error: 286.56
  - config: small-attached-ebs-piops1000
    score: 1469.18
    error: 2.64
  - config: small-attached-ebs-piops2000
    score: 802.62
    error: 1.14
- caption: 'SQLite v3.7.3: 12,500 INSERTs'
  footer: "&larr; seconds, less is better"
  max: 140.8
  rows:
  - config: medium-attached-ebs
    score: 140.8
    error: 4.61
  - config: medium-attached-ebs-piops1000
    score: 131.95
    error: 1.29
  - config: medium-attached-ebs-piops2000
    score: 103.78
    error: 6.34
  - config: small-attached-ebs
    score: 156.35
    error: 3.04
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
  - config: medium-attached-ebs
    score: 21.63
    error: 0.22
  - config: medium-attached-ebs-piops1000
    score: 31.67
    error: 0.09
  - config: medium-attached-ebs-piops2000
    score: 33.23
    error: 0.09
  - config: small-attached-ebs
    score: 27.1
    error: 1.12
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
  - config: medium-attached-ebs
    score: 42.94
    error: 0.68
  - config: medium-attached-ebs-piops1000
    score: 50.4
    error: 1.58
  - config: medium-attached-ebs-piops2000
    score: 55.49
    error: 0.77
  - config: small-attached-ebs
    score: 43.72
    error: 0.46
  - config: small-attached-ebs-piops1000
    score: 82.46
    error: 2.45
  - config: small-attached-ebs-piops2000
    score: 69.69
    error: 1.49
- caption: 'Dbench v4.0: 12 Clients'
  footer: "&rarr; MB/s, more is better"
  max: 175.21
  rows:
  - config: medium-attached-ebs
    score: 146.55
    error: 0.95
  - config: medium-attached-ebs-piops1000
    score: 160.23
    error: 0.25
  - config: medium-attached-ebs-piops2000
    score: 175.21
    error: 0.39
  - config: small-attached-ebs
    score: 128.37
    error: 1.16
  - config: small-attached-ebs-piops1000
    score: 119.3
    error: 0.03
  - config: small-attached-ebs-piops2000
    score: 126.7
    error: 0.58
- caption: 'Dbench v4.0: 48 Clients'
  footer: "&rarr; MB/s, more is better"
  max: 215.73
  rows:
  - config: medium-attached-ebs
    score: 167.18
    error: 1.9
  - config: medium-attached-ebs-piops1000
    score: 189.05
    error: 0.39
  - config: medium-attached-ebs-piops2000
    score: 215.73
    error: 0.65
  - config: small-attached-ebs
    score: 129.76
    error: 1.18
  - config: small-attached-ebs-piops1000
    score: 120.72
    error: 0.63
  - config: small-attached-ebs-piops2000
    score: 129.03
    error: 0.97
- caption: 'Dbench v4.0: 128 Clients'
  footer: "&rarr; MB/s, more is better"
  max: 224.12
  rows:
  - config: medium-attached-ebs
    score: 161.12
    error: 7.73
  - config: medium-attached-ebs-piops1000
    score: 194.07
    error: 0.84
  - config: medium-attached-ebs-piops2000
    score: 224.12
    error: 3.05
  - config: small-attached-ebs
    score: 115.54
    error: 0.67
  - config: small-attached-ebs-piops1000
    score: 108.84
    error: 0.25
  - config: small-attached-ebs-piops2000
    score: 123.01
    error: 0.66
- caption: 'IOzone v3.405: 8GB Read Performance'
  footer: "&rarr; MB/s, more is better"
  max: 80.87
  rows:
  - config: medium-attached-ebs
    score: 80.87
    error: 1.61
  - config: medium-attached-ebs-piops1000
    score: 40.59
    error: 0.0
  - config: medium-attached-ebs-piops2000
    score: 40.85
    error: 0.0
  - config: small-attached-ebs
    score: 34.89
    error: 0.02
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
  - config: medium-attached-ebs
    score: 20.92
    error: 0.27
  - config: medium-attached-ebs-piops1000
    score: 33.55
    error: 0.02
  - config: medium-attached-ebs-piops2000
    score: 33.85
    error: 0.02
  - config: small-attached-ebs
    score: 33.73
    error: 0.29
  - config: small-attached-ebs-piops1000
    score: 33.66
    error: 0.0
  - config: small-attached-ebs-piops2000
    score: 34.26
    error: 0.17
- caption: 'Threaded I/O Tester v0.3.3: 64MB Random Read - 32 Threads'
  footer: "&rarr; MB/s, more is better"
  max: 585.0
  rows:
  - config: medium-attached-ebs
    score: 584.97
    error: 1.28
  - config: medium-attached-ebs-piops1000
    score: 487.95
    error: 0.89
  - config: medium-attached-ebs-piops2000
    score: 585.0
    error: 0.2
  - config: small-attached-ebs
    score: 122.08
    error: 3.14
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
  - config: medium-attached-ebs
    score: 6.39
    error: 0.27
  - config: medium-attached-ebs-piops1000
    score: 4.4
    error: 0.01
  - config: medium-attached-ebs-piops2000
    score: 8.87
    error: 0.01
  - config: small-attached-ebs
    score: 13.03
    error: 0.41
  - config: small-attached-ebs-piops1000
    score: 4.4
    error: 0.0
  - config: small-attached-ebs-piops2000
    score: 8.88
    error: 0.02
- caption: 'Compile Bench v0.6: Test: Compile'
  footer: "&rarr; MB/s, more is better"
  max: 50.76
  rows:
  - config: medium-attached-ebs
    score: 24.33
    error: 0.72
  - config: medium-attached-ebs-piops1000
    score: 48.63
    error: 0.77
  - config: medium-attached-ebs-piops2000
    score: 50.76
    error: 0.52
  - config: small-attached-ebs
    score: 27.87
    error: 0.96
  - config: small-attached-ebs-piops1000
    score: 35.36
    error: 0.04
  - config: small-attached-ebs-piops2000
    score: 35.35
    error: 0.0
- caption: 'Compile Bench v0.6: Test: Initial Create'
  footer: "&rarr; MB/s, more is better"
  max: 41.61
  rows:
  - config: medium-attached-ebs
    score: 25.31
    error: 0.58
  - config: medium-attached-ebs-piops1000
    score: 36.59
    error: 0.2
  - config: medium-attached-ebs-piops2000
    score: 41.61
    error: 0.49
  - config: small-attached-ebs
    score: 24.17
    error: 1.13
  - config: small-attached-ebs-piops1000
    score: 28.68
    error: 0.04
  - config: small-attached-ebs-piops2000
    score: 28.75
    error: 0.15
- caption: 'Compile Bench v0.6: Test: Read Compiled Tree'
  footer: "&rarr; MB/s, more is better"
  max: 231.08
  rows:
  - config: medium-attached-ebs
    score: 226.7
    error: 0.5
  - config: medium-attached-ebs-piops1000
    score: 199.67
    error: 0.35
  - config: medium-attached-ebs-piops2000
    score: 231.08
    error: 0.76
  - config: small-attached-ebs
    score: 46.82
    error: 5.14
  - config: small-attached-ebs-piops1000
    score: 47.89
    error: 0.64
  - config: small-attached-ebs-piops2000
    score: 49.1
    error: 0.54
- caption: 'Unpacking The Linux Kernel: linux-2.6.32.tar.bz2'
  footer: "&larr; seconds, less is better"
  max: 51.0
  rows:
  - config: medium-attached-ebs
    score: 25.0
    error: 0.79
  - config: medium-attached-ebs-piops1000
    score: 24.8
    error: 0.32
  - config: medium-attached-ebs-piops2000
    score: 24.4
    error: 0.3
  - config: small-attached-ebs
    score: 48.8
    error: 1.11
  - config: small-attached-ebs-piops1000
    score: 51.0
    error: 0.82
  - config: small-attached-ebs-piops2000
    score: 46.48
    error: 0.35
- caption: 'PostMark v1.51: Disk Transaction Performance'
  footer: "&rarr; TPS, more is better"
  max: 1521
  rows:
  - config: medium-attached-ebs
    score: 1503
    error: 10.82
  - config: medium-attached-ebs-piops1000
    score: 1320
    error: 2.33
  - config: medium-attached-ebs-piops2000
    score: 1521
    error: 3.0
  - config: small-attached-ebs
    score: 614
    error: 5.36
  - config: small-attached-ebs-piops1000
    score: 606
    error: 1.45
  - config: small-attached-ebs-piops2000
    score: 634
    error: 2.33
- caption: 'Gzip Compression: 2GB File Compression'
  footer: "&larr; seconds, less is better"
  max: 60.36
  rows:
  - config: medium-attached-ebs
    score: 28.11
    error: 0.32
  - config: medium-attached-ebs-piops1000
    score: 28.42
    error: 0.34
  - config: medium-attached-ebs-piops2000
    score: 28.2
    error: 0.23
  - config: small-attached-ebs
    score: 55.39
    error: 1.36
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
  - config: medium-attached-ebs
    score: 259.82
    error: 3.55
  - config: medium-attached-ebs-piops1000
    score: 290.75
    error: 1.35
  - config: medium-attached-ebs-piops2000
    score: 319.63
    error: 3.26
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
  max: 2317.53
  rows:
  - config: medium-attached-ebs
    score: 2317.53
    error: 33.94
  - config: medium-attached-ebs-piops1000
    score: 2065.23
    error: 12.76
  - config: medium-attached-ebs-piops2000
    score: 2285.03
    error: 6.83
  - config: small-attached-ebs
    score: 1233.63
    error: 2.23
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

### test configurations & results

- **medium-attached-ebs**: m1.medium EC2 instance, standard EBS volume (ext4)

  - [1309262-SO-JOKEYRHYM90](http://openbenchmarking.org/result/1309262-SO-JOKEYRHYM90)

- **medium-attached-ebs-piops1000**: m1.medium EC2 instance, EBS volume (ext4) provisioned for 1000 IOPS

  - [1309258-SO-JOKEYRHYM10](http://openbenchmarking.org/result/1309258-SO-JOKEYRHYM10)

- **medium-attached-ebs-piops2000**: m1.medium EC2 instance, EBS volume (ext4) provisioned for 2000 IOPS

  - [1309253-SO-JOKEYRHYM39](http://openbenchmarking.org/result/1309253-SO-JOKEYRHYM39)

- **small-attached-ebs**: m1.small EC2 instance, standard EBS volume (ext4)

  - [1308270-SO-JOKEYRHYM25](http://openbenchmarking.org/result/1308270-SO-JOKEYRHYM25)

- **small-attached-ebs-piops1000**: m1.small EC2 instance, EBS volume (ext4) provisioned for 1000 IOPS

  - [1309230-SO-JOKEYRHYM39](http://openbenchmarking.org/result/1309230-SO-JOKEYRHYM39)

- **small-attached-ebs-piops2000**: m1.small EC2 instance, EBS volume (ext4) provisioned for 2000 IOPS

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

This is one of the tests where m1.medium without PIOPS fared
dramatically worse than m1.small without PIOPS. I re-ran these tests
with the same results. If your application is similar to this benchmark,
you may want to consider sticking with m1.small.

##### SQLITE

{% assign result = page.results[2] %}
{% include ptsresulttable.html %}

I didn't expect these results, but PIOPS 1000 and 2000 appear to test
better on the m1.small than they do on the m1.medium.

##### FS-MARK

{% assign result = page.results[3] %}
{% include ptsresulttable.html %}

Here's another benchmark where m1.small no-PIOPS beats m1.medium
no-PIOPS. If your application deals with loads of small files, you'd be
better off sticking with m1.small. PIOPS 1000 and PIOPS 2000 perform
roughly the same, regardless of instance size.

##### DBENCH

The combination of the m1.medium's CPU and Provisioned IOPS allows the
128-client test to produce the best results here. Without either of
these, the 48-client and 12-client tests tend to be the sweet spot.

{% assign result = page.results[4] %}
{% include ptsresulttable.html %}

{% assign result = page.results[5] %}
{% include ptsresulttable.html %}

{% assign result = page.results[6] %}
{% include ptsresulttable.html %}

{% assign result = page.results[7] %}
{% include ptsresulttable.html %}

The m1.small results are fairly similar regardless of PIOPS. Meanwhile,
the m1.medium results show performance scalining linearly with the level
of PIOPS. This is a benchmark where PIOPS didn't really shine on the
m1.small, but clearly does on the m1.medium.

As usual, the results for 1-client are very different to the multi-user
tests. As such, it's only a mere curiousity that the m1.small beats
m1.medium (with matching PIOPS).

##### IOZONE

The behaviour of m1.medium without PIOPS is very suspicious here, but I
did run the PTS twice on different m1.medium EC2 instances with similar
results. Of course, I provisioned them one after the other, so there is
a chance I got the same aberant hardware twice in a row. :P

{% assign result = page.results[8] %}
{% include ptsresulttable.html %}

The CPU difference gives m1.medium the advantage in the read test.

{% assign result = page.results[9] %}
{% include ptsresulttable.html %}

All combinations perform the write test equally well here. The
exception is m1.medium without PIOPS, which loses by a large margin.

##### THREADED I/O TESTER

{% assign result = page.results[10] %}
{% include ptsresulttable.html %}

The m1.medium's CPU destroys the m1.small on the 32-thread read test.

{% assign result = page.results[11] %}
{% include ptsresulttable.html %}

Writing data is a different story. m1.small with no-PIOPS actually beats
m1.medium by a descent margin.

##### COMPILE BENCH

For these tests, PIOPS 2000 doesn't seem to have much advantage over
PIOPS 1000. Predictably, m1.medium with PIOPS rules the roost here.

{% assign result = page.results[12] %}
{% include ptsresulttable.html %}

{% assign result = page.results[13] %}
{% include ptsresulttable.html %}

For the compile and create tests, m1.small matches m1.medium. That is, until you turn on PIOPS.

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

##### APACHE BENCHMARK

{% assign result = page.results[19] %}
{% include ptsresulttable.html %}

### observations

Now that I have some results from both m1.small and m1.medium EC2
instances, it's clear exactly which tests are affected by CPU
performance (although CPUs are not the focus of this series of
articles).

These are the tests that were very CPU-bound, with little variation in
results when only PIOPS differed:

- Compile Bench: Read Compiled Tree
- Unpacking the Linux Kernel
- PostMark
- Gzip Compression
- Apache Benchmark

There were a few tests where performance scaled with PIOPS rather than
CPU horsepower:

- Flexible IO Tester
- FSMark
- IOZone
- PostgreSQL PGBench

PIOPS 2000 was over 10% better than PIOPS 1000 in the following cases:

- Flexible IO Tester
- SQLite
- Threaded IO Tester
- Compile Bench: Create & Read
- PostMark

It's difficult to making more observations on the value of PIOPS with the
following benchmarks producing anomolous results on m1.medium without
PIOPS (i.e. m1.small being faster):

- Flexible IO Tester
- FSMark
- DBench: 1-client
- IOZone: write
- Threaded IO Tester: write

### conclusions

It seems as though m1.medium EC2 instances have a regression (compared
to m1.smalls) for cases where many smaller writes to EBS (without PIOPS)
are being requested. Superficially, this seems illogical: m1.medium
instances enjoy a better network interface, more RAM and a faster CPU.

Perhaps basic EBS becomes a major write bottleneck with a faster CPU?

In many cases, PIOPS 1000 was faster than no-PIOPS, particularly the
cases with strange no-PIOPS results. If you are using m1.medium EC2
instances with applications that favour storage IO, then you really
ought to consider PIOPS 1000 at least.


### series

1. [Phoronix Test Suite on AWS](/blog/2013/08/27/1/phoronix_test_suite_on_aws.html)
2. [PTS Results on Provisioned IOPS on AWS EBS](/blog/2013/09/23/1/pts_results_for_piops_on_aws_ebs.html)
3. [PTS Results on Provisioned IOPS on AWS EBS, Part 2](/blog/2013/09/24/1/pts_results_for_piops_on_aws_ebs_part2.html)
4. **{{ page.title }}**


[Phoronix Test Suite]: http://www.phoronix-test-suite.com/
[OpenBenchmarking.org]: http://openbenchmarking.org/
[EC2 Instance Types]: http://aws.amazon.com/ec2/instance-types/
