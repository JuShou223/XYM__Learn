function sumStrings(a, b) {
  var n1 = a.split(""), n2 = b.split(""), extra = "", num = "", result = [];
  while (n1.length != 0 || n2.length != 0) {
    num = (parseInt(extra === "" ? "0" : extra) + parseInt(n1.length != 0 ? n1.pop() : "0") + parseInt(n2.length != 0 ? n2.pop() : "0")).toString();
    result.unshift(num.slice(num.length - 1));
    extra = num.length > 1 ? num.slice(0, 1) : "";
  }
  if (extra != '') {
    result.unshift(extra);
  }
  while (result[0] === "0") {
    result.shift();
  }
  return result.join("");
}

console.log(sumStrings("712569312664357328695151392", "8100824045303269669937"));
console.log("712577413488402631964821329");