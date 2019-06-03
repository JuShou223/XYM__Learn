function parseInt(string) {
  // TODO: it's your task now
  var arrs = string.split(" ").filter(e => e != "and");
  var ws=[1],result=[];
  arrs=arrs.map(e=>change(e));
  console.log(arrs);
  while(arrs.length!=0){
    if(!/^100/.test(arrs[0])){
      ws.push(...arrs.filter(e=>/^100/.test(e)));
      for(let j=ws.length-1;j>0;j--){
        if(ws[j]<=ws[j-1]){
          ws.pop();
        }
      }
      for(let i=0;i<ws.length;i++){
        arrs[0]=arrs[0]*ws[i];
      }
      result.push(arrs.shift());
      while(/^100/.test(arrs[0])){
        arrs.shift();
      }
      ws=[1];
    }else{
      result.push(arrs.shift());
    }
  }
  while (result.length!=1){
    result[0]=result.shift()+result.shift();
  }
  console.log(result[0]);
}
function change(arr) {
  if (arr.split("-").length != 1) {
    console.log(arr.split("-")[0] , arr.split("-")[1]);
    arr = change(arr.split("-")[0]) + change(arr.split("-")[1]);
    console.log(arr);
  }
  else {
    switch (arr) {
      case "zero":
        arr = 0;
        break;
      case "one":
        arr = 1;
        break;
      case "two":
        arr = 2;
        break;
      case "three":
        arr = 3;
        break;
      case "four":
        arr = 4;
        break;
      case "five":
        arr = 5;
        break;
      case "six":
        arr = 6;
        break;
      case "seven":
        arr = 7;
        break;
      case "eight":
        arr = 8;
        break;
      case "nine":
        arr = 9;
        break;
      case "ten":
        arr = 10;
        break;
      case "eleven":
        arr = 11;
        break;
      case "twelve":
        arr = 12;
        break;
      case "thirteen":
        arr = 13;
        break;
      case "fourteen":
        arr = 14;
        break;
      case "fifteen":
        arr = 15;
        break;
      case "sixteen":
        arr = 16;
        break;
      case "seventeen":
        arr = 17;
        break;
      case "eighteen":
        arr = 18;
        break;
      case "nineteen":
        arr = 19;
        break;
      case "twenty":
        arr = 20;
        break;
      case "thirty":
        arr = 30;
        break;
      case "forty":
        arr = 40;
        break;
      case "fifty":
        arr = 50;
        break;
      case "sixty":
        arr = 60;
        break;
      case "seventy":
        arr = 70;
        break;
      case "eighty":
        arr = 80;
        break;
      case "ninety":
        arr = 90;
        break;
      case "hundred":
        arr = 100;
        break;
      case "thousand":
        arr = 1000;
        break;
      case "million":
        arr = 1000000;
        break;
    }
  }
  return arr;
}
parseInt("eight hundred thirty-two thousand four hundred and forty-six");