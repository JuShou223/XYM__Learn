const Koa = require('koa')
// 支持哪些模板引擎
const views = require('koa-views')
const ejs = require('ejs')
const path = require('path')
const app = new Koa()
const user = {
    name: '徐帅哥',
    posts:[
        {
            id: 0,
            title: '小程序踩坑指南'
        },
        {
            id: 1,
            title: 'vue.js 浅析组件数据传递'
        }
    ]  
}
const postsDetail = [
    {
        id: 0,
        content: 'wechat App'
    },
    {
        id:1,
        content: 'react 表示不服'
    }
]
// /user 个人主页面 
// /posts 文章详情 
app.use(
    views(path.join(__dirname, './views'), {
      extension: 'ejs'
    })
  )
app.use(async (ctx) => {
//  区分 页面 
    if(ctx.path == '/user'){
        await ctx.render('user',{user})
    }
    else if(ctx.path == '/posts'){
        const {id} = ctx.query;
        const post = postsDetail.find(postItem => postItem.id == id)
        await ctx.render('posts',{post})
    }
    else{
        ctx.body = `无法处理`
    }
// console.log(ctx.path)
})

app.listen(8080, () => {
    console.log(8080)
})