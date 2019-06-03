// API封装模块,wx.request 也封装一下，不要每次都去重复代码
// data{}
// method get | post | puT | RESTFUL
// 通用的数据请求
// needSubDomain
// needSubDomain book.douban.com
const CONFIG=require('./config.js');
const API_BASE_URL='http://api.it120.cc';
const request= (url,method,needSubDomain,data)=>{
  return new Promise((resolve,reject)=>{
    const _url=API_BASE_URL+(needSubDomain?'/'+CONFIG.subDomain:'')+url;
    console.log(_url)
    wx.request({
      url:_url,
      method:method,
      data:data,
      header:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      success:function(res){
        resolve(res.data)
      },
      fail:function(error){
        reject(error)
      },
      complete(){}
    })
  })
}
module.exports={
  // {page:1,categroy_id:1}
  goods:(data)=>{//商品api
    // Promise
    return request('/shop/goods/list',true,'post',data);
  },
  // 后台添加的
  banners:(data)=>{
    return request('/banner/list',true,'get',data);
  },
  noticeList:(data)=>{
    return request('/notice/list',true,'post',data)
  }
}