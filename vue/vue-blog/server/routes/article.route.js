const router = require('express').Router()
console.log('c')
const article = require('../controllers/article.controller')
console.log(article)
router.get('/articles',article.getArticle)
module.exports = router