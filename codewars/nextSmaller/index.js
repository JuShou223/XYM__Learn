function nextSmaller(n) {
  let arr=n.toString().split("").map(e=>+e),
      left=[],right=[],temp=0;
  arr.sort((a,b)=>a-b);
  if(+arr.join("")===n){
    return -1;
  }else{
    arr=n.toString().split("").map(e=>+e);
    console.log(arr);
    f:
    for(let i=arr.length-1;i>0;i--){
      left=arr.slice(0,i);
      
      right=arr.slice(i);
      console.log(left,right.length)
      for(let j=right.length-1;j>=-1;j--){
        console.log(right[j],left[left.length-1])
        if(right[j]<left[left.length-1]){
          temp=right[j];
          right[j]=left[left.length-1];
          left[left.length-1]=temp;
          right.sort((a,b)=>a-b);
          arr=left.concat(right)
          break f;
        }
      }
    }
    return parseInt(arr.join(""));
  }
}
console.log(nextSmaller(231))