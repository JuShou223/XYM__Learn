// function findsort(str){

//   return str.split(' ').map(function(str){return str.Length;}).sort(function(a,b){
//     return a-b;
//   })[0];
// }

const findsort=str=>str.split(' ').map(w=>w.length).sort((a,b)=>a-b)[0];
// function findsort(str){
//   // return Math.min(...(str.split(' ').map(w=>w.length)))
//   return Math.min.apply(null,(str.split(' ').map(w=>w.length)))
// }
console.log(findsort('abc abcd jjjj a'));