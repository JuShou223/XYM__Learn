函数的节流及防抖

阿里js 面试第一题
- 搜索建议
  goole suggest
  input value => ajax
  有问题的 caikunxu
  分词 灭霸 电文液
  keyup 没有必要每次都去触发ajax 太浪费性能
  过滤一些无效的请求 打完一个单词再去搜索
  word word js 打完一个单词后再去搜索

- 防抖的关键
  频繁输入时，怎么减少请求呢?
  debounce(ajax,500) 生成一个函数，控制执行，停止输入时，执行那么一次 打完一个单词后有意识的停一下
  setTimeout delay 之后一定会执行一次。
  在规定时间内 被clear 掉
  func.id =setTimeout(function(){func()},delay)
  句柄，不重复的数字，func 函数是对象 id属性
  前一次加了一个setTimeout 下一次再清除