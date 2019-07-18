- 组件状态 兄弟 父子 多于代码
大型项目 多组件多个跨路由组件 共享状态
共享状态
- 状态的管理 协同
dispatch(action{type:'',payload:''}) -> reducer(无差别的状态计算 switch case 协同) -> state

1. head body 两个函数组件 共享了单一的全局状态书

2. 状态全局 可以被随意的修改

3. dispatch 使状态的改变可控， 任何改变， 都可以再dispatch中找到源头 {type: '',payload}

4. 通知发生了状态改变 oldstate ,newstate
使用新的状态吧 subscribe