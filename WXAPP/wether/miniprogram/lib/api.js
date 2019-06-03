const QQ_MAP_KEY='E4MBZ-GV2KX-ZFU4C-ZRJ7T-PRPXV-BQFCW'

wx.cloud.init({
  env: 'xymlearn-251mg'
})
const db = wx.cloud.database()

// 添加心情
export const addEmotion = (openid,emotion) => {
  return db.collection('diary').add({
    data: {
      openid,
      emotion,
      tsModified: Date.now()
    }
  })
}

// 获取位置
export const geocoder = (lat,lon,success = () => {}, fail = () => {}) => {
  return wx.request({
    url: 'https://apis.map.qq.com/ws/geocoder/v1/',
    data: {
      location: `${lat},${lon}`,
      key: QQ_MAP_KEY,
      get_poi: 0
    },
    success,
    fail
  })
}

// 获取天气
export const getWeather = (lat,lon) => {
  return wx.cloud.callFunction({
    name: 'he-weather',
    data: {
      lat,
      lon
    }
  })
}