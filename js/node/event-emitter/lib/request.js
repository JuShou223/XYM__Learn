const request = require('request')
module.exports = (url)=>{ 
    request({
        url,
        json:true
    },(err,res,body)=>{
    })
}