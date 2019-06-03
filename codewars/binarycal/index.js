function multipleOf3Regex(string){
  return /^[01]+$/.test(string)?(parseInt(string,2)%3===0?true:false):false;
};
console.log(multipleOf3Regex("01"));
