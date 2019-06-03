## 浮动会导致父容器塌陷，会影响页面布局
- 清除浮动的方法 (!都在父容器上执行操作)
1. 额外标签法：在父元素底部加上一行代码<div style="clear:left"></div>
2. 在父元素css中加上
div.content{
  float:left;
}
3. 使用css中的伪类after，给父元素div添加一个clearFix的class类
.clearFix::after{
  content:'';
  display:block;
  clear:both;
}
4. 利用BFC简称块级格式化上下文的效果来弥补父容器的高度塌陷
div.content{
  overflow:hidden;auto;scroll;
}
5. 尼古拉斯大师方法，吧父容器的display设置为table，可以创建一个匿名表格单元，直接触发BFC效果(最不推荐)
.content{
  display:table;}