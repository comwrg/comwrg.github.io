---
title: 算法题: 推荐潜在好友
date: 2018-11-21 21:01:25
tags:
  - algorithm
categories:
  - algorithm
---

昨天写的一道算法题

图算法：推荐潜在好友 by  Hongzhi Shi
时间限制: 2000 ms 内存限制: 6000 KB

但是跟图算法没半毛钱关系
关键是过内存上的限制

## 问题描述
社交网络可以用一个图来描述。假定有N个使用者，每个使用者可以用一个节点表示，如果使用者m和使用者n已经是线上朋友，表示两个节点已经连接，即图中包含连接m和n的边。在这个练习中，我们将为使用者推荐可能的朋友。

给定表示一个社交网络的图，包含N个节点和M条边。如果节点m和n不直接相连，但与K个以上（包括K个）的相同节点连接，我们可以认为他们可能认识，请给出指定用户的潜在好友（暂时还未直接连接的节点）。对于给定用户，请将其所有潜在好友按照他们共同好友数量由多到少排列输出，对于共同好友数量相同的情况，请按照序号从小到大排列输出。

## 输入格式
输入的第一行是三个整数N，K，U。其中N表示社交网络中用户的个数，即网络节点的个数。K表示共同好友数不少于K的两个用户才互相算作潜在好友。U表示需要输出标号为U的用户的潜在好友，对应矩阵行/列标号为U的节点，U从0开始计。
输入的第二行到第N+1行是用户之间的图的邻接矩阵：0代表不是好友，1代表是好友。

## 输出格式
输入的第一行是三个整数N，K，U。其中N表示社交网络中用户的个数，即网络节点的个数。K表示共同好友数不少于K的两个用户才互相算作潜在好友。U表示需要输出标号为U的用户的潜在好友，对应矩阵行/列标号为U的节点，U从0开始计。
输入的第二行到第N+1行是用户之间的图的邻接矩阵：0代表不是好友，1代表是好友。

## 输入样例
```
6 1 3
0 1 0 1 0 1 
1 0 0 0 0 1 
0 0 0 0 0 1 
1 0 0 0 0 1 
0 0 0 0 0 1 
1 1 1 1 1 0
```

## 输出样例
```
1 2 4
```

## 提示
图的邻接矩阵对角线元素没有意义，且为对称阵。



## 我写的代码

```c++
#include <bits/stdc++.h>
using namespace std;

struct peo {
    // idx, index; b, count
    int idx, count;
    peo(int a, int b) : idx(a), count(b) {}

    bool operator<(const struct peo& rhs) const {
        if (count > rhs.count)
            return true;
        if (count < rhs.count)
            return false;
        return idx < rhs.idx;
    }
};

int main() {
    ios::sync_with_stdio(false);

    int n, k, u;

    cin >> n >> k >> u;

    vector<peo> ans;

    bitset<5000> b[5000];

    for (int i = 0; i < n; ++i) {
        b[i].reset();
        for (int j = 0; j < n; ++j) {
            int k;
            cin >> k;
            if (k) {
                b[i].set(j);
            } else {
            }
        }
    }

    for (int i = 0; i < n; ++i) {
        if (i == u || b[u].test(i))
            continue;
        b[i] &= b[u];
        if (b[i].count() >= k)
            ans.emplace_back(peo(i, b[i].count()));
    }

    sort(ans.begin(), ans.end());

    if (!ans.empty()) {
        cout << ans[0].idx;
        for (int i = 1; i < ans.size(); ++i)
            cout << " " << ans[i].idx;
    }
    cout << endl;


    return 0;
}
```

最大的测试数据有到达4000+

原来并不是用位存的, 是用vector存的, 内存直接爆了, so...




