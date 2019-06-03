//index.js
const app = getApp()
const db=wx.cloud.database()
Page({
  data: {
    youhuiLists:[]
  },

  onLoad: function() {
    wx.showLoading({
      title: '正在加载中',
    })
    wx.cloud.callFunction({
      name:'smzdmYouhuiSpider',
      success:(res)=>{
        if(res.result.code==200){
          const id = res.result.id;
          console.log(id)
          db.collection('youhuiLists').where({
            '_id':id
          }).get().then(res=>{
          this.setData({
            youhuiLists:res.data[0]['youhuiLists']
          })
          console.log(res);
          wx.hideLoading()
          })
        }else{
          wx.showToast({
            title: '网络错误',
          })
        }
        console.log('pachong',res)
      },
      fail:err=>{
        console.log(err)
      }
    })
    // 获取用户信息
  },

  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
