var reverse = function(x) {
    let max = Math.pow(2,31)-1;
    let min = -Math.pow(2,31)
    let operator = '+'
    if(x<0){
        operator = '-'
        x = -x;
    }
    x=parseInt(operator+String(x).split('').reverse().join(''))
    return (x > max || x<min) ? 0 : x;
};