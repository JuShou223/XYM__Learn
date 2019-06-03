function nextBigger(n) {
  //your code here
  n = n.toString().split("");
  var left = [], right = [], temp,n1=[];
  for(let m in n){
    n1[m]=n[m];
  }
  if (n.length === 1) {
    return -1;
  }
  else {
    f:
    for (let i = n.length - 2; i >= 0; i--) {
      left = n.slice(0, i + 1);
      right = n.slice(i + 1);
      right.sort((a, b) => a - b);
      for (let j = 0; j < right.length; j++) {
        if (left[left.length - 1] < right[j]) {
          temp = left[left.length - 1];
          left[left.length - 1] = right[j];
          right[j] = temp;
          n = left.concat(right);
          break f;
        }
      }
    }
    if(parseInt(n.join(""))===parseInt(n1.join(""))){
      return -1;
    }else
    return parseInt(n.join(""));
  }
}
console.log(nextBigger(222));