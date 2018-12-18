---
title: 算法题-合并同类项
date: 2018-12-18 13:59:25
tags:
  - algorithm
categories:
  - algorithm
---

## 题目描述
利用指针实现如下函数功能： 
int polycomb(char *s1, char *s2, char *buffer) 
函数功能为：将s1,s2指向的多项式合并同类项后，存入buffer指向的变量中，函数返回为合并同类项后最高次的系数。在主函数中输出合并后的多项式，以及其最高次的系数。 
说明：多项式均按照降次排列，且输入的多项式的系数均为一位整数，系数为零的项不显示。 

<!-- more -->
### 输入
输入两行，分别为两个多项式，多项式按照降次排列，输入数据中每项系数均为一位且不为0

### 输出
输出合并之后的多项式，以及其最高次的系数，多项式按降次排列，且系数为0的项不显示

### 样例输入
x^3+2x^2-5x+6
-2x^2-2x

### 样例输出
x^3-7x+6 1

### 我写的代码
```c
#include <stdio.h>
#include <string.h>

int ans[1024];

void clac(char *s) {
    /* -x^3+2x^2-5x+6 
     * -2x^2-2x 
     * ax^b 
     */

    int a = 0, b;

    for (int i = 0; i < strlen(s); ++i) {
        char c = s[i];

        if (c == '+') {
            ans[0] += a;
            a = 1;
        } else if (c == '-') {
            ans[0] += a;
            a = -1;
        } else if (c > '0' && c <= '9') {
            int k = (c - '0');
            for (; (c = s[i+1]) && c >= '0' && c <= '9'; ++i) {
                k = 10*k + (c - '0');
            }
            if (!a)
                a = 1;
            a *= k;
        } else if (c == 'x') {
            if (i == 0) {
                a = 1;
            }

            c = s[i+1];
            if (c == '^') {
                b = s[i += 2] - '0';
                for (; (c = s[i+1]) && c >= '0' && c <= '9'; ++i) {
                    b = 10*b + (c - '0');
                }
            } else {
                b = 1;
            }

            /* printf("%d %d\n", a, b); */
            ans[b] += a;
            a = 0;
        }
    }

    /* printf("%d %d\n", ans[0], a); */
    ans[0] += a;
}

int main() {
    char s1[1024], s2[1024];

    scanf("%s%s", s1, s2);

    memset(ans, 0, sizeof(ans));
    
    clac(s1);
    clac(s2);

    int begin = 1, max;

    for (int i = 1023; i > 0; --i) {
        if (!ans[i])
            continue;
        /*
         * [+-] ax^b
         */
        if (begin) {
            max = ans[i];
        } else {
            if (ans[i] > 0) {
                printf("+");
            }
        }


        if (ans[i] == -1) {
            printf("-");
        } else if (ans[i] != 1) {
            printf("%d", ans[i]);
        }

        printf("x");

        if (i != 1) {
            printf("^%d", i);
        }

        begin = 0;
    }

    if (!begin && ans[0] > 0)
        printf("+");
    if (ans[0]) {
        printf("%d", ans[0]);
        if (begin)
            max = ans[0];
    }

    printf(" %d", max);

    return 0;
}

// vim: et:ts=4:sw=4:
```
