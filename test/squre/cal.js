
  function pathFinder(maze){
    maze = maze.split('\n').map(r=>[...r]);
    var len=maze.length, stack = [[0,0]];
    while(stack.length) {
      let [x,y] = stack.pop();
      if(maze[y][x]!=='.') continue;
      maze[y][x]='X';
      console.log(maze);
      [[x,y-1],[x,y+1],[x-1,y],[x+1,y]].filter(([i,j])=>i>=0&&j>=0&&i<len&&j<len).forEach(([i,j])=>stack.push([i,j]));
    }
    // console.log(maze);
    return maze[len-1][len-1]==='X';
  
}
  console.log(pathFinder(`....WW..
..W..W..
......W.
.W..W...
......WW
WWW.....
...W.WW.
.W..W.W.`));