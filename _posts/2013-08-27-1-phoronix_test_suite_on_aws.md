---
layout: post
title: Phoronix Test Suite on AWS
subtitle: A quick guide to testing performance in the cloud...
date: 2013-08-27
permalink: /blog/2013/08/27/1/phoronix_test_suite_on_aws.html
summary: I am evaluating distributed file systems for use at work, and I need to establish a baseline for performance. This is the first in a series of posts examining some of the simpler solutions for high-availability storage. This guide assumes you are familiar with managing EC2 and EBS resources in Amazon's Web Services.
author: Ron
---

## {{ page.title }}

## _{{ page.subtitle }}_

{{ page.summary }}

### 1. AWS resources

1. create an EC2 instance

2. create an additional EBS volume (I went with 20GB) and attach it to the EC2 instance as `/dev/xvdb`

3. SSH into the EC2 instance (this may require an Elastic IP depending on your configuration, VPCs, etc)

4. you may or may not want to update system packages, as in theory this may make your tests less repeatable, however I wanted the latest kernel so I ran:

    - `sudo yum upgrade`

    - answer `Y` at the prompt to install and upgrade packages

    - `sudo shutdown -r now`

    - you could alternatively restart the instance via the AWS web console

    - wait for the EC2 instance to become available again and SSH back in


### 2. EBS volume initialisation

EBS volumes don't start out life with any sort of file-system structure or even partitions. As such, the secondary volume (xvdb) will need a little work before we can benchmark it.

1. create a partition table and a partition

    - `sudo fdisk /dev/xvdb`

    - `o` to create a empty DOS partition table
    
    - `n` to add a new partition
    
    - hit `Enter` to use the default cylinder (the first cylinder)
    
    - hit `Enter` to use the default cylinder (the last cylinder)
    
    - `w` to write changes to disk and quit
    
    - now we have a partition that stretches across the entire EBS volume
    
    - note: technically we don't need to partition a drive to put a useful file-system on it, but this is an old habit I bring with me from out of the ancient past :)
    
2. create a file-system on the partition

    - `sudo mkfs.ext4 /dev/xvdb1`

3. create a mount-point and mount the partition


    - `sudo mkdir /opt/testebs`
    
    - `sudo mount /dev/xvdb1 /opt/testebs`

4. for convenience, allow the normal EC2 user (the one you've SSH'ed in as) to make changes within that mount point

    - `sudo chown -R ec2-user:ec2-user /opt/testebs`

### 3. [tmux]

tmux is an awfully useful tool when using a UNIX terminal. We'll be using it later to allow the benchmarks to continue running even after we've closed our SSH session.

1. install 

    - `sudo yum install tmux`

2. from this point on, I'll assume that whenever you've SSH'ed in, you've also jumped into tmux, so we'll start it for the very first time like so:

    - `tmux`

    - difficult, huh? :)

    - you can tell you are in tmux by the green bar across the bottom of your terminal
    
tmux lets you turn one terminal into many, among lots of other neat features.

Here are a few shortcuts I find useful:

- `Ctrl` + `b`, `c`: that's "hold `Ctrl`, press `b`, release `Ctrl`, press `c`", this will create a new virtual "window"

- `Ctrl` + `b`, `1`: to switch to window #1

- `Ctrl` + `b`, `0`: to switch to window #0 (the first one you started with)

- `Ctrl` + `d`: at a shell prompt to close the shell (works in tmux and outside of tmux, too)

- `Ctrl` + `b`, `d`: detach from tmux

That last one is really important. When you detach from tmux, the shells that were active within it will continue on living, even if you then close SSH. Very cool!

You can open tmux and tell it to re-attach to any detached sessions with:

- `tmux attach`

### 4. install [Phoronix Test Suite] a.k.a PTS

1. install the prerequisite packages (this may be different if you use a different EC2 AMI or Linux distribution)

    - `sudo yum install php-cli php-xml`
    
    - `sudo yum install gcc-c++ automake patch`

    - `sudo yum install {libaio,pcre,popt}-devel glibc-{devel,static}`

    - the shell will expand those braces so `glibc-{devel,static}` becomes `glibc-devel glibc-static`
    
2. download and unpack the Phoronix Test Suite installer (you should go and find the latest link first unless you always want to use 4.8.1)

    - `cd /opt/testebs`
    
    - `wget http://www.phoronix-test-suite.com/download.php?file=phoronix-test-suite-4.8.1`
    
    - `tar zxf download.php?file=phoronix-test-suite-4.8.1`

3. run the installer, installing to `/opt/testebs/pts`

    - `/opt/testebs/phoronix-test-suite/install-sh /opt/testebs/pts`

### 5. install/run the PTS suites of interest

1. set the test suite installation and working directory to our secondary EBS

    - `mkdir /opt/testebs/tests`

    - `export PTS_TEST_INSTALL_ROOT_PATH=/opt/testebs/tests/`

2. install the benchmarks (I was interested in the database and disk suites)

    - `/opt/testebs/pts/bin/phoronix-test-suite install database disk`
    
    - this will take a while, as it needs to download the suites and, in some cases, compile them
    
    - if you like, you can detach from tmux, close SSH, and come back later

3. start the benchmarks (I was interested in the database and disk suites)

    - `/opt/testebs/pts/bin/phoronix-test-suite benchmark database disk`
    
    - `Y` to save these test results

    - Enter a name to save these results under, this is your name for the whole collection of benchmark runs, I used: jokeyrhyme-201308

    - Enter a unique name to describe this test run / configuration, I used: small-attached-ebs
                
    - hit `Enter` to accept the default system description
    
    - this could take a long, long time, so detach from tmux, close SSH and come back later
    
    - SSH back in, and `tmux attach`
    
    - when the tests are complete, you'll be asked if you wish to upload them
    
    - `Y` to share your results with [OpenBenchmarking.org], if you like
    
    - `n` to no upload system logs,

Uploading the tests will allow you to easily refer to the tests in blog posts and generally collect together your results in an easy-to-discuss manner.

### 6. results!

My first configuration under test was "small-attached-ebs". The details for this baseline configuration (for comparison with other clustered solutions) are:

- small-sized AWS EC2 instance, see [EC2 Instance Types]

- standard EBS volumes, not Provisioned IOPS, see [EBS Volume Types]

Here are the [results from an incomplete practice run] where I had some missing prerequisites and couldn't perform the Apache HTTPD and FS-Mark tests. I didn't have this whole process sorted out during my first attempt. :)

The [results for my storage tests] will be be continuously updated as I try out more solutions for distributed file-systems. Stay tuned!

[tmux]: http://tmux.sourceforge.net/
[Phoronix Test Suite]: http://www.phoronix-test-suite.com/
[OpenBenchmarking.org]: http://openbenchmarking.org/
[results from an incomplete practice run]: http://openbenchmarking.org/result/1308269-SO-20130826E30
[results for my storage tests]: http://openbenchmarking.org/result/1308270-SO-JOKEYRHYM25
[EBS Volume Types]: http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html#EBSVolumeTypes
[EC2 Instance Types]: http://aws.amazon.com/ec2/instance-types/
