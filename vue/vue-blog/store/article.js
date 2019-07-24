import ajax from '../assets/scripts/ajax'
export const mutations = {

}
export const actions = {
  async getArticles ({state,commit},params) {
    const ret = await ajax.get('/articles',
    {params:{
      limit: state.limit,
      ...paramss
    }})
    const {data} = ret
  }
}
export const state = () => ({
  articles: [],
  articlesTop: [],
  total: 0,
  limit: 15,
  article:[]
})