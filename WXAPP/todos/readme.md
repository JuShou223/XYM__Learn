- wxml 只是模板。 不像html5, 看到的时page , 不是wxml, 而是编译过后的wxml, js data 拿去模板生成 page view
- 登录 登陆后
  页面不是静态的 ， dom ajax
  页面的动态 是通过 Mvvm 来实现的 状态
- wxml {{}} 或者指令 data 加相应的 数据项就好
  this.setData({}) 设置数据 并且带来数据相应部分UI的重新渲染
  数据驱动界面 响应式编程
  跟dom say goodbye
  MVVM 数据决定一切
  数据状态 === 界面状态
  登陆状态 hasUserInfo
  userinfo:{} 数据驱动界面
  界面在某一刻只有一个状态
  userInfo:{} 数据驱动界面

- {{}}不只是数据输出，里面是js运行环境
  {{isExists ? "" : "hide"}}