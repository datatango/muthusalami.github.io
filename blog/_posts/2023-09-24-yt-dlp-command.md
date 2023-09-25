---
layout: post
title: Getting .MP4 files with yt-dlp
excerpt: Getting .mp4 export with yt-dlp
modified:
tags: [blog, yt-dlp]
categories: blog
comments: true
pinned: true
share: true
image:
  feature:
---

[yt-dlp](https://github.com/yt-dlp/yt-dlp) is an excellent tool for pulling video files off YouTube, however its default file output is .webm.

The following command will try to pull a native .mp4 file off YouTube and will do necessary transcoding if that fails after downloading.

```bash
yt-dlp -S res,ext:mp4:m4a --recode mp4 https://www.youtube.com/watch?v=dQw4w9WgXcQ
```
