function mix(s1, s2) {
  // your code
  var s1Arr = [], s2Arr = [], mix = [], temp = [];
  // console.log(s1Arr);
  s1Arr = fixed(s1);
  s2Arr = fixed(s2);
  console.log(s1Arr);
  console.log(s2Arr);

  while (s1Arr.length != 0 || s2Arr.length != 0) {
    if (s1Arr.length === 0 && s2Arr.length != 0) {
      if (temp.length != 0) {
        if (s2Arr[0].length+2 < temp[0].length) {
          while (temp.length != 0) {
            mix.push(temp.shift());
          }
        }
      }
      s2Arr[0] = "2:" + s2Arr[0];
      mix.push(s2Arr.shift());
    }
    else if (s2Arr.length === 0 && s1Arr.length != 0) {
      if (temp.length != 0) {
        if (s1Arr[0].length+2 < temp[0].length) {
          while (temp.length != 0) {
            mix.push(temp.shift());
          }
        }
      }
        s1Arr[0] = "1:" + s1Arr[0];
        mix.push(s1Arr.shift());
      }
      else if (s1Arr.length != 0 && s2Arr.length != 0) {
        if (temp.length != 0) {
          if (s1Arr[0].length+2 < temp[0].length && s2Arr[0].length+2 < temp[0].length ) {
            while (temp.length != 0) {
              mix.push(temp.shift());
            }
          }
        }
        if (s1Arr[0].length > s2Arr[0].length) {
          s1Arr[0] = "1:" + s1Arr[0];
          mix.push(s1Arr.shift());
          s2Arr = s2Arr.filter(e => !eval("/" + mix[mix.length - 1][2] + "/").test(e));
        } else if (s1Arr[0].length < s2Arr[0].length) {
          s2Arr[0] = "2:" + s2Arr[0];
          mix.push(s2Arr.shift());
          s1Arr = s1Arr.filter(e => !eval("/" + mix[mix.length - 1][2] + "/").test(e));
          if (s2Arr.length != 0 && temp.length != 0) {
            if (s2Arr[0].length + 2 < temp[0].length) {
              while (temp.length != 0) {
                mix.push(temp.shift());
              }
            }
          }
        } else if (s1Arr[0].length === s2Arr[0].length) {
          if (s2Arr.filter(e => eval("/" + s1Arr[0] + "/").test(e)).length === 0) {
            s1Arr[0] = "1:" + s1Arr[0];
            mix.push(s1Arr.shift());
            s2Arr = s2Arr.filter(e => !eval("/" + mix[mix.length - 1][2] + "/").test(e));
          }
          else {
            s1Arr[0] = "=:" + s1Arr[0];
            temp.push(s1Arr.shift());
            s2Arr = s2Arr.filter(e => !eval("/" + temp[temp.length - 1][2] + "/").test(e));
            console.log("++", temp);
            console.log("--", s2Arr);
          }
        }
      }
      if (s1Arr.length === 0 && s2Arr.length === 0) {
        while (temp.length != 0) {
          mix.push(temp.shift());
        }
      }
    }
    return mix.join("/");
  }
  function fixed(str) {
    var arr = str.split("").filter(e => /[a-z]/.test(e)).sort(), result = [], newArr = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
      if (arr[i] !== arr[i + 1]) {
        newArr.push(result);
        result = [];
      }
    }
    return newArr.filter(e => e.length > 1).map(e => e.join("")).sort((a, b) => b.length - a.length);
  }
  
  console.log(mix("otlw1zubb0lsxw9wenf?hrlu<hooq", "BulngAhfyjNvltb7saldWqwxuKwajk"));
  console.log("1:ooo/1:www/=:lll/1:bb/1:hh/2:aa/2:jj/=:uu");
  