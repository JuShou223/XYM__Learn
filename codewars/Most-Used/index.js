function topThreeWords(text) {
  var arr=text.split(" ").filter(e=>/[a-z|A-Z]/.test(e)).map(e=>{e=e.toLowerCase();return e.split("").filter(e1=>{return /[a-z|\']/.test(e1)}).join("")}).sort(),newArr=[],result=[];
  console.log(arr);
  for(let i=0;i<arr.length;i++){
    result.push(arr[i]);
    if(arr[i]!==arr[i+1]){
      newArr.push(result);
      result=[];
    }
  }
  return newArr.sort((a,b)=>b.length-a.length).map(e=>e[0]).slice(0,3);
}
console.log(topThreeWords("a a a A b  c c  d d d d  e e e e e"));