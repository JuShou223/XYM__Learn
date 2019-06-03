const Grid = require('./grid.js')
function GameManager(size, startTiles = 2) {
  this.size = size;
  this.startTiles = startTiles
}
GameManager.prototype = {
  setUp: function () {
    this.grid = new Grid(this.size);
    this.addStartTiles();
    return this.grid.cells;
  },
  addStartTiles: function () {
    for (let tile = 0; tile < this.startTiles; tile++) {
      this.addRandomTiles();
    }
  },
  addRandomTiles: function () {
    if (this.grid.cellAvailable()) {
      const value = Math.random() < 0.9 ? 2 : 4;
      const cell=this.grid.randomAvailableCell();
      // 随机位置
      const tile={
        x:cell.x,
        y:cell.y,
        value:value
      }
      this.grid.insertTile(tile);
    }
  },
  findFathestTail:function(cell,vertor){

  },
  getVertor:function(direction){
    const map={
      0:{
        x:0,
        y:-1
      },
      1: {
        x: 1,
        y: 0
      },
      2: {
        x: 0,
        y: 1
      },
      3: {
        x: -1,
        y: 0
      },
    }
    return map[direction];
  },
  move:function(direction){
    const vertor=this.getVertor(direction);
    console.log(direction,vertor)
    const position = this.findFathestTail();
  }
}
module.exports = GameManager;