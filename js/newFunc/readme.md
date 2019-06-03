new js关键字
用于创建一个用户定义的对象类型的实例
1. 构造函数上有prototype 属性，值为对象
2. 类 构造函数 + prototype原型对象
3. typeof 类型 instanceof 实例

new 结果是一个新的对象，具有构造函数里的属性
2.对象要有原型对象 指向构造函数的原型对象

1. 空对象来了 new Object()
2. 将函数里的属性交给空对象
   constructor 本身就是为他人服务的实例服务? 还是为任何对象服务，都可以
   函数内部的this 是由函数运行时的方式决定的
   new Otaku()
   Otaku.call(obj,...)
   call,apply 可以指定函数运行时this,手动指向obj

3. constructor 构造函数 拥有 prototype属性，
在上面添加属性和方法，可以被实例引用到。
对象上有__proto__属性 这个对象的原型对象是谁？对象也可以拿到原型对象上的属性或方法

JS的面向对象是基于原型的

对象？方法和属性的集合
构造函数可以给些属性，
其他的通过原型对象来拿到
obj.__proto__=Otaku.prototype
  object顶端