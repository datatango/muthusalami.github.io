---
layout: post
title: The anatomy of a digital file
excerpt: "This post briefly explores what goes under the hood of digital files"
modified: 2021-01-15
tags: [digipres digital file ]
categories: digipres basics
comments: true
pinned: true
share: true
image:
  feature:
---

I've always wondered what makes up a digital file and [Nicole Martin](https://twobitpreservation.com/){:target="_ blank"} has wonderfully written a detailed post about the zeros and ones that make up a digital file.

I'll briefly lay out the keys points from the post.

## What makes a 'digital' file?

A digital file comprises of bits (zeros and ones) or plain text that contain crucial information that allows the computer/software to interpret/manipulate/process/encode/decode it into human-understandable information. The digital file may represent various types of information such as text, images and audio.

Programs can read plain text data without the aid of file signatures or headers (described below). Common types of plain text data include .txt and .html files. This has wide application as it is high compatible with most computer systems and software.

Binary data (zeros and ones) can represent more complex information and is read by computer programs in a linear data 'stream' or sequence of bytes. The program is required to decode the information block by block as per instructed by the file's signature and header.

**Useful info**

Eight bits = 1 Byte

A set of 512 bytes is one 'sector' and 'sectors' may be grouped into 'blocks'.

## Parts of a file

* File signature

It consists of a short section of code that defines the files format.

* File Header

A sequence of data that instructs on how to interpret the information. Machines and software will follow the instructions in the header to process/interpete the data it contains.

* File Body

The main bulk of information that allows the machine/program to render the file into human-understandable information. It can be stored as plain text or binary data.

* End

The last section of code that signals the end of the package.

![Folder Structure]({{ site.url }}/assets/originals/Anatomy.jpg)
