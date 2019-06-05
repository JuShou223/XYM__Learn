const Koa = require('koa')
const Router = require('koa-router')
const koaSession = require('koa-session')
const staticServer = require('koa-static')
const path = require('path')
const app = new Koa()
const router = new Router()
const session_signed_key = ['secret']
const sessionConfig = {
    key: 'sid', //放到cookie 里面 name
    maxAge: 100000
}

app.keys = session_signed_key

app.use(koaSession(sessionConfig,app))
app.use(staticServer(path.join(__dirname, './static')))

// router.get('/',async (ctx) => {
//     ctx.type = 'html'
//     ctx.cookies.set('fromserver1','fromserver1',{
//         maxAge: 10000
//     })

//     ctx.cookies.set('user','user',{
//         path:'/user',
//     })
    
//     ctx.cookies.set('user-abc','user-abc',{
//         path:'/user/abc',
//         httpOnly: false
//     })

//     ctx.cookies.set('post','post',{
//         path:'/post',
//     })

//     ctx.body = `<a href="/user">->USER</a>
//     <a href="/post">->POST</a>`
// })

router.get('/user',async (ctx)=>{
    ctx.body = `<h1>USEPAGE</h1>
                <a href="/user/abc">ABC</a>
    `
})

router.get('/post',async (ctx)=>{
    ctx.body = `<h1>POSTPAGE</h1>`
})

router.get('/user/abc',(ctx)=>{
    ctx.body = `<h1>/user/abc</h1>`
})

router.get('/login', async (ctx) => {
    const {name, password} = ctx.query
    if (name === 'test' && password === 'test'){
        // 写到session里面 
        ctx.session.login = true
        ctx.type = 'html'
        ctx.body = '登录成功' + `<a href="/testLogin">测试登录</a>`
    } else {
        ctx.session.listen = false
        ctx.body = '登陆失败'
    }
})

router.get('/testLogin', async (ctx) => {
    if (ctx.session.login){
        ctx.body = '成功登录'
    } else {
        ctx.redirect('/')
    }
})
app.use(router.routes())

app.listen(7878,()=>{
    console.log('srver is running at 7878')
})