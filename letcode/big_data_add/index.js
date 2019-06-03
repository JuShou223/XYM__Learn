var str1 = '000123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222';
var str2 = '99958321098765432102222223333211112222222222222222222';
function addTwoNumbers(str1,str2){
  // 表达清楚了 字符串 不能相加
  // 新的数据结构来打理他 [] 存储每一位的相加;
  let carry=0,//是否进位
      l1=str1.length,//数的长度
      l2=str2.length,//数的长度
      arr=[] ;//位相加的存储
  var max=Math.max(l1,l2);//最长的位数
  for(let i=l1-1,j=l2-1,n=max-1;n>=0;i--,j--,n--){
      var sum =(i>=0?+str1[i]:0)+(j>=0?+str2[j]:0)+carry;
      carry=sum>=10?1:0;
      arr.push(sum%10);
  }
  if(carry>0){
    arr.push(carry)
  }
  return arr.reverse().join("");
  // var n1 = a.split(""), n2 = b.split(""), carry = "", num = "", result = [];
  // while (n1.length != 0 || n2.length != 0) {
  //   num = (parseInt(carry === "" ? "0" : carry) + parseInt(n1.length != 0 ? n1.pop() : "0") + parseInt(n2.length != 0 ? n2.pop() : "0")).toString();
  //   result.unshift(num.slice(num.length - 1));
  //   carry = num.length > 1 ? num.slice(0, 1) : "";
  // }
  // if (carry != '') {
  //   result.unshift(carry);
  // }
  // while (result[0] === "0") {
  //   result.shift();
  // }
  // return result.join("");
}
console.log(addTwoNumbers(str1,str2))