//index.js
//获取应用实例
const app = getApp()
const GameManager = require('./game_manager.js')
Page({
  data: {
    grids: [],
  },
  gameManager: null,
  touchStartClientX: 0,
  touchStartClientY: 0,
  touchEndClientX: 0,
  touchEndClientY: 0,
  touchStart(event) {
    console.log(event);
    // 触点
    const touch = event.touches[0];
    this.touchStartClientX = touch.clientX;
    this.touchStartClientY = touch.clientY;
  },
  touchMove(event) {
    const touch = event.touches[0];
    this.touchEndClientX = touch.clientX;
    this.touchEndClientY = touch.clientY;
  },
  touchEnd(event) {
    const touch = event.changedTouches[0];
    this.touchEndClientX = touch.clientX;
    this.touchEndClientY = touch.clientY;
    const dx = this.touchEndClientX - this.touchStartClientX;
    const dy = this.touchEndClientY - this.touchStartClientY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if(Math.max(absDx,absDy)>10){
      // console.log(absDx > absDy ? absDx :absDy)
      // 0上 2下 1右 3左 
      const direction = absDx>absDy?(dx>0?1:3):(dy>0?2:0);
      this.gameManager.move(direction);
    }
  },
  //事件处理函数
  onLoad: function() {
    this.gameManager = new GameManager(4);
    const grids = this.gameManager.setUp();
    this.setData({
      grids
    })
  }
})