# vscode插件

## 目录

-   [插件列表](#插件列表)
-   [插件详情](#插件详情)
    -   [ssh-remote](#ssh-remote)

## 插件列表

-   auto Rename Tag 自动修改闭合标签
-   gitLens  git扩展
-   highLight 高亮 TODO FIXME
-   编码风格 -- [EditorConfig for VS Code](https://www.jianshu.com/p/cfa259c69307 "EditorConfig for VS Code")
-   CSS Modules
-   wakatime 工作时间追踪
-   git graph    git的图形化
-   Bracket Pair Colorizer 括号上色（vscode已内置，可以设置配对指南）
-   EditorConfig for VS Code  代码风格统一
-   javascript console utils  调试console
-   CodeSnap   代码生成图片

## 插件详情

### ssh-remote

1.  下载vscode扩展ssh-remote
2.  设置
3.  安装完扩展之后左侧会出现，远程资源管理器
4.  点击设置按钮,第二个按钮

```text
Host 114.116.72.146    
  HostName 114.116.72.146  
  User root    
  IdentityFile /Users/didi/.ssh/id_rsa    # 解决每次要输入密码的问题
  ServerAliveInterval  60   # 解决总会断开链接的问题
```

1.  解决每次都要输密码的问题

主要是生成或者用原来的rsa

1.  设置配置文件

```text
IdentityFile /Users/didi/.ssh/id_rsa   #私钥路径
```

1.  把本地机器.ssh下的.pub公钥复制到远程机器 .ssh目录 authorized\\\_keys里
