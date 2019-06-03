function orderWeight(string) {
  // your code
  return string.split(" ").map(e=>e.split("").map(e=>+e)).sort((a,b)=>a.reduce(add)-b.reduce(add)==0?a.join("")-b.join(""):a.reduce(add)-b.reduce(add)).map(e=>e.join("")).join(" ")
}
function add(a,b){
  return a+b;
}
    console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))
