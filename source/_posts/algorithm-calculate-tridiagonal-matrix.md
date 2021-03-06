---
title: 求解三对角矩阵线性方程组
date: 2018-12-12 14:40:19
tags:
  - algorithm
categories:
  - algorithm
---

求解三对角矩阵线性方程组
时间限制: 1000 ms 内存限制: 1600 KB
by  Kailai Zhang

## 问题描述
三对角矩阵是指除主对角线和其相邻的上下两条对角线之外，其他所有元素都为0的矩阵。
本次实验给定一个三对角矩阵A和右端矩阵B，求解矩阵方程AX=B。
可以认为B=[b1,b2,...,bn]为一些列向量的组合，从而解出的矩阵X=[x1,x2,...,xn]为一些解向量的组合。
本次实验给出的矩阵A均为三对角非奇异方阵，解的准确程度由残差值 ||Axi - bi||2给出，这里i从1到n，要求对所有i，残差值都小于 0.1。

<!-- more -->

## 输出格式
输出一共为n行，每行m个浮点数，依次表示X矩阵从第1列到第n列的m个元素的值。
根据以上定义，输出的每一行必须满足对应的残差值小于0.1。

## 输入样例
```
5 2 \\表示A为5乘5的矩阵，B为5乘2的矩阵
1.0 2.0 3.0 4.0 5.0 \\表示主对角线上的五个数
1.0 1.0 1.0 1.0 \\表示主对角线上方对角线的四个数
6.0 5.0 4.0 3.0 \\表示主对角线下方对角线的四个数
3.0 13.0 23.0 33.0 37.0 \\表示B的第一列的值
2.0 9.0 9.0 9.0 8.0 \\表示B的第二列的值
```

## 输出样例
```
1.0 2.0 3.0 4.0 5.0 \\表示X矩阵第一列的值
1.0 1.0 1.0 1.0 1.0 \\表示X矩阵第二列的值
```

## 提示
输出结果并不唯一，只需要使X矩阵的所有列都满足残差小于0.1即可。
C++默认的输出精度可能不满足残差要求，同学们需要显式提高输出精度。

## 我写的代码
算法参考: https://en.wikipedia.org/wiki/Tridiagonal_matrix
跟着算法写就可以了, 最后提高下输出位数
```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    double a[n+2], b[n+2], c[n+2], d[n+2], x[n+2];
    for (int i = 1; i <= n; ++i) {
        cin >> b[i];
    }
    for (int i = 1; i <= n-1; ++i) {
        cin >> c[i];
    }
    for (int i = 2; i <= n; ++i) {
        cin >> a[i];
    }

    // calc c'[i]
    c[1] /= b[1];
    for (int i = 2; i <= n-1; ++i) {
        c[i] /= (b[i] - a[i]*c[i-1]);
    }

    for (int j = 0; j < m; ++j) {
        for (int i = 1; i <= n; ++i) {
            cin >> d[i];
        }

        // calc d'[i]
        d[1] /= b[1];
        for (int i = 2; i <= n; ++i) {
            d[i] = (d[i] - a[i]*d[i-1]) / (b[i] - a[i]*c[i-1]);
        }

        // calc x[i]
        x[n] = d[n];
        for (int i = n-1; i >= 1; --i) {
            x[i] = d[i] - c[i]*x[i+1];
        }

        // print
        for (int i = 1; i <= n; ++i) {
            cout << fixed << setprecision(50)
                 << x[i] << " ";
        }
        cout << endl;

    }

    return 0;
}

```

