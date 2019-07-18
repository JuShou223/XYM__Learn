import { appState } from './redux/state'
import {storeChange} from './redux/storeChange'
import {createStore } from './redux/createStore'
const {store,dispatch,subscribe} = createStore(appState,storeChange)

// 要实现管理状态
// function dispatch(state,action){
//     // 状态修改是可预期的
//     switch(action.type){
//         case 'HEAD_COLOR':
//             state.head.color = action.color;
//             break;
//         case 'BODY_TEXT':
//             state.body.text = action.text;
//             break;
//         default:
//             break;
//     }
// }
function renderHead(state){
    // 两个函数组件
    const head = document.getElementById('head');
    head.innerText = state.head.text;
    head.style.color = state.head.color;
}
function renderBody(state){
    const body = document.getElementById('body');
    body.innerText = state.body.text;
    body.style.color = state.body.color;
}

function renderApp(store,oldstore = {}) {
    if(store===oldstore) return
    store.head !== oldstore.head && renderHead(store)
    store.body !== oldstore.body && renderBody(store)
}
subscribe((store,oldstore)=>{renderApp(store,oldstore)})
renderApp(store);
dispatch({type: 'BODY_TEXT',text: '我是经过head修改的body'})
