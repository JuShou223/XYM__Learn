const http = require('http')
const hostname = '127.0.0.1'
const port = 2000
const server = http.createServer((req,res)=>{
    res.writeHead(302,{'location':'https://itbilu.com/'})
    console.log(res._header)
    res.end()
}).listen(port)