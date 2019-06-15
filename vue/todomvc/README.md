- el: #root 根挂载结点
- App component + vue-router + vuex 混合一起的应用

new Vue({
    el: '#app',
    render: h=>h(App)
})

- vue 的难点是 数据管理 
组件状态 data(){}
两兄弟组件共享状态 登录功能 通过props 传递过去
应用状态?
当页面上多个组件间要共享状态时 
将共享状态 放置在这些组件的共同的父组件data管理
状态唯一 放在一个地方 （共同的父组件） 方便管理
如果不统一 状态可能不同步
v-on: increment = "incrementCount"
再通过 props 
this.$emit('increment')

麻烦 找父节点麻烦 this.$emit()
很多状态要共享 很多组件 组件关系很复杂
App 全局数据管理
