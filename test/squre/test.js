function toPostfix (infix) {
  // Convert infix to postfix here, and return result.
  var operator=[],s="";
  infix=infix.split("");
  console.log(infix)
  while(infix.length!=0){
    if (/^[0-9]+$/.test(infix[0])){
     s=s+infix.shift();
    }
    else{
      if(operator.length===0 || /[\(\^]/.test(infix[0])){
        operator.push(infix.shift());
      }
      else{
          if(/\(/.test(operator[operator.length-1])){
            operator.push(infix.shift());
          }
          else{
            if(/[\+\-]/.test(infix[0])){
              s=s+operator.pop();
            }
            if(/[\*\/]/.test(infix[0])){
              if(/[\*\/\^]/.test(operator[operator.length-1])){
                s=s+operator.pop();
              }
              else{
                operator.push(infix.shift()); 
              }
            }
            if(/\)/.test(infix[0])){
              while(!/\(/.test(operator[operator.length-1])){
                s=s+operator.pop();
              }
              operator.pop();
              infix.shift();
            }
          }
      }
    }
  }
  while(operator.length!=0){
    s=s+operator.pop();
  }
  return s;
}
toPostfix("5+(6-3*2)*9+3^(7-1)");