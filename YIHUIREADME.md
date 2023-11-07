## 同步fork教程
https://cloud.tencent.com/developer/article/2273227

## nginx 配置

### 前端在/oa下的方式
```bash
location /oa {
  #前端打的dist资源存放目录
  alias		 /srv/www/project;
  index  index.html;
  # 避免f5刷新后404
  try_files  $uri  $uri/  /oa/index.html;
}
```

### 前端直接在/的方式
```bash
location / {
  #前端打的dist资源存放目录
  root		 /srv/www/project;
  index  index.html;
  # 避免f5刷新后404
  try_files  $uri  $uri/  /index.html;
  # 不缓存html，防止程序更新后缓存继续生效
  if ($request_filename ~* .*\.(?:htm|html)$) {
    add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
    access_log on;
  } 
}

location /jeecgboot/ {
  #后台接口地址(我们部署去掉了/jeecg-boot项目名，如果你有请加上）
  proxy_pass         http://127.0.0.1:8082/jeecgboot/;
  add_header Access-Control-Allow-Origin '*';
  proxy_redirect off;
  #真实IP获取
  proxy_set_header  Host             $host;
  proxy_set_header  X-Real-IP        $remote_addr;
  #支持websocket得这么写，不然CentOS上可能失败
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  set $my_proxy_add_x_forwarded_for $proxy_add_x_forwarded_for;
  if ($proxy_add_x_forwarded_for ~* "127.0.0.1"){
     set $my_proxy_add_x_forwarded_for $remote_addr;
  }
  proxy_set_header   X-Forwarded-For $my_proxy_add_x_forwarded_for;
}
```
