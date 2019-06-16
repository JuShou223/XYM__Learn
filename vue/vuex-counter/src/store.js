import Vuex from 'vuex'
import Vue from 'vue'
import { resolve } from 'upath';
import { rejects } from 'assert';
Vue.use(Vuex)
//CEO
const state = {
  count: 0
}

// 改变 mutation 唯一可以修改状态
// 财务

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

// 动作 部门 不能修改 state
const actions ={
  increment: (({commit}) => commit('increment')),
  decrement: (({commit}) => commit('decrement')),
  // actions 里不能修改state 可以读
  incrementIfOdd ({commit,state}) {
    if(state.count%2!=0){
      commit('increment')
    }
  },
  incrementAsync ({commit,state}) {
    // actions axios 异步取数据...
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        commit('increment')
      }, 2000);
    })
  }
}

// 组件里的computed
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd' 

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
