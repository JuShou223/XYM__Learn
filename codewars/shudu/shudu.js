function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9 
  puzzle = puzzle.map(e => { return e.map(e1 => { if (e1 === 0) { return [1, 2, 3, 4, 5, 6, 7, 8, 9] } else { return e1 } }) });
  var flag;
  do {
  flag=true;
  flag=sol(puzzle,flag);
  jie(puzzle);
  } while (!flag);
  return puzzle;
}
function sol(puzzle,flag) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (typeof (puzzle[i][j]) === "object") {
        flag=false;
        for (let k = 0; k < 9; k++) {
          if (typeof (puzzle[Math.floor(i / 3) * 3 + Math.floor(k / 3)][Math.floor(j / 3) * 3 + k % 3]) === "number") {
            puzzle[i][j] = puzzle[i][j].filter(e => e != puzzle[Math.floor(i / 3) * 3 + Math.floor(k / 3)][Math.floor(j / 3) * 3 + k % 3]);
          }
          if (typeof (puzzle[i][k]) === "number") {
            puzzle[i][j] = puzzle[i][j].filter(e => e != puzzle[i][k]);
          }
          if (typeof (puzzle[k][j]) === "number") {
            puzzle[i][j] = puzzle[i][j].filter(e => e != puzzle[k][j]);
          }
        }
      }
    }
  }
  return flag;
}
function jie(puzzle) {
  var row = [];
  var col = [];
  a:
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (typeof (puzzle[i][j]) === "object") {
        if (puzzle[i][j].length === 1) {
          puzzle[i][j] = puzzle[i][j][0];
          break a;

        }
        else {
          row = getRow(puzzle, i, j);
          col = getCol(puzzle, i, j);
          for (let k in puzzle[i][j]) {
            if (!eval("/" + puzzle[i][j][k] + "/").test(row) || !eval("/" + puzzle[i][j][k] + "/").test(col)) {
              puzzle[i][j] = puzzle[i][j][k];
              break a;
            }
          }
        }
      }
    }
  }
  
}
function getRow(puzzle, i, j) {
  var row_temp = [], row = [];
  for (let k = 0; k < 9; k++) {
    if (k != j && typeof (puzzle[i][k]) === "object") {
      row_temp.push(...puzzle[i][k]);
    }
  }
  row_temp.sort((a, b) => a - b);
  for (let m = 0; m < row_temp.length; m++) {
    if (row_temp[m] != row_temp[m + 1]) {
      row.push(row_temp[m]);
    }
  }
  return row;

}
function getCol(puzzle, i, j) {
  var col_temp = [], col = [];
  for (let k = 0; k < 9; k++) {
    if (k != i && typeof (puzzle[k][j]) === "object") {
      col_temp.push(...puzzle[k][j]);
    }
  }
  col_temp.sort((a, b) => a - b);
  for (let m = 0; m < col_temp.length; m++) {
    if (col_temp[m] != col_temp[m + 1]) {
      col.push(col_temp[m]);
    }
  }
  return col;
}
console.log(sudoku([[5, 3, 0, 0, 7, 0, 0, 0, 0],
[6, 0, 0, 1, 9, 5, 0, 0, 0],
[0, 9, 8, 0, 0, 0, 0, 6, 0],
[8, 0, 0, 0, 6, 0, 0, 0, 3],
[4, 0, 0, 8, 0, 3, 0, 0, 1],
[7, 0, 0, 0, 2, 0, 0, 0, 6],
[0, 6, 0, 0, 0, 0, 2, 8, 0],
[0, 0, 0, 4, 1, 9, 0, 0, 5],
[0, 0, 0, 0, 8, 0, 0, 7, 9]]));
// sudoku([[5, 3, 0, 0, 7, 0, 0, 0, 0],
// [6, 0, 0, 1, 9, 5, 0, 0, 0],
// [0, 9, 8, 0, 0, 0, 0, 6, 0],
// [8, 0, 0, 0, 6, 0, 0, 0, 3],
// [4, 0, 0, 8, 0, 3, 0, 0, 1],
// [7, 0, 0, 0, 2, 0, 0, 0, 6],
// [0, 6, 0, 0, 0, 0, 2, 8, 0],
// [0, 0, 0, 4, 1, 9, 0, 0, 5],
// [0, 0, 0, 0, 8, 0, 0, 7, 9]]);