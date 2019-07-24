const createStore = (reducer,preloadState, enhancer) => {
    if(typeof preloadState === 'function' && enhancer === undefined){
        enhancer = preloadState;
        preloadState = undefined;
    }
    
    let store = preloadState;
    const listener =[]; //监听者
    const subscribe = (listen)=> listener.push(listen) //订阅发布者
    // listen callback
    const dispatch =  (action) =>{
        store = reducer(store,action);
        // 新的
        listener.forEach(item => {
            item();
        })
    }
    const getState = () =>{
        return store;
    }
    dispatch({type:'@@redux/INIT'})
    return {store,subscribe, dispatch,getState};
}
export default createStore