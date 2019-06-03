function cal(string){
  var number=[],operator=[],str=[];
  str=string.split(" ");
  while(str.length!=0){
    if(/^[0-9]+$/.test(str[0])){
      console.log("1");
      number.push(parseInt(str.shift()));
    }
    else if(/^[\*\/\+\-]$/.test(str[0])){
      console.log("2");
      if(/^[\*\/]$/.test(operator[operator.length-1])){
        console.log("3");
        if(/^\*$/.test(operator[operator.length-1])){
          console.log("4");
          number.push(number.pop()*number.pop());
        }
        else{
          console.log("5");
          number.push(1/number.pop()*number.pop());
        }
        operator.pop();
      }
      else if(/^[\+\-]$/.test(operator[operator.length-1])){
        console.log("6");
        if(/^[\+\-]$/.test(str[0])){
          console.log("7");
          if(/^\+$/.test(operator[operator.length-1])){
            console.log("8");
            number.push(number.pop()+number.pop());
          }else if(/^\-$/.test(operator[operator.length-1])){
            console.log("9");
            number.push(-number.pop()+number.pop());
          }
          operator.pop();
        }
        else{
          operator.push(str.shift());
        }   
      }
      else{
        console.log("10");
      operator.push(str.shift());
      }
    }
    else if(/^\($/.test(str[0])){
      operator.push(str.shift());
    }
    else if(/^\)$/.test(str[0])){
      while(!/^[\(]$/.test(operator[operator.length-1])){
        if(/^\*$/.test(operator[operator.length-1])){
          number.push(number.pop()*number.pop());
        }
        else if(/^\/$/.test(operator[operator.length-1])){
          number.push(1/number.pop()*number.pop());
        }
        else if(/^\+$/.test(operator[operator.length-1])){
          number.push(number.pop()+number.pop());
        }
        else if(/^\-$/.test(operator[operator.length-1])){
          number.push(-number.pop()+number.pop());
        }
        operator.pop();
      }
      operator.pop();
      str.shift();
    }
    console.log("number",number);
    console.log("operator",operator);
    if(str.length===0){
      while(operator.length!=0){
        if(/^\*$/.test(operator[operator.length-1])){
          number.push(number.pop()*number.pop());
        }
        else if(/^\/$/.test(operator[operator.length-1])){
          number.push(1/number.pop()*number.pop());
        }
        else if(/^\+$/.test(operator[operator.length-1])){
          number.push(number.pop()+number.pop());
        }
        else if(/^\-$/.test(operator[operator.length-1])){
          number.push(-number.pop()+number.pop());
        }
        operator.pop();
      }
    }
  }
   console.log(number[0]);
}
cal("1 + 24 / ( 6 + 6 ) * 5 - 2");