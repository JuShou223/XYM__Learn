import axios from 'axios'
import Vue from 'vue'

const baseURL = 'http://locahost:3025/api'
const ajax = axios.create({
  baseURL,
  responseType: 'json',
  withCredenties: true
})

export default ajax