---
title: Python字符串十六进制编码的破事
date: 2019-08-06 16:04:50
tags:
categories:
---

刚才做ctf题目发现这种十六进制编码还是挺烦的, 整理一下思绪

```
string <-> hex string
string <-> dec integer
```
<!-- more -->

## 彻底解决这些烦人的玩意
### string <-> hex string
#### string -> hex string
```python
# all python version
import binascii
binascii.b2a_hex('string')
binascii.hexlify('string')
# only python2
'string'.encode('hex')
```

#### string <- hex string
```python
# all python version
import binascii
binascii.a2b_hex('737472696e67')
binascii.unhexlify('737472696e67')
# only python2
'737472696e67'.decode('hex')
```

### string <-> dec integer
#### string -> dec integer
```python
# string -> hex string -> integer
int(binascii.hexlify('string'), 16)
```

#### string <- dec integer
```python
# integer -> hex string -> string
binascii.unhexlify('%x' % 126943972912743)
binascii.unhexlify('{0:x}'.format(126943972912743))
```

## Reference
* https://stackoverflow.com/a/10824333

