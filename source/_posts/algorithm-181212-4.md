---
title: 算法题-接龙循环移位
date: 2018-12-18 14:03:52
tags:
  - algorithm
categories:
  - algorithm
---

## 题目描述
编写函数 
void shift_solit_matrix(int m, int n, int *matrix, int number); 
将 m × n 维的矩阵进行一条龙循环移位。移位过程中，矩阵的相邻行相接，构成 “一条龙”（第一行与第二行尾相连，第二行与第三行首相连，依此类推）。使用指针方法编程。 

 输入形式为： 
m（行数 0 < m < 100） 
n（列数 0 < n < 100） 
matrix 矩阵元素 m 行 n 列（同一行的元素以空格隔开） 
number（位移大小，负数表示向左循环移位，正数表示向右循环移位） 

输出移位后的矩阵。若输入m,n不符合要求，则输出 "ERROR"。 

<!-- more -->
### 输入
共 m+3 行： 
m（行数 0 < m < 100） 
n（列数 0 < n < 100） 
matrix 矩阵元素 m 行 n 列（同一行的元素以空格隔开） 
number（位移大小，负数表示向左循环移位，正数表示向右循环移位） 
### 输出
移位后的矩阵。若输入m,n不符合要求，则输出 "ERROR"。
### 样例输入
3
3
1 2 3
4 5 6
7 8 9
1
### 样例输出
9 1 2
5 6 3
4 7 8

#### 我的代码
```c
#include <stdio.h>
#include <stdlib.h>

void reverse(int *p, int len) {
    int *begin = p;
    int *end = p + len - 1;

    while (begin < end) {
        int t = *begin;
        *begin = *end;
        *end = t;

        begin++;
        end--;
    }
}

int main() {
    int data[30000];
    int m, n, k, *p = data+10000, p_idx = 0;
    scanf("%d%d", &m, &n);

    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j, p_idx++) {
            int r = scanf("%d", p+p_idx);
            if (r == EOF) {
                printf("ERROR");
                return 0;
            }
        }
        if (i % 2) {
            reverse(p+(i*n), n);
        }
    }
    scanf("%d", &k);
    k %= (m * n);

    memcpy(p - (m*n), p, m*n*sizeof(int));
    memcpy(p + (m*n), p, m*n*sizeof(int));

    /*
    for (int i = 0; i < 3*n*m; i++) {
        printf("%d ", (p - (m*n))[i]);
    }

    printf("\n");
    */

    p -= k;
    p_idx = 0;

    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j, p_idx++) {
            if (j)
                printf(" ");

            if (i % 2)
                printf("%d", p[n*(i+1) - j - 1]);
            else
                printf("%d", p[p_idx]);
        }
        printf("\n");
    }






    return 0;
}

// vim: et:ts=4:sw=4:

```

