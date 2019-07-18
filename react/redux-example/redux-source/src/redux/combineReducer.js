function combineReducers(reducers){
    const reducersKeys = Object.keys(reducers)
    const finalReducers = {};
    for (let i=0, len = reducersKeys.length; i<len; i++){
        let key = reducersKeys[i]
        if(typeof reducers[key] === 'function'){
            finalReducers[key] = reducers[key];
        }
    }
    const nextState = {}
    const finalReducerskeys = Object.keys(finalReducers);
    return function(state = {}, action){
        for(let j =0, len = finalReducerskeys.length;j<len;j++){
            let key = finalReducerskeys[j]
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey,action)
            nextState[key] = nextStateForKey
        }
        return nextState
    }
}

export default combineReducers