// defineProperty
// descriptor 拿到了 add 这个方法的 descriptor
// Object.defineProperty(Base,'add',{
//     value: ()=>{}
// })
// function log(target, name, descriptor){
//     console.log(target,name)
//     const method = descriptor.value;
//     descriptor.value = function(...args){
//         console.log('log type add')
//         return method(...args);
//     }
// }
function log(logType){
    return function(target, name, descriptor){
        console.log(target,name)
        const method = descriptor.value;
        descriptor.value = function(...args){
            console.log('log type' + logType)
            return method(...args);
        }
    }
}
//  修饰符是一个函数
//  @log('add') 也得是一个函数
class Base{
    @log('add') add(a,b){
        console.log('log type add')
        return a+b
    }
    @log('divide') divide(a,b){
        return a/b
    }
}

const base = new Base()
console.log('add',base.add(1,2))
console.log('divide',base.divide(1,2))

// 加日志
// 有了更好 没有也行的 装饰器
export default base