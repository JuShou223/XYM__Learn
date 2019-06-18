const express = require('express')
const http = require('http')
const app = express() //应用
const api = require('./api') // /api 启动后端API 服务
app.set('port',3000)
app.use(api)
http
.createServer(app)
.listen(app.get('port'),'0.0.0.0',function(){
    console.log('express server listening on port')
})