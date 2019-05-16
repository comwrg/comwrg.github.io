---
title: 算法题-BAT最小交换次数
date: 2019-05-16 11:40:26
tags:
  - algorithm
categories:
  - algorithm
---

## 题目
IT产业人才需求节节攀升。业内巨头百度、阿里巴巴、腾讯（简称BAT）在某海滩进行招聘活动。
招聘部门一字排开。由于是自由抢占席位，三大公司的席位随机交错在一起，形如：
ABABTATT，这使得应聘者十分别扭。
于是，管理部门要求招聘方进行必要的交换位置，使得每个集团的席位都挨在一起。即最后形如：
BBAAATTT 这样的形状，当然，也可能是：
AAABBTTT 等。
现在，假设每次只能交换2个席位，并且知道现在的席位分布，
你的任务是计算：要使每个集团的招聘席位都挨在一起需要至少进行多少次交换动作。
输入是一行n个字符（只含有字母B、A或T），表示现在的席位分布。
输出是一个整数，表示至少交换次数。

<!-- more -->

比如，输入：
TABTABBTTTT

程序应该输出：
3

再比如，输入：
TTAAABB

程序应该输出：
0

我们约定，输入字符串的长度n 不大于10万

资源约定：
峰值内存消耗（含虚拟机） < 256M
CPU消耗  < 1000ms


## 思路
最后的形态情况可能有6种, 分别BAT的全排序
所以如何确定最后的形态呢, 我的想法是在6种情况中与输入比较, 取最少不通字符的那个形态

确定了最后的形态, 接下来就要考虑, 如何交换

交换的情况肯定有两种
1. 交换后各自都正好到达各自的位置
2. 交换后只有一个字符到达了自己的位置

参考下面的*Reference*, 我们可以用环来思考, 最后的交换次数就是字符数减去组成的环数

..说的感觉不是很清楚, 自己都不知道咋说了

## 代码
```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    string s;
    while (cin >> s) {
        int cnt[256] = {0};
        for (char c : s) {
            ++cnt[c];
        }

        string d = "BAT";
        sort(d.begin(), d.end());

        int min_d = s.size(); // 最小的字符不同数
        string min_s; // 最后的形态
        do {
            int k = 0, diff = 0;
            for (int i = 0; i < 3; ++i) {
                for (int j = 0; j < cnt[d[i]]; ++j, ++k) {
                    if (s[k] != d[i]) {
                        ++diff;
                    }
                }
            }
            if (diff < min_d) {
                min_d = diff;
                min_s = d;
            }
        } while(next_permutation(d.begin(), d.end())); // BAT的全排列

        int part_cnt[3][256] = {0};
        for (int i = 0, k = 0; i < 3; ++i) {
            for (int j = 0; j < cnt[min_s[i]]; ++j, ++k) {
                ++part_cnt[i][s[k]];
            }
        }

        int ans = min_d;
        int left = 0; // 剩下需要3个分区一起交换的字符
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < i; ++j) {
                ans -= min(part_cnt[i][min_s[j]], part_cnt[j][min_s[i]]); // 减去可以两两交换同时到达各自位置的字符
                left += abs(part_cnt[i][min_s[j]] - part_cnt[j][min_s[i]]); // 加上不能两两交换同时到达的字符
            }
        }
        ans -= (left / 3); // 3个字符够成一个环
        cout << ans << endl;
    }


    return 0;
}

```



## Reference
* https://www.jiuzhang.com/qa/34/
* http://radio.mitbbs.com/article_t1/JobHunting/32876681_0_1.html
* https://www.nowcoder.com/questionTerminal/acaafbd0eeca448aad4997f43f357f2f

