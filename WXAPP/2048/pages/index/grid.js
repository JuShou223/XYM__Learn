function Grid(size){
  // size 大小 规格
  this.size=size;
  this.cells=this.empty();
}
Grid.prototype={
  // 返回一个空的矩阵
  empty:function(){
    let cells =[];
    for(let i=0;i<this.size;i++)
    {
      cells[i]=[]
      for(let j=0;j<this.size;j++){
        cells[i].push(null)
      }
    }
    return cells;
  },
  availableCells(){
    // 空位置
    var cells=[];
    for(let i=0;i<this.size;i++){
      for(let j=0;j<this.size;j++){
        if(!this.cells[i][j]){
          cells.push(
            {
              x:i,
              y:j
            }
            )
        }
      }
    }
    return cells;
  },
  cellAvailable:function(){
    // !! 强转为boolean
    return !!this.availableCells().length;
  },
  // 从一堆空位置里随机挑一个
  randomAvailableCell:function(){
    const cells=this.availableCells();
    return cells[Math.floor(Math.random()*cells.length)];
  },
  insertTile(tile){
    this.cells[tile.x][tile.y]=tile;
  },
}
module .exports=Grid;
// ecm
// export default