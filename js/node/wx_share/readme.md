传统的MVC后端开发

MVVM
Model page({data:{}})
View Templete wxml
VM {{}} wx:for

MVC  Model(数据库) View(静态页面) Controller

Web HTTP服务器
端口？ 3000
Mysql 3306
WebServer 80

用户Request 通过IP + 端口
Web Server Response
http.createServer(function(request,response){
  request 用户 N
  response 
}).listen(8080)