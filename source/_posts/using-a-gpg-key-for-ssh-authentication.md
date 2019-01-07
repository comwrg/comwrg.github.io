---
title: 使用gpg钥对ssh进行认证
date: 2019-01-07 10:36:44
tags:
  - gpg
  - ssh
  - authentication
categories:
  - ssh
---


使用gpg钥对ssh进行认证
<!-- more -->

## 1. 生成gpg认证私钥
```
❯ gpg --expert --edit-key your_id                                    ## 使用专家模式, 不然没有认证的选项
gpg (GnuPG) 2.2.12; Copyright (C) 2018 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Secret key is available.

sec  rsa2048/7DEFA5351BCE3C55
     created: 2019-01-07  expires: 2021-01-06  usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa2048/2FCE923F8ECB63F6
     created: 2019-01-07  expires: 2021-01-06  usage: E
[ultimate] (1). hhhhh <h@mail.com>

gpg> addkey
Please select what kind of key you want:
   (3) DSA (sign only)
   (4) RSA (sign only)
   (5) Elgamal (encrypt only)
   (6) RSA (encrypt only)
   (7) DSA (set your own capabilities)
   (8) RSA (set your own capabilities)
  (10) ECC (sign only)
  (11) ECC (set your own capabilities)
  (12) ECC (encrypt only)
  (13) Existing key
Your selection? 8                                                   ## 选8, RSA, 自定义权限

Possible actions for a RSA key: Sign Encrypt Authenticate
Current allowed actions: Sign Encrypt                               ## 这里显示默认有Sign和Encrypt两种权限

   (S) Toggle the sign capability
   (E) Toggle the encrypt capability
   (A) Toggle the authenticate capability
   (Q) Finished

Your selection? S                                                   ## 关闭Sign

Possible actions for a RSA key: Sign Encrypt Authenticate
Current allowed actions: Encrypt

   (S) Toggle the sign capability
   (E) Toggle the encrypt capability
   (A) Toggle the authenticate capability
   (Q) Finished

Your selection? E                                                   ## 关闭Encrypt

Possible actions for a RSA key: Sign Encrypt Authenticate
Current allowed actions:

   (S) Toggle the sign capability
   (E) Toggle the encrypt capability
   (A) Toggle the authenticate capability
   (Q) Finished

Your selection? A                                                   ## 开启Authenticate

Possible actions for a RSA key: Sign Encrypt Authenticate
Current allowed actions: Authenticate

   (S) Toggle the sign capability
   (E) Toggle the encrypt capability
   (A) Toggle the authenticate capability
   (Q) Finished

Your selection? Q                                                    ## 退出
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (2048) 4096
Requested keysize is 4096 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 1y                                             ## 有效期
Key expires at Tue Jan  7 11:33:54 2020 CST
Is this correct? (y/N) y
Really create? (y/N) y
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

sec  rsa2048/7DEFA5351BCE3C55
     created: 2019-01-07  expires: 2021-01-06  usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa2048/2FCE923F8ECB63F6
     created: 2019-01-07  expires: 2021-01-06  usage: E
ssb  rsa4096/19D32A8839DCAA1F
     created: 2019-01-07  expires: 2020-01-07  usage: A
[ultimate] (1). hhhhh <h@mail.com>

gpg> save                                                            ## 保存
```
## 2. 文件配置
```
export GPG_TTY=$(tty)
export SSH_AUTH_SOCK=$(gpgconf --list-dirs agent-ssh-socket)
echo UPDATESTARTUPTTY | gpg-connect-agent 1> /dev/null
```
加入你的bashrc

```
enable-ssh-support
```
加入`~/.gnupg/gpg-agent.conf`


```
❯ gpg -k --with-keygrip
/Users/root/.gnupg/pubring.kbx
-----------------------------
pub   rsa2048 2019-01-07 [SC] [expires: 2021-01-06]
      8A9FC025A44AA4824C1F4AE27DEFA5351BCE3C55
      Keygrip = BEFCCDFE36CC5442B888B8459265C68B60A4ABD2
uid           [ultimate] hhhhh <h@mail.com>
sub   rsa2048 2019-01-07 [E] [expires: 2021-01-06]
      Keygrip = 422922ACFD099E79863D93B93333528F225C90FC
sub   rsa4096 2019-01-07 [A] [expires: 2020-01-07]
      Keygrip = 999A87A51CFE82DAA494BEB42F585051307F9E33
```
选择你新加的带有[A]标志的那个, 即`999A87A51CFE82DAA494BEB42F585051307F9E33`
加入到`~/.gnupg/sshcontrol`

运行`ssh-add -l`, 查看是否有加入
接下来运行`gpg --export-ssh-key yourid`导出ssh key放到你的服务器上的`~/.ssh/authorized_keys`中
重启shell, 就可以连接了


## Reference
* https://ryanlue.com/posts/2017-06-29-gpg-for-ssh-auth
* https://unix.stackexchange.com/questions/371901/gpg-agent-refuses-ssh-keys-with-ssh-add-reporting-agent-refused-operation/371910#371910
