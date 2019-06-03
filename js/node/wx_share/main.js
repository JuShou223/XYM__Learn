// require 进来 COMMONJS 模块化方案
const http=require('http');
const https=require('https');
var i=0;
// web 服务 在软件上理解就是一个Http访问的服务

http.createServer(function(request,response){
  i++;
  console.log(i);
  response.end(`hello word ${i}`);
}).listen(3000);