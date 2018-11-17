---
title: MacOS 默认群组之间的区别
date: 2018-11-13 19:49:46
tags:
  - macos
  - groups
categories:
  - macos
  - groups
---


本文讲解MacOS默认群组`wheel` `admin` `staff` `everyone`

<!-- more -->

`wheel` 是系统管理员组, 默认有用户`root`, 此组中的用户拥有系统最高权限, 100%的控制系统, `wheel`源于`BSD UNIX`, 而 `wheel`又有掌舵意思, 意味这掌控着系统方向
`admin` 是用户管理员组, 在此组中的成员可以通过`sudo`命令暂时升级为`root`去执行命令, 和`wheel`同样身为管理员, 但是在平时, 如果不使用`sudo`的话就和普通用户没什么区别, 安全性更好
`staff` 本机的用户都会在此组中, 注意, 并不包括用户`guest`
`everyone` 直译过来就是任何人, 包括任何用户, 比如`guest`或者是远程连接过来的用户


## reference
* https://superuser.com/questions/191955/what-is-the-wheel-user-in-os-x
* https://discussions.apple.com/thread/1673308

