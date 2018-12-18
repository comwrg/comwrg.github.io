---
title: 算法题-最长共同子串
date: 2018-12-18 14:01:16
tags:
  - algorithm
categories:
  - algorithm
---

## 题目描述
利用指针实现如下函数： 
int Lsubstring(char s1[256], char s2[256], char s3[256], char *buffer) 
函数功能为：将s1,s2,s3中的最长共同子串(子串之间用空格分隔)存在buffer指向的地址中，函数返回为最长子串的长度。在主函数中输出最长共同子串及其长度。若存在多个最长共同子串，则全部输出后（空格分隔），再输出长度。若无最长共同子串，则输出"NULL"。 

<!-- more -->
### 输入
输入三行，分别是s1,s2,s3（每一行内的多个子串用空格隔开，每个字串长度不超过15）

### 输出
输出最长共同子串及其长度。如果有多个相同长度的最长共同子串，则依次输出，中间空格隔开；如果没有最长共同子串，则输出"NULL"

### 样例输入
aabb ccdd ee
aabb ee
ccdd aabb

### 样例输出
aabb 4

### 我写的代码
```c
#include <stdio.h>
#include <string.h>

int main() {
    char s[3][256][256];
    memset(s, 0, sizeof(s));
    int i = 0, j = 0, k = 0;

    for (char c; ~(c = getchar()); ) {
        if (c == '\n') {
            ++i;
            j = 0;
            k = 0;
        } else if (c == ' ') {
            ++j;
            k = 0;
        } else {
            s[i][j][k++] = c;
        }
    }

    int max = 0;
    for (int i = 0; s[0][i][0]; ++i) {
        for (int j = 0; s[1][j][0]; ++j) {
            for (int k = 0; s[2][k][0]; ++k) {
                if (!strcmp(s[0][i], s[1][j]) && !strcmp(s[0][i], s[2][k])) {
                    printf("%s ", s[0][i]);
                    max = strlen(s[0][i]);
                }
            }
        }
    }

    if (max) {
        printf("%d", max);
    } else {
        printf("NULL");
    }





    return 0;
}

// vim: et:ts=4:sw=4:

```

