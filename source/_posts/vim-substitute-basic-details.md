---
title: Vim 替换基本命令讲解
date: 2018-11-07 11:15:06
tags:
  - vim
  - substitute
categories:
  - vim
  - substitute
---

使用Vim很长时间了, 我对于替换命令的印象还是最基本的这样`:%s/pattern/string/g`
所以写下本文是为了好好梳理一下, 本文只总结最常用的方法对于不常用或比较复杂的不进行介绍
本文基于Vim Docs, 想看官方文档的请在Vim中运行`:h :s`

<!-- more -->

## 基本格式 
替换命令的基本格式是`:[range]s[ubstitute]/{pattern}/{string}/[flags] [count]`
我们可以分成
* `[range]`
* `s[ubstitute]`
* `{pattern}`
* `{string}`
* `[flags]`
* `[count]`
来进行讲解


### `[range]`
range太强大, 很多地方都可以用的到, 所以我单独写了一篇: [Vim range详解](/2018/11/06/vim-range-details/)

### `s[ubstitute]`
这里的`s[ubstitute]`代表动作为替换, 由于`substitute`太长, 一般简写`s`即可

### `{pattern}`
用来匹配的正则表达式

### `{string}`
用来替换的内容
支持正则表达式的子匹配

* `\0` 匹配到的字符串
* `\1` 第一个子匹配
* `\2` 第二个子匹配...以此类推
* `\r` 换行
* `\b` backspace
* `\t` table
* `\\` \


### `[flags]`
Options
* `c` confirm, 每个匹配都可以选择替换还是不替换
  * `y` yes, 替换
  * `l` last, 替换并退出
  * `n` next, 跳过
  * `a` all, 替换此次和后面所有
  * `q` quit, 退出
* `g` 对行内所有匹配, **如果没有这个标志, 默认只替换行内匹配的第一个**
* `i` ignore 忽略大小写
* `I` 不忽略大小写
* `n` **不进行替换**, 只显示匹配成功的次数
* `p` print, 显示最后一次匹配的行
* `#` 类似`p`, 同时显示行号
* `l` list, 类似`p`, 但显示方式类似于`:list`

<!-- 省去 & e r -->

### `[count]`
替换的行数
默认为一行
如果`[range]`省略, 连光标那一行往下一共`[count]`行的范围
否则是`[range]`最后一行往下一共`[count]`行的范围




<!-- omit
snomagic, magic

&, ~

2-letter and 3-letter :substitute commands

TODO: NEW POST TO INTRODUCE

Thu, 08 Nov 2018 14:35:48 +0800
-->




