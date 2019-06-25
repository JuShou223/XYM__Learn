const {combineReducers} = require('redux')
const filmReducer = require('./filmReducer')
const filmFilter= require('./filmFitler')

module.exports = combineReducers({
    films: filmReducer,
    filter: filmFilter
})