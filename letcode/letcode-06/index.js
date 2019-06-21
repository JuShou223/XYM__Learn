var convert = function (s, numRows) {
    let arr = [],
        arr2 = [],
        start = 0,
        row = 0;
        if(numRows===1){
            return s
        }
    while (start < s.length) {
        let newArr = []
        for (let i = 0; i < numRows; i++) {
            if(row % (numRows - 1) ===0 ){
                if(start<s.length){
                    newArr.push(s.slice(start, start + 1))
                    start=start+1
                }else{
                    newArr.push(' ')
                }
            }else{
                if (i === (numRows - 1) - row % (numRows - 1)) {
                    newArr.push(s.slice(start, start + 1))
                    start = start + 1
                } else {
                    newArr.push(' ')
                }
            }
        }
        arr.push(newArr)
        row++
    }
    for(let r = 0; r < numRows; r++){
        let newArr = []
        for(let c = 0; c < arr.length;c++){
            newArr.push(arr[c][r])
        }
        arr2.push(newArr)
    }
    console.log(arr)
    return arr2.map(e=> e.filter(e=>e!=' ').join('')).join('')
};
console.log(convert("A", 1))