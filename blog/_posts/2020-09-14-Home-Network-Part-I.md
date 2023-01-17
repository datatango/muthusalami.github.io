---
layout: post
title: Ubiquiti home network part&#58; I
excerpt: "Network plan for my Ubiquiti home network setup"
modified: 2020-12-04
tags: [network]
categories: network home
comments: true
pinned: true
share: true
image:
  feature:
---

This post will be part of a series documenting the network setup of my new apartment. The apartment is over 20 years old hence a major overhaul is required and the renovation is a great opportunity to lay CAT6A in the house for the 1Gbps/10Gbps network 🤓.

My research began with [this](https://www.patnotebook.com/bto-networking-singapore/){:target="_ blank"} article on [patnotebook.com](https://patnotebook.com){:target="_ blank"} detailing the conversion of telephone points to RJ45 data points in newer BTO (Build to Order) flats in Singapore. Newer flats in Singapore have CAT6 cables already nicely laid in the house, however many of the points are terminated with a telephone jack instead of RJ45. Based on the article, it seems that BTO flats only have one point terminated as RJ45, which is definitely not enough 😁.

Older resale flats like mine do not come with any data points hence I will have to lay my own cables and design my own network infrastructure from scratch. On top of patnotebook.com, I've relied on many youtube videos and blogs to learn basic networking concepts and the different components required to run a network.

I've devoured Evan McCann's tech [blog](https://evanmccann.net/){:target="_ blank"} since I plan to purchase Ubiquti hardware for the network. There are many nice articles that explain networking jargon in simple terms and breaks down the Ubiquiti universe in sizeable chunks. He is extremely detailed in doing breakdowns and making comparisons on the many Ubiquiti products as well. I would recommend his site as essential reading for whoever is considering putting together a Ubiquiti system!

## Recommended McCann reading list

* [Ubiquiti’s UniFi Ecosystem Explained](https://evanmccann.net/blog/unifi-ecosystem-overview){:target="_ blank"}
* [UniFi Switches Explained](https://evanmccann.net/blog/2020/6/unifi-switches-explained){:target="_ blank"}
* [UniFi Switch Comparison and Buyer's Guide](https://evanmccann.net/blog/2020/6/unifi-switches-buyers-guide){:target="_ blank"}
* [UniFi Wireless Access Point Buyer's Guide](https://evanmccann.net/blog/unifi-ap-breakdown){:target="_ blank"}
* [Wi-fi&#58; Isn't Magic Some Tips For Planning A Home Network](https://evanmccann.net/blog/home-network-tips){:target="_ blank"}
* [Ubiquiti FAQ](https://evanmccann.net/blog/2020/6/ubiquiti-faq){:target="_ blank"}

I plan to update my progress with subsequent posts, but for now I've made a simple diagram detailing the essential hardware required for the network setup.

## The electrical layout

![House electrical layout]({{ site.url }}/assets/originals/Network_I/ELECTRICAL PLAN v2.png)

## The hardware diagram and breakdown

![Network diagram]({{ site.url }}/assets/originals/Network_I/Network_diagram.jpg)

1. [Belden CAT6A 10GXE02](https://catalog.belden.com/techdata/EN/10GXE02_techdata.pdf){:target="_ blank"}
2. 6U wall-mount Server Rack
3. [24-Port Keystone Patch Panel](https://www.amazon.com/ETS-Shielded-Tool-Less-Rackmount-Wallmount/dp/B086T6KRCH/ref=sr_1_6?dchild=1&keywords=cat6a+patch+panel&qid=1607079469&sr=8-6){:target="_ blank"}
5. Ubiquiti EdgeRouter X (ER-X)
6. Unifi Switch 16 150W Gen 1
7. Unifi Cloud Key Gen2 Plus (UCK-G2-PLUS)
8. Unifi NanoHD (UAP-nanoHD)
