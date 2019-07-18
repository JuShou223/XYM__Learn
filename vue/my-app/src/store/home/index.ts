import {State} from '../intrrface'
import {Commit} from 'vuex'
import {getMovieList} from '@/api/movie'
// - 类型 约束 报错
const getters = {
    // - 代码 提示 友好
}
const state: State = {
    movieList: []
}
const mutations = {}
const actions = {
    async movieList(context:{commit:Commit},cate:string){
        const res = await getMovieList(cate).then((response:any)=>response)
        return res;
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}