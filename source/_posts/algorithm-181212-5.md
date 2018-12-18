---
title: 算法题-矩阵排序
date: 2018-12-18 15:34:23
tags:
  - algorithm
categories:
  - algorithm
---

## 题目描述
编写函数 
void order(int m, int n, int *matrix); 
将 m × n 维的矩阵按照如下规则排序： 
（1）首先将矩阵内每一列的元素值，按照从小到大的顺序排列； 
（2）然后将矩阵各列按照该列元素之和的顺序从小到大排列，并将排序后的矩阵输出。 
使用指针方法编程。 

<!-- more -->

输入形式为： 
m（行数 0 < m < 100） 
n（列数 0 < n < 100） 
矩阵元素 m 行 n 列（同一行的元素以空格隔开） 

输出排序后的矩阵。若输入m,n不符合要求，则输出 "ERROR"。 

### 输入
共 m+2 行整数：
m（行数 0 < m < 100）
n（列数 0 < n < 100）
矩阵元素 m 行 n 列（同一行的元素以空格隔开） 
### 输出
排序后的矩阵元素 m 行 n 列（同一行的元素以空格隔开）
### 样例输入
3
3
1 2 9
4 8 6
7 5 3
### 样例输出
1 2 3
4 5 6
7 8 9

### 我的代码
```c
#include <stdio.h>

typedef struct {
    int prev, val;
} pos;

int data[105][105];
pos sum[105];

int compare_ints(const void* a, const void* b) {
    int arg1 = *(const int*)a;
    int arg2 = *(const int*)b;

    if (arg1 < arg2) return -1;
    if (arg1 > arg2) return 1;
    return 0;

    // return (arg1 > arg2) - (arg1 < arg2); // possible shortcut
    // return arg1 - arg2; // erroneous shortcut (fails if INT_MIN is present)
}

int compare_pos(const void* a, const void* b) {
    int arg1 = ((const pos*)a)->val;
    int arg2 = ((const pos*)b)->val;

    if (arg1 < arg2) return -1;
    if (arg1 > arg2) return 1;
    return 0;

    // return (arg1 > arg2) - (arg1 < arg2); // possible shortcut
    // return arg1 - arg2; // erroneous shortcut (fails if INT_MIN is present)
}


int main() {
    int m, n;
    scanf("%d%d", &m, &n);

    memset(sum, 0, sizeof(sum));

    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            int r = scanf("%d", &data[j][i]);
            if (r == EOF) {
                printf("ERROR");
                return 0;
            }
            sum[j].val += data[j][i];
        }
    }

    /* save as 
     * n row, m col 
     */

    for (int i = 0; i < n; ++i) {
        qsort(&data[i], m, sizeof(int), compare_ints);
        sum[i].prev = i;
    }

    qsort(sum, n, sizeof(pos), compare_pos);

    /* for (int i = 0; i < n; ++i) { */
    /*     printf("%d ", sum[i].val); */
    /* } */
    /* printf("\n"); */

    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (j) printf(" ");
            int k = sum[j].prev;
            printf("%d", data[k][i]);
        }
        printf("\n");
    }



    return 0;
}

```

