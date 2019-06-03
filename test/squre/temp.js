function jinziqi(board) {
  
  return ans;
}
function rowCheck(board){
  var x=0,o=0,zero=0;
  f:
  for (let i = 0; i < 3; i++) {
    x=0;
    y=0;
    for (let j = 0; j < 3; j++) {
      if(board[i][j]===1){
        x++;
      }
      if(board[i][j]===2){
        o++;
      }
      if(board[i][j]===0){
        zero++;
      }
      if(x===3 || o===3){
        break f;
      }
    } 
  }
  if(x===3){
    return 1;
  }
  if(o===3){
    return 2;
  }
  if(zero===0){
    return 0;
  }else{
    return -1;
  }
}
function colCheck(board){
  var x=0,o=0,zero=0;
  f:
  for (let i = 0; i < 3; i++) {
    x=0;
    y=0;
    for (let j = 0; j < 3; j++) {
      if(board[j][i]===1){
        x++;
      }
      if(board[j][i]===2){
        o++;
      }
      if(board[j][i]===0){
        zero++;
      }
      if(x===3 || o===3){
        break f;
      }
    } 
  }
  if(x===3){
    return 1;
  }
  if(o===3){
    return 2;
  }
  if(zero===0){
    return 0;
  }else{
    return -1;
  }
}
function crossCheck(board){
  
}
console.log(jinziqi([[1, 1, 1],
                     [1, 2, 1],
                     [2, 1, 2]]));