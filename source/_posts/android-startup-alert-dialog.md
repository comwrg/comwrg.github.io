---
title: Android 启动显示对话框
date: 2018-11-22 14:44:08
tags:
  - Android
categories:
  - Android
---



可以使用Recevier启动透明Activity来实现

<!-- more -->

## Recevier 实现
网络上很多

具体Receiver的实现
```java
package com.example.myapplication;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class MyReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent.getAction().equals("android.intent.action.BOOT_COMPLETED")) {
            Intent i = new Intent(context, DialogActivity.class);
            i.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(i);
        }
    }
}
```

## 透明 Activity 实现
styles.xml 中加入, 透明 sytle

```xml
    <style name="Theme.AppCompat.Translucent">
        <item name="windowActionBar">false</item>
        <item name="windowNoTitle">true</item>
        <item name="android:windowNoTitle">true</item>
        <item name="android:windowBackground">@android:color/transparent</item>
        <item name="android:colorBackgroundCacheHint">@null</item>
        <item name="android:windowIsTranslucent">true</item>
        <item name="android:windowAnimationStyle">@android:style/Animation</item>
    </style>
```

然后在`AndroidManifest.xml`中你想要启动的那个`activity`的`Theme`设置为`Theme.AppCompat.Translucent`

```xml
        <activity android:name=".DialogActivity"
                  android:theme="@style/Theme.AppCompat.Translucent">
        </activity>
```

## 对话框实现
这个网上也很多

```java
package com.example.myapplication;

import android.content.DialogInterface;
import android.support.v7.app.AlertDialog;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

public class DialogActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dialog);

        AlertDialog dialog = new AlertDialog
                .Builder(this)
                .setTitle("title")
                .setMessage('content')
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        finish();
                    }
                })
                .create();
        dialog.show();
    }
}

```
