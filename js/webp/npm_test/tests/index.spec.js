const expect = require("chai").expect
const {add}=require('../index')
describe('test',()=>{
  // 举出各种例子，方方面面
  it('两数相加应该返回集合',()=>{
    expect(add(0,1)).to.equal(1);
    expect(add(0,2)).to.equal(2);
  })
  it('should return NaN when param invalid',()=>{
    expect(isNaN(add(0,undefined))).to.equal(true)
    expect(isNaN(add(null,undefined))).to.equal(true)
    expect(isNaN(add({},undefined))).to.equal(true)
    expect(isNaN(add(undefined,undefined))).to.equal(true)
  })
  it('两个字符串的数值相加，应该返回器转换类型后的和',()=>{
    expect(add('11','22')).to.equal(33)
  })
})