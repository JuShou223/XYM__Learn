export const createStore = (state,storeChange) => {
    const store = state || {};
    const listener =[];
    const subscribe = (listen)=> listener.push(listen) //订阅发布者
    // listen callback
    const dispatch =  (action) =>{
        const newStore = storeChange(store,action);
        // 新的
        listener.forEach(item => {
            item(newStore,store);
        })
    }
    return {store,subscribe, dispatch}
}