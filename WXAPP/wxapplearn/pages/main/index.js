// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://p1.meituan.net/128.180/movie/e6ba41b0d41c89c64120eee03586f820991282.jpg',
      'https://p0.meituan.net/128.180/movie/0253cac859838e4fd6ae94cf986b07971008254.jpg',
      'https://p0.meituan.net/128.180/moviemachine/f7d2ad70eb79d6d9b8a197713db9b8c41711752.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 5000,
    city:"南昌",
    items:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    console.log("加载完成");
    console.log(this.data.city);
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca457f04767c3737055c868/example/Cat-Eyes-Movies',
      success:function(res){
        console.log(res);
        that.setData({
          items:res.data.data.movieList
        })
      }
    })
    console.log(this.data.items);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(2);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(3);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(4);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log(5);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    setTimeout(function() {console.log("refresh")},2000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})