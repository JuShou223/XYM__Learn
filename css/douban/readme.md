- css 命名词汇
  feeds (页面加载) feed-item
  feeds *-item content
- html结构及布局
  从上到下，从左到右， 语义性和功能性
  > 1. 套路
     content>h3+p
    2. 使用盒子
    3. a 作为盒子，在移动端是很正常的。
       display: block 
    4. 盒子模型
    文字line-height padding maigin 
    5. 文字截断
    tmall 商铺信息是由商家填的，它的高度，不被限制，
    display:-webkit-box; 新的盒子模型 ，像flex 来划分父元素的空间。
    overflow: hidden; 超出则隐藏
    -webkit-line-clamp 行数
    -webkit-box-orient:vertical 三点

    - 浮动 float right | left
    离开文档流
    在一个盒子里，将要浮动的盒子写在最前面,左右布局
    在flex 布局之前，我们一般借助于float 来布局
    图片的宽高用百分比，自适应的需求
    高度怎么做 ？ div padding-top:自身的宽度来做比例 正方形
    自适应设备里盒子的等比例设置 width 百分比， 高度用padding-top