# static
koa-static
为什么要配置 
静态资源：图片 html css js
不会随着服务的运行改变内容 
assets 资源 
path.join 将路径各个部分 连起来 处理了各个平台的分隔符

## formidable 
fields 非[type='file'] 内容都会到
files [type='file']

## 静态资源服务
双击打开
file:// 本地文件读取
服务器
http://localhost:9090
访问图片时 发了一个请求 
处理static 目录的资源 映射为 请求路径
/static/1.png 返回 1.png的内容
业内擅长静态资源的服务器 Nginx
html 里面的 引入的 图片 js css 都会发出一个请求 然后 这些都是静态资源
所以 url 和服务器磁盘路劲 一一对应
1. 有index.html 的时候 自动打开
2. 没有 列出所有文件 文件夹 
3. 用 koa-static 的作用时 在html 里面正确引入 你指定的目录下的资源