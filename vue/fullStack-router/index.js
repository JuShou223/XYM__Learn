const http = require('http')
const fs = require('fs')
// 后端开发 /api/shops /
http.createServer(function(req,res){
    var filePath = '.' + req.url
    if(filePath == './'){
        filePath = './index.html'
    }
    readFile(filePath,res)
}).listen(3000)

function readFile(path,res) {
    fs.readFile(path,'utf-8',function(err,data){
        if(err){
            readFile('./index.html',res)
        }else{
            res.write(data)
            res.end()
        }
    })
}