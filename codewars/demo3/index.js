// const num=['c','a','z','y'];
// const nums2=[1,10,2,28];
// console.log(nums2.sort(function(a,b){
//   return a-b>0;
//   // console.log(a,b,'--------');
// }));
const people=[
  {
    age:46, name:'roger2'
  },
  {
    age:99, name:'roger4'
  },
  {
    age:26, name:'roger1'
  },
  {
    age:74, name:'roger3'
  },
]
var orderPeople=function(people){
  return people.sort((a,b)=>{
    return b.age-a.age;
  })
}
console.log(orderPeople(people));