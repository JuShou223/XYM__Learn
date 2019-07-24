function Person(name) {
    this.name = name
}

function Student () {

}
Student.prototype = Person.prototype
Student.prototype.constructor = Student
// ------------构造函数不需要返回值的，如果return 的值为非对象或null时则忽略返回值，如果是对象则返回该对象
let p = new Student('wn')
// console.log(p)
// var foo = {}, 
//     F = function() {};
Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(F.a)
// 
// for(var i =0;i<10;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 0);
// }

// Array.prototype.method = function () {
//     console.log('a')
// }
let obj = {a:1,b:2}
for (let index in obj) {
    console.log(index)
}
// index 为索引是字符串加数字， 不能进行几何运算
// 遍历的顺序有可能不是按照实际数组的内部顺序
// 使用for 会遍历实际数组的所有可枚举属性，包括原型
// for in 适合遍历对象
// for of 遍历数组的元素 遍历的只是数组的元素不包括数组的原型属性和索引
// let 每次循环生成一个封闭的块级作用域和setTimeout绑定，var 会覆盖上一次的作用域

let gArr = [1, [2, 3], 4, 5, [5, 6,[1,3]]]

// function outputArr(arr) {
//     var res =[]
//     for(var i = 0; i< arr.length; i++){
//         if(Array.isArray(arr[i])){
//             res= res.concat(outputArr(arr[i]))
//         }else{
//             res.push(arr[i])
//         }
//     }
//     return res
// }
function outputArr(arr){
    return arr.reduce((pre,item)=>{
        return pre.concat(Array.isArray(item) ? outputArr(item) : item)
    },[])
}
console.log(outputArr(gArr))