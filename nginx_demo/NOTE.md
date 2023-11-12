nginx 是web服务器，主要用于网站加速，反向代理等功能。
它的配置文件是 nginx.conf，位于/etc/nginx/目录下。
nginx 支持 http、mail、ftp 等 protocols，支持反向代理、负载均衡、 Quic等功能。

以下是一些nginx的使用命令：
1. 查看nginx版本：nginx -v
2. 查看nginx配置：nginx -T
3. 启动nginx：nginx
4. 停止nginx：nginx -s stop
5. 重新加载nginx配置
   - 热加载：nginx -s reload
   - 冷加载：nginx -c /path/to/nginx.conf -s reload

以下是一些nginx常见的配置项：
1. worker_processes：设置工作进程
2. worker_connections：设置每个工作进程的最大连接数
3. server：定义一个服务器
4. listen：设置监听端口
5. server_name：设置域名
6. location：设置路由
7. root：设置网站根路径
8. index：设置网站首页
9. access_log：设置访问日志路径
10. error_log：设置错误日志路径
11. proxy_pass：设置反向代理地址
12. fastcgi_pass：设置FastCGI地址
13. uwsgi_pass：设置uWSGI地址
14. scgi_pass：设置SCGI地址

## 基本概念


## 安装配置

## 常用命令

## 反向代理

## 复杂均衡

## 虚拟主机

