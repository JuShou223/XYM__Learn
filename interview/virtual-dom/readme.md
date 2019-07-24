vue react mvvm

不去做DOM这一非常耗费性能的事

不用去直接操作DOM, 去操作data ... 将mvvm的修改(DOM片段) 更新到页面上去
SPA -> PWA Application

DOM 树
ComponentA render(Jsx) replaceChild() -> DOM树上

性能？ 组件对应的树， 遍历
  Tag node
  属性发生了改变 style
  文本改变 innerText
  append listen
  childTag

oldState oldTree

newState newTree? virtual DOM

最后一站DOM 树
oldState Dom树 描述 JS 版本的DOM树

DOM 树 内存中有js Virtual DOM

elementObj => 新的virtualDOM
diff 补丁 补上DOM

[{value: 9, index:2}]
- 遍历
先序深度优先遍历
- patches [] dom diff
- 给 DOM 打补丁