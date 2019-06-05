## why

无状态

## cookie
本地存储 
怎么来：
1. js document.cookie 可读写
2. 服务端
服务端 通过 set-cookie 响应头设置 cookie
-内容：
name:
value:
path: cookie 在哪个路径下生效

/          /所有路径
/user      /user user以及user 下面的
/user/abc  /user/abc user/abc 以及下面的
作用范围

httpOnly: true/false 之分 true 不能通过 js 获取 cookie的值
maxAge: 在几秒之后 cookie 被删除
secure: 安全 只会在 https 协议下传输 
koa: ms 
js: s

domain + path
在什么域名什么路径生效
浏览器检查存储的 cookie 会发送给服务端的
而且: http 传输 报文的大小
放在 cookie 请求头里面发送。

用途 
状态管理 true
用户个性化设置 false
规定死的
## session 
会话
靠后台语言自己实现的
很多个用户产生 很多个 session

userId
sessionId 用户会话的时候 通过 自己的 sessionId 查询自己的状态
cookie: sessionId-id 

