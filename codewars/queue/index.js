function permutations(string) {
  var str=[],index=0;
  string=string.split("");
  round(string,index,str);
  console.log(str);
}

function round(string, index, str) {
	var need_apply = new Array();
	need_apply.push(string[index]);
	for(var i = 0; i < str.length; i++) {
		need_apply.push(str[i] + string[index]);
  }
  console.log(str);
  str.push.apply(str, need_apply);
  console.log(need_apply);
  
  // console.log(index + 1 >= string.length);
	if(index + 1 >= string.length) { console.log("1",index); return str;}
	else {console.log("2",index);return round(string, index + 1, str);}
}
permutations('abcd');