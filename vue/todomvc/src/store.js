import Vue from 'vue'
import Vuex from 'vuex'
// 启动应用状态管理
Vue.use(Vuex)
// 全局状态
const state = {
    count: 0
}
// 中央
// state 要改 actions上报 是交给你调用的 increment 
// 不能直接修改state.count mutation
// 只有actions 才可以触发mutations改变，
// 只有mutations 才可以修改state
const mutations = {
    increment(state) {
        state.count++
    }
}
const actions = {
    increment: ({commit})=> commit('increment')
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})