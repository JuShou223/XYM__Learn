//  物理collection的model 映射
const mongoose = require('mongoose');
const { Schema } = mongoose
const md5 = require('md5');
const UserSchema = new Schema(
  {
    role: {
      type: String,
      enum: ['superAdmin', 'admin', 'user'],
      default: 'user'
    },
    username: {
      type: String,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      set: md5
    },
    description: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      trim: true
    }
  },
  {
    timestamp: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
      ,
      toJSON: {
        transform(doc, ret) {
          ret.id = ret._id
          delete ret._id
          delete ret.password
        }
      },
      minimize: false
    }
  })
mongoose.model('User', UserSchema)