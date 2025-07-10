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

As it turns out, the implementation of the site's dark mode was plagued with FOUC. As illustrated, 'light mode' would flash during navigation between pages while in 'dark mode'. Yuck.

The issue lies where the 'darkmode' class is applied to <body> after the page fully loads. Hence the browser renders the default light theme during the time between page load and the dark theme's script execution. 

The fix:

*Apply dark mode to <html> instead of <body> by adding an inline script at the top of head.html
*Update dark mode styles to target html.darkmode.body
*Update dark mode JavaScript document.documentElement.classList.add("darkmode"); instead of document.body.classList.add("darkmode");