---
title: 在Pull requests上添加commits
date: 2019-03-21 21:41:04
tags:
- github
- pull-request
categories:
- github
---

-
<!-- more -->

## 自己的`Pull requests`, 在`Pull requests`后, 如何再次添加`commits`上去

`Pull requests`是绑定你`Pull requests`的那个分支的, 所以说只要你`push` `commits`到你`Pull requests`上的那个分支就可以了

比如, 你在分支`patch-1`上修改了内容, 然后`Pull requests`到别人的仓库, 接下来, 你想继续修改, 直接`commits`到`patch-1`这个分支即可

## 如何添加`commits`到别人的`Pull requests`上

只要`Contributor`没有取选`Allow edits from maintainers`就可以修改, 一般情况没人会取选

### 第一种方式: 通过网页来修改
非常简单, 点进`commit`里去, 右上角有个像笔一样的图标直接点进去修改提交即可

### 第二种方式: 通过命令行来修改

这个问题我一直想解决, Google了很多, 都没有发现有详细解决的

首先明确一点, 如果说`Contributor`没有取选`Allow edits from maintainers`, 那么默认`maintainers` 就可以修改`Pull requests`绑定的那一个分支

这样的话, 直接提交到那个分支即可

这里写下自己的命令, 使用了`hub`, 比用`git`省很多事, 不用复制用户名, 分支名啥的
```
hub pr list        # 列出PR
hub pr checkout xx # 要切换到的PR
xxx                # 这里修改然后commit
hub push           # push
```

这样就可以了

 




