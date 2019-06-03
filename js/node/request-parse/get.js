//http  
const qs= require('querystring')
const url= require('url')
const http=require('http')
http.createServer((req,res)=>{
  // 自己的服务器
  if(req.url=='/favicon.ico') return;
  const reqobj= url.parse(req.url);
  //  get 请求在query 属性 
  const queryObj = qs.parse(reqobj.query)
  console.log('正在请求',queryObj)
  res.writeHead(200,{'Content-Type':'text/html;Charset=utf-8'})
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    ${JSON.stringify(queryObj)}
  </body>
  </html>`);
}).listen(3000,()=>{
  console.log('服务正在3000端口')
})