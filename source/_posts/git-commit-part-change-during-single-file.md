---
title: 在单个文件中, 如何只提交部分更改给git
date: 2019-04-08 11:49:29
tags:
  - git
categories:
  - git
---

很多时候写代码, 会心血来潮的就修改了很多的bug, 然后又添加了很多代码, 那么如何分开提交呢?
<!-- more -->

按照以前我刚开始学git那会, 一直都是手动改代码, 手动还原, 等commit以后再还原回去, 非常的麻烦

## 小技巧 `git add -p`
```
y - stage this hunk
n - do not stage this hunk
q - quit; do not stage this hunk or any of the remaining ones
a - stage this hunk and all later hunks in the file
d - do not stage this hunk or any of the later hunks in the file
g - select a hunk to go to
/ - search for a hunk matching the given regex
j - leave this hunk undecided, see next undecided hunk
J - leave this hunk undecided, see next hunk
e - manually edit the current hunk
? - print help
```
输入对应的字母就可以了




