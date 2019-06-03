// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: true,
    carts: [{ id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: false },
        { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: false }],
    selectAllStatus: false,
    totalPrice: 0
  },
  addCount(e) {
    let carts = this.data.carts;
    let num = carts[e.target.dataset.index].num;
    let selected = carts[e.target.dataset.index].selected;
    let totalPrice = this.data.totalPrice;
    if (selected) {
      let price = carts[e.target.dataset.index].price;
      totalPrice = totalPrice + price;
      totalPrice = totalPrice.toFixed(2);
    }
    console.log(num);
    if (num < 99) {
      carts[e.target.dataset.index].num = num + 1;
      this.setData({
        carts: carts,
        totalPrice: parseFloat(totalPrice)
      })
    }

  },
  minusCount(e) {
    let carts = this.data.carts;
    let num = carts[e.target.dataset.index].num;
    let selected = carts[e.target.dataset.index].selected;
    let totalPrice = this.data.totalPrice;
    if (selected) {
      let price = carts[e.target.dataset.index].price;
      totalPrice = totalPrice - price;
      totalPrice = totalPrice.toFixed(2);
    }
    console.log(num);
    if (num > 0) {
      carts[e.target.dataset.index].num = num - 1;
      this.setData({
        carts: carts,
        totalPrice: parseFloat(totalPrice)
      })
    }
  },
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;
    let totalPrice = 0;
    for (let item of carts) {
      item.selected = selectAllStatus
      if (selectAllStatus) {
        totalPrice = parseFloat(totalPrice) + item.num * item.price;
        totalPrice = totalPrice.toFixed(2);
      }
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts,
      totalPrice: parseFloat(totalPrice)
    });

  },
  selectList(e) {
    
    let totalPrice = this.data.totalPrice;
    // console.log(this.data.carts[0].price*this.data.carts[0].num)
    let selectAllStatus = true;
    let carts = this.data.carts;
    let selected = carts[e.target.dataset.index].selected;
    let price = carts[e.target.dataset.index].num * carts[e.target.dataset.index].price;
    carts[e.target.dataset.index].selected = !selected;
    for (let item of carts) {
      if (!item.selected) {
        selectAllStatus = false;
      }
    };
    if (selected) {
      totalPrice = totalPrice - price;
      totalPrice = totalPrice.toFixed(2);
    } else {
      totalPrice = totalPrice + price;
      totalPrice = totalPrice.toFixed(2);
    };

    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts,
      totalPrice: parseFloat(totalPrice)
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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