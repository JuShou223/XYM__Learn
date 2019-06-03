function Calculator(string) {
  var number = [], operator = [], str = [] , i=0;
  string=string.split(" ").join("").split("");
  str = [].concat(string);
  // console.log(string);
  while (str.length != 0) {
    // 如果是数字，就放入数字栈
    if (/^[0-9]$/.test(str[0])) {
      // console.log(1);
      number.push(str.shift());
      i++;
      // 当数字是多位数
      while (/^[0-9]$/.test(str[0])) {
        // console.log(2);
        number.push(number.pop() + str.shift());
        i++;
      }
    }
    else if (/^[\*\/\+\-]$/.test(str[0])) {
      // console.log(3);
      if (/^[n\*\/\.]$/.test(operator[operator.length - 1])) {
        // console.log(4);
        number = op(number, operator[operator.length - 1]);
        operator.pop();
      }
      else if (/^[\+\-]$/.test(operator[operator.length - 1])) {
        // console.log(5);
        if (/^[\+\-]$/.test(str[0])) {
          // console.log(6);
          number = op(number, operator[operator.length - 1]);
          operator.pop(7);
        }
        else {
          // console.log(8);
          if(str[1]==="-"){
            // console.log(11);
            operator.push(str.shift());
            i++;
            operator.push("n");
            str.shift();
            i++;
          }else{
          operator.push(str.shift());
          i++;}
        }
      }
      else {
        // console.log(9);
        if (str[0] === "-" && (number.length===0 || string[i-1]==="(")) {
          // console.log(10);
          operator.push("n");
          str.shift();
          i++;
        }
        else if(str[1]==="-"){
          // console.log(11);
          operator.push(str.shift());
          i++;
          operator.push("n");
          str.shift();
          i++;
        }
        else{
          // console.log(12);
          operator.push(str.shift());
          i++;
        }
      }
    }
    else if (/^[\(\.]$/.test(str[0])) {
      // console.log(13);
      operator.push(str.shift());
      i++;
    }
    else if (/^\)$/.test(str[0])) {
      // console.log(14);
      while (!/^\($/.test(operator[operator.length - 1])) {
        // console.log(15);
        number = op(number, operator[operator.length - 1]);
        operator.pop();
      }
      operator.pop();
      str.shift();
      i++;
    }
    // console.log("number", number);
    // console.log("operator", operator);
    // console.log("str", str);
    if (str.length === 0) {
      // console.log(16);
      while (operator.length != 0) {
        // console.log(17);
        number = op(number, operator[operator.length - 1]);
        operator.pop();
      }
    }
  }
  return number[0];
};
function op(number, operator) {
  if (operator === "n") {
    number.push((-parseFloat(number.pop())).toString());
  }
  else {
    var b = number.pop();
    var a = number.pop();
    // console.log("'" + a, operator, b + "'");
    switch (operator) {
      case ".":
        number.push(a + "." + b);
        break;
      case "+":
        number.push((parseFloat(a) + parseFloat(b)).toFixed(20).toString());
        break;
      case "-":
        number.push((parseFloat(a) - parseFloat(b)).toFixed(20).toString());
        break;
      case "*":
        number.push((parseFloat(a) * parseFloat(b)).toFixed(20).toString());
        break;
      case "/":
        number.push((parseFloat(a) / parseFloat(b)).toFixed(20).toString());
        break;
    }
  }
  return number;
}
console.log(parseFloat(Calculator('(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11)')));