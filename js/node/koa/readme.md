## koa 中间件 middleWare
app.use(middleware)
next 下一个中间件 
每一次 use 都会注册一个中间件
middleWare1 middleWare2 
1. async 函数
2. 洋葱模型 一层一层往最里面执行， 最后一个中间件执行完了 一层玩外冒泡执行剩余代码
3. 解耦： 每一个中间件负责一件事。

以 X 开头的： 自定义响应头
## koa 第三方中间件 
koa ctx 就是req res 组成的对象
ctx： {
    req:{},
    res:{}
}
接着扩展 ctx 接着往ctx 上塞东西 
ctx： {
    req:{},
    res:{},
    render:()=>{}
}
## 
package.json 项目描述 项目管理
依赖 npm install 下来的文件
npm i node_modules 目录
koa 压缩 -> 20 500m
不把 node_modules 放在压缩目录里面 5m
npm i 从json 文件里面读取依赖安装

## ejs 
<%=%> 原样输出
<%-%> 解析html
<%%> 解析js
