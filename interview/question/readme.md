# q1 js全局执行为我们创建了两个东西 全局对象和this关键字
    new 的实现原理:
        1. 创建一个空对像 构造函数的this指向这个空对象
        2. 这个新对象被执行[原型]连接
        3. 执行这个构造函数属性和方法添加到this 这个引用的对象中
        4. 如果构造函数没有返回其他对象， 那么就返回这个this 及创建的新对象，否则，返回构造函数中返回的对象

# q4 闭包
 闭包的原理： 有权限返回其他函数的作用域的函数
 1. 阻止作用域被js 垃圾回收
 2. 创建私有变量
 3. 创建块级作用域

# q5 数组去重
    Set indexOf includes map reduce