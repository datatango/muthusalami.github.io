---
layout: post
title: Data Tango&#58; Exploring Restic
excerpt:
modified:
tags: [restic, data management]
categories: blog
comments: true
pinned: true
share: true
image:
  feature:
---

![restic]({{ site.url }}/assets/originals/file_utility/restic.gif)

What is restic?

[Restic](https://restic.net/){:target="\_ blank"} is a free and open source backup program available on Linux, BSD, MacOS, and Windows. It works with many different storage types (Local, Network, Cloud) and is designed to create and manage backups.

Key features:
<br>
Deduplication
<br>
Encryption
<br>
Incremental Backups
<br>
Snapshot Management
<br>
Cross-platform Compatibility
<br>

Create Restic repository as backup destination

```bash
restic -r D:/dpx-restic init
```

Initiate backup

```bash
restic -r D:/dpx-restic backup C:/Users/MATT-THINKPAD/Documents/dpx-source/
```

Check snapshots

```bash
restic -r D:\dpx-restic snapshots
```

List files in repository

```bash
restic -r D:\dpx-restic ls latest
```

Verifying backups

```bash
restic check D:\dpx-restic
```

Restoring files

```bash
restic -r D:\dpx-restic\ restore "latest:/C/Users/MATT-THINKPAD/Documents/dpx-source/" --target "C:\Users\MATT-THINKPAD\OneDrive - nyu.edu\Desktop\dpx-restore"
```

Restore files from a specific snapshot

Get a list of snapshots

```bash
restic -r 'D:\dpx-restic\' snapshots
```

Restore from snapshot

```bash
restic -r D:\dpx-restic restore 2297f849 --target "C:\Users\MATT-THINKPAD\OneDrive - nyu.edu\Desktop\dpx-restore"
```
