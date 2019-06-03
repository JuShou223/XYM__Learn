Page({
  data: {
    start: false
  },
  _getCountdownEvent(e){
    this.setData({
      start:true
    })
  },
  _setStartDataEvent(e) {
    if (e.detail.start === false) {
      this.setData({
        start: e.detail.start
      })
    }
  },
  onLoad() {
    setTimeout(() => {
      this.setData({ start: true })
    }, 2000);
  }
})