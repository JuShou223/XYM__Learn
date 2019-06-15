const EventEmitter = require('events')
class Ev extends EventEmitter{};
const ev = new Ev();
//  绑定事件 search
['search'].forEach(key=>{
    ev.on(key,async function(...args){
        console.log(args)
        // 把所有剩余的函数参数整理位数组 

        const fn = require(`./lib/${key}`)
        const res = await fn(...args)
        console.log('res 执行的结果',res)
        ev.emit('handle',key,res,...args)
    })
})
// ev.on('handle',function(key,res,...args){
//     switch(key){
//         case 'search':
//             return
//     }
// })
function main(arg) {

    if(arg || arg.length){
        arg = arg[2]
    }
    ev.emit('search',arg)
}
main(process.argv)