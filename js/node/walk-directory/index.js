const fs = require('fs');
const files = [];
function walk(path) {
  fs.readdirSync(path).forEach(file => {
    // console.log(file,'+++');
    const newPath=path+'/'+file;
    const stat=fs.statSync(newPath);
    if (stat.isFile()) {
      if( /\.js$/.test(file)){
      // console.log(/\.js$/.test(fi1le));
      files.push(file);
    }
    } else if(stat.isDirectory()) {
      // console.log("isdirectory");
      walk(newPath);
    }
  });
  // fs.readdir(path,function(error,files){
  //   if(error){
  //     console.log(error);
  //     return;
  //   }
  //   console.log(files);
  // })
}
walk('./src');
console.log(files, '----------');