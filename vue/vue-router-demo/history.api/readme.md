- 理论支持
    SPA 单页应用开发，导航不动 footer也不动 中间body 是切换的 页面不需要刷新的
    传统web开发中 空白（新的web请求）页（get）
    白一下 加载一下 这个体验很糟糕
    对应路由 把相应的组件切换出来 像app一样

- jquery on 事件api
    $(document).on(event_type,child_node,fn)
没有前端路由 但是可以通过后端路由 
(restful,mvc,router)

- 前端路由两种做法 hashtag # history pushState api url path改变了 但是没有改变页面

state 这次跳转url 对应的状态数据
title 