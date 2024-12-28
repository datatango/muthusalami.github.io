---
layout: post
title: Managing Python aliases on Windows
excerpt:
modified:
tags: [windows, python]
categories: blog
comments: true
pinned: true
share: true
image:
  feature:
---

```
Python was not found but can be installed from the Microsoft Store: ...
```

I kept getting the above error when calling Python in the command-line after upgrading Python, despite adding it to System Environment Variables. As it turns out, [Windows secretly maintains aliases](https://stackoverflow.com/questions/58754860/cmd-opens-windows-store-when-i-type-python){:target="\_ blank"} - python.exe & python3.exe - in '%USERPROFILE%\AppData\Local\Microsoft\WindowsApps' that encourages Python installations through its Microsoft Store. While this may streamline the installation process for new users, this causes rage to those that want more bespoke configurations.

Thankfully, one can easily disable these aliases once they are made aware of them.

### Step 1: Locate the aliases

Search 'Manage App Execution Aliases' in the Windows search bar.

### Step 2: Toggle off 'python.exe' & 'python3.exe'

![cuny_4]({{ site.url }}/assets/originals/alias/alias.png)

A further step is to put '%USERPROFILE%\AppData\Local\Microsoft\WindowsApps' lower in the pecking order in Environment Variables.
