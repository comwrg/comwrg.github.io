---
title: 算法题-字符查找
date: 2018-12-18 13:58:00
tags:
  - algorithm
categories:
  - algorithm
---


## 题目描述
现有如下计算机编程语言列表： 
C, C++, Python, Java, Basic, C#, PHP, Javascript, SQL, Ruby, Matlab, Go, Perl, R, Fortran, Pascal, Swift； 
请你根据用户输入的若干个字符，显示所有相匹配（包含该子串）的计算机语言。 
例如：输入”Ba”，显示”Basic”；输入”C”，显示”C”, ”C++”, "C#"；输入"o"，显示"Python", "Go", "Fortran"。 

<!-- more -->
### 输入
输入匹配字符串
### 输出
输出匹配结果，每个结果占一行，顺序按原始列表顺序
### 样例输入
C
### 样例输出
C
C++
C#

### 我写的代码
```c
#include <stdio.h>
#include <string.h>

int main() {
    char chs[] = ",C,C++,Python,Java,Basic,C#,PHP,Javascript,SQL,Ruby,Matlab,Go,Perl,R,Fortran,Pascal,Swift,";
    char s[1024];
    scanf("%s", s);

    int pos[1024], pos_idx = 0;
    
    for (int i = 0; i < strlen(chs); ++i) {
        if (chs[i] == ',')
            pos[pos_idx++] = i;
    }
    for (int i = 1; i < pos_idx; ++i) {
        int r = -1;
        for (int j = pos[i-1]+1; j < pos[i]; ++j) {
            r = strncmp(chs+j, s, strlen(s));
            if (r == 0)
                break;
        }
        if (r == 0) {
            for (int j = pos[i-1]+1; j < pos[i]; ++j) {
                printf("%c", chs[j]);
            }
            printf("\n");
        }
    }



    return 0;
}
```


