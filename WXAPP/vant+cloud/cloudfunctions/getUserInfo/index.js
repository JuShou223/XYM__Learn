// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'vant-cloud-learn-zgdot'

cloud.init()
//获取服务器句柄
const db = cloud.database({env})

// 云函数入口函数
exports.main = async (event, context) => {
 const wxContext = cloud.getWXContent()
 const groupNum = await db.collection('user-group')
 .where({
   userId:cloud.getWXContent().OPENID
 })
 .get()

 const storeUser = await db.collection('user')
 .where({
   openId:cloud.getWXContent().OPENID
 })
 .get()
 return{
   groupNum:groupNum.data.length,
   storeUser:storeUser.data[0]
 }
}