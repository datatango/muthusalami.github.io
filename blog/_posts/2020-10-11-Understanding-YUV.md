---
layout: post
title: Understanding the YUV (YCbCr) colour encoding system
excerpt: A brief summary and explanation of the YUV format
modified: 2020-10-19
tags: [video, YUV, colour]
categories: video
comments: true
pinned: true
share: true
image:
  feature:
---

![YUV chart]({{ site.url }}/assets/originals/YUV/YUV.png)

## What is YUV?

In a YUV data structure scheme, the 'Y' represents the luma value, and the 'U' & 'V' represents two chroma values. In contrast to RGB, the values represent the intensities of red, green and blue channels in the pixel.

Each unique 'Y', 'U' and 'V' value comprises of 8-bits (or one byte) of data.

**Y value** = Luminance value
Overall brightness of the pixel. It is a grayscale value.

**U (CB) value**  = Chrominance value
Specifically the Blue  

**V (CR) value**  = Chrominance value
Specifically the Red

The **U & V values**  are coordinates instead of brightness values with positive and negative values.

## Why not stick to RGB?

Colour and brightness information and combined within the three channels in RGB. i.e. Increasing the **R** channel will increase both the colour and brightness value in tandem. In simpler terms, both properties are combined in the same value.

In a YUV system, the brightness information is completely separated from the colour information. In other words, more control is afforded.

## Practical application

**Backward compatibility** - Black and White TVs can't take RGB signals since the brightness value is baked into the colour values which it doesn't understand. Whereas YUV has the Y value which can be processed by the television set, by ignoring the colour components.

**Chroma sub-sampling** - YUV allows the user to remove information specifically from the colour values without affecting the overall luminance of it. This is particularly useful during image compression and an effective means in processing images.
