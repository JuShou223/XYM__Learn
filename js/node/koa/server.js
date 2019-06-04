const Koa = require('koa')

const app = new Koa()

const admin = new Koa()
// http.createserver
// context req +res 
app.use(async (ctx,next)=>{
    console.log(1)
    await next()
    console.log(2)
})
app.use(async (ctx,next)=>{
    console.log(5)
    await next()
    console.log(4)

})
app.use(async (ctx)=>{
    ctx.body = `<strong>tj np</storng>`
    console.log(3)
})


// http.listen 语法糖
app.listen(8080,()=>{
    console.log('8080')
})