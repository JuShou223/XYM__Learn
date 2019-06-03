const https=require('https');
const cheerio = require('cheerio');
const url = 'https://www.mafengwo.cn/mdd/citylist/21536.html';
const imageDir='./math/';
const fs=require('fs');
const path=require('path');
// const moviesDir='./doubanMoviesData/';
// function doSpider(){
  https.get(url,(res)=>{
    // 源源不断收到数据
    let html=''
    res.on('data',(chunk)=>{
      html+=chunk;
    });
    res.on('end',()=>{
      // console.log(html);
      const $ = cheerio.load(html);
      // let movies = [];
      $('.item').each(function(){
        // 限制 第一个参数的选择区域 默认是全局
        const picUrl=$('.img img',this).attr('data-original');
        // const title=$('.info .title',this).text();
        // const star=$('.star .rating_num',this).text()
        // const link=$('.hd a',this).attr('href');
        // const movie={
        //   title,
        //   star,
        //   link,
        //   picUrl
        // }
        // movies.push(movie);
        // console.log(movies);
        // console.log(picUrl)
        downloadImage(picUrl);
      })
      // saveLocalData(start / 25,movies);
    })
// }
// function saveLocalData(pageNum,movies){
//   fs.writeFile(moviesDir+`data${pageNum}.json`,JSON.stringify(movies),(err)=>{
//     if(!err){
//       console.log('保存成功');
//     }
  })
// }
function downloadImage(picUrl){
  https.get(picUrl,(res)=>{
    res.setEncoding('binary');
    let data=''
    res.on('data',(chunk)=>{
      data+=chunk
    })
    res.on('end',()=>{
      const fileName=path.basename(picUrl,'?imageMogr2%2Fthumbnail%2F%21320x200r%2Fgravity%2FCenter%2Fcrop%2F%21320x200%2Fquality%2F90');
      console.log(fileName)
      fs.writeFile(imageDir+fileName,data,'binary',(err)=>{
        if(!err){
          console.log(fileName,'保存成功');
        }
        // else{
        //   console.log(err)
        // }
      })
    })
  })
}
// const total = 9;
// let start = 0;
// while(start<total){
  // doSpider(start);
  // start+=25;

// }