function sumOfSquares(n) {
  var count = 0, arr = [], b = n;
  for (let i = Math.floor(Math.pow(n, 0.5)); i > 0; i--) {
    b=n;
    count=0;
    count++;
    b=b-Math.pow(i,2);
    console.log(b);
    while (b != 0) {
      count++;
      b =b -Math.pow(Math.floor(Math.pow(b, 0.5)), 2);
    }arr.push(count);
  }
  console.log(arr);
}
sumOfSquares(15);