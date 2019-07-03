## Switch

Switch 只显示符合 path 的第一个组件
不加 Switch 符合 path 的所有组件
https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1562038652563&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1?jsonpCallback=callback

## setState

1. 异步的
2. 合并

## jsonp

const OPTION ={
    param: 'jsonpCallback',
    prefix: 'callback'
}
?jsonpCallback=callback
xxx 可以固定

每次请求的 callback xxx 都是不一样的 随机值
callback_1
callback_2
callback_3


## LazyLoad

监听原生的滚动
css3 transform