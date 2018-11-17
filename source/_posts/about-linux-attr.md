---
title: 关于Linux attr的事情
date: 2018-11-02 14:36:23
tags:
  - linux
  - attr
  - water-post

categories:
  - linux
  - attr
---


记一次由于attr导致各种问题的事情

## 出错状况
服务器的屏幕出现了奇异绿色线条闪烁(init 3模式）

<!-- more -->
## 诊断
初步估计是硬件的问题，硬盘 or cpu ? 各种检查，最后连cpu都换了，
接下来进而发现vim编辑文件各种报错，连root都没法删文件了？难道是硬盘坏道？
最最后才发现原来是是linux attr中的i属性导致了这一系列情况
看了history发现有位同学用了`chattr +i /*`这条命令，好气啊！！！
(至于为什么可以运行成功，因为那人是管理员)


## 认识
就按照我之前对linux的认识，认为ls -l中显示的就是文件所有的属性了。
原来还有attr，还是我学Linux的时候忘了，似乎是有一个命令叫chattr和chmod一起的，
不过就从来没有用过attr这个东西，

看了下attr发现确实用的好的话有助于我们保护系统的关键文件，
特别在Linux这种删文件特别容易的系统上






