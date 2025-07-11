---
layout: post
title: Dark Mode Pt. II&#58; Flash of Unstyled Content (FOUC)
excerpt:
modified:
tags: [web development]
categories: blog
comments: true
pinned: true
share: true
image:
  feature:
---

![darkmode_fouc]({{ site.url }}/assets/originals/darkmode_ii/darkmode_ii.gif)

As it turns out, the implementation of the site’s dark mode was plagued by a Flash of Unstyled Content (FOUC). As illustrated, light mode would flash during navigation between pages while in dark mode. Yuck.

The issue lies in the fact that the dark mode class is applied to <body> only after the page fully loads. As a result, the browser renders the default light theme in the brief moment between page load and the execution of the dark mode script.

The fix:

* Apply dark mode to <html> instead of <body> by adding an inline script at the top of head.html
* Update dark mode styles to target html.darkmode.body
* Update dark mode JavaScript to use <code>document.documentElement.classList.add("darkmode");</code> instead of <code>document.body.classList.add("darkmode");</code>