// 云函数入口文件
const cloud = require('wx-server-sdk')
const evn = 'vant-cloud-learn-zgdot'

cloud.init()
//获取服务器的句柄(指针)
const db = cloud.database({evn})

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo
  return await db.collection('group').add({
    data:{
      name:event.groupName,
      creatBy:userInfo.openId,
      creatTime:new Date(),
      deleted:false,
      updateTime:new Date()
    }
  })
  .then(res =>{
    return db.collection('user-group').add({
      data:{
        groupId:res._id,
        userId:userInfo.openId,
        invalid:false
      }
    })
  })
  
}