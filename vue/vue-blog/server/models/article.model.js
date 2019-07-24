const mongoose = require('mongoose')

const { Schema } = mongoose

const ArticleSchema = new Schema(
  {
    title: {
      type: String
    },
    content: {
      type: String
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
  }
)
mongoose.model('Article', ArticleSchema)
