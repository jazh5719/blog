# nginx

## [安装](https://www.jianshu.com/p/9b2dd37a5af9 "安装")

1.  sudo yum install nginx

## 命令

```bash
# 启动
sudo systemctl enable nginx 
sudo systemctl start nginx

# 重新加载服务
sudo systemctl reload nginx

# 停止服务
sudo systemctl stop nginx

# 查看状态
sudo systemctl status nginx
```

## 配置

所有配置都在/etc/nginx/中\\
主要配置是 /etc/nginx/nginx.conf

## 安装 [https://micro-editor.github.io/](https://micro-editor.github.io/ "https://micro-editor.github.io/")

-   curl [https://getmic.ro](https://getmic.ro "https://getmic.ro") | bash
-   [快捷键](https://zhuanlan.zhihu.com/p/54984887 "快捷键")

## nginx.config

```nginx
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    include /etc/nginx/conf.d/*.conf;

    server {
        listen       80;
    charset     utf-8;

        location /static/ {
          root /root;
          autoindex on;  #开启目录浏览
          autoindex_format html; #以html风格将目录展示在浏览器中。html、xml、json、jsonp
          autoindex_exact_size off; # on：展示文件字节数；off：以可读的方式显示文件大小
          autoindex_localtime  on; # on、off：是否以服务器的文件时间作为显示的时间
        }
        
        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

}
```
