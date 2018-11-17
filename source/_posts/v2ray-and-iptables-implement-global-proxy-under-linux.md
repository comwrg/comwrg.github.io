---
title: V2Ray + iptables 实现全局代理
date: 2018-11-17 19:41:14
tags:
  - V2Ray
  - iptables
  - linux
  - proxy

categories:
  - linux
  - global-proxy
---


设置全局代理的目的懒得烦那堵破墙
`ALL_PROXY`有一定的局限性, 所以还是需要全局代理舒服点

由于V2Ray迭代速度太快, 写上我现在使用的版本号 `V2Ray 4.5.0 (Po) 20181116`
## V2Ray
思路是使用
iptables 将流量转发到 V2Ray 的透明代理上
具体如何实现参考[V2Ray Dokodemo-door](https://www.v2ray.com/chapter_02/protocols/dokodemo.html)

<!-- more -->

## iptables
没有了解过`iptables`请`Google`了解下
重点知道`iptables`中`nat`的是干啥的, 还有`iptables`的常用命令即可
```
#!/bin/sh

# 删除设置
# iptables -t nat -F
# iptables -t nat -X GLOBAL
#

# 新建一个`GLOBAL`链
iptables -t nat -N GLOBAL

# 添加链`GLOBAL`到链`OUTPUT`上
iptables -t nat -A OUTPUT -p tcp -j GLOBAL
iptables -t nat -A OUTPUT -p udp -j GLOBAL

# 忽略对你服务器地址的转发
iptables -t nat -A GLOBAL -d 这里写你服务器的地址 -j RETURN

# 忽略本地地址, 按自己的需求改写
iptables -t nat -A GLOBAL -d 127.0.0.1/8 -j RETURN
iptables -t nat -A GLOBAL -d 192.168.1.0/24 -j RETURN # 忽略本地局域网地址, 按自己局域网改
iptables -t nat -A GLOBAL -d 114.114.114.114 -j RETURN # 忽略DNS服务器地址

# 添加转发tcp, udp 到端口 1080, 这里端口写你在V2Ray中设置的端口
iptables -t nat -A GLOBAL -p tcp -j REDIRECT --to-ports 1080
iptables -t nat -A GLOBAL -p udp -j REDIRECT --to-ports 1080

# 最后显示设置
iptables -t nat -nvL

```







