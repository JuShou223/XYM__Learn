function infomation({name,sex,money,birthday,color,likes,follow,age}){
  return `${name} ${sex} ${money} ${birthday} ${color} ${likes} ${follow} ${age}`
}
let user={
  name:'LiDan',
  sex:'girl',
  money:'1000000000',
  birthday:'5-22',
  color:'green',
  likes:'video',
  follow:'zhoujielun',
  age:16
}
console.log(infomation(user))