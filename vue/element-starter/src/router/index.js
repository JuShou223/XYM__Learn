import Vue from 'vue'
import VueRouter from 'vue-router'
import {
    login
} from 'pages/'
// this.$router this.$route

const routes = [
    {
        path: '/',
        name: '登录',
        hidden: true,
        component:  login
    }
]
Vue.use(VueRouter)

export default new VueRouter ({
    routes,
    // strtict: process.env.NODE_ENV !== 'production'
})