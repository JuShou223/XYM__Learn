// 面向对象
// 实现了同样的接口 ， 互换策略 ， 策略模式
var Bounce=function(salary){
  this.salary=salary;
}
var PerformanceS=function(){}
var PerformanceA=function(){}
var PerformanceB=function(){}
var PerformanceC=function(){}
PerformanceS.prototype.calculate=function(salary){
  return salary*5;
}
PerformanceA.prototype.calculate=function(salary){
  return salary*3;
}
PerformanceB.prototype.calculate=function(salary){
  return salary*2;
}
PerformanceC.prototype.calculate=function(salary){
  return salary*1;
}
Bounce.prototype.setStrategy=function(strategy){
  this.strategy=strategy;
}
Bounce.prototype.getBounce=function(){
  return this.strategy.calculate(this.salary);
}
const bounce=new Bounce(10000);
const bounce2=new Bounce(5000);
bounce2.setStrategy(new PerformanceA());
bounce.setStrategy(new PerformanceS());
console.log(bounce.getBounce());
console.log(bounce2.getBounce());