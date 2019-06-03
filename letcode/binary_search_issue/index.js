function bianry_search(arr,data) {
  // 不停的去二分，停下来？没得再分 min>max
  let min=0,max=arr.length-1,mid;
  while (min<=max) {
    mid=parseInt((min+max)/2)
    // mid=min+parseInt((max-min)/2);
    // mid= min + ((max-min)>>1);
    if(arr[mid]>data){
      max=mid-1;
    }
    else if(arr[mid]<data){
      min=mid+1;
    }
    else {
      return mid;
    }
  }
  return -1;
}
// console.log(bianry_search(sort([1,3,4,6,8,9,10,12]),2))
let arr=[];
for(let i=0;i<75209227;i++){
  arr.push(i);
}
console.log(bianry_search(arr,2019));