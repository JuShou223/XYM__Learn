//  管理router 
const Router = require('koa-router')
const router = new Router()
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
router.get('/user',async (ctx) => {
    await ctx.render('user',{user})
})
router.get('/posts',async (ctx) => {
    const {id} = ctx.query;
    const post = postsDetail.find(postItem => postItem.id == id)
    await ctx.render('posts',{post})
})
// 浏览器地址栏
router.get('/create',async (ctx)=>{
    await ctx.render('create',{})
})
router.post('/create',async (ctx)=>{
    console.log(ctx.request.body)
    const {title,content} = ctx.request.body;
    let id = Date.now()
    user.posts.push({
        id,
        title
    })
    postsDetail.push({
        id,
        content
    })
    ctx.redirect('/user')
})
module.exports = router;
