function maopao(arr){
    let n=1;
    for(let i =0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i])
            {
                [arr[i],arr[j]]=[arr[j],arr[i]];
                console.log(arr);
                n++;
            }
            
        }
    }
    console.log(n);
}
var arr=[8,1,3,2,10,4,5,6,7,9,20,14,16,18,12,13,19,11,15,17];
maopao(arr);
// console.log(arr);
