HTTP 协议 req res
状态码：http响应中(response) 包含状态码
代理 浏览器 proxy
1xx 请求正在处理 继续等待
2xx 请求已经成功处理掉了 200 ok
3xx 重定向 Location
4xx 用户出现错误404(地址出错了) not found 未授权 受限资源
5xx 服务器端出现错误

301 永久跳转
用户 www.xiaomi.com www.mi.com
告诉蜘蛛 www.xiaomi.com/a.html 红米手机
废弃了 301 www.mi.com/a.html
3xx 区别 永久跳转 告诉蜘蛛 把记录更新掉 
301 可以在改变状态码 不变 来展示理解 http://localhost:3000 301 永久跳转 再次访问 浏览器有缓存 不需要再走服务器了
302 临时跳转 不会告知蜘蛛 或在前端缓存
 
