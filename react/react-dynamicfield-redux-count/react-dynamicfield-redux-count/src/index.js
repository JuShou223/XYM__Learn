import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import Counter from './Counter'
import * as serviceWorker from './serviceWorker';
import countReducer from './reducer'
let store = createStore(countReducer)
ReactDOM.render(<App />, document.getElementById('root'));
const renderCounnt = ()=>{
    ReactDOM.render(<Counter value={store.getState()} onIncrement={()=>{store.dispatch({
        type: 'INCREMENT'
    })}} onDecrement={()=>{store.dispatch({
        type: 'DECREMENT'
    })}}/>, document.getElementById('redux'));
}
renderCounnt()
store.subscribe(()=>{
    renderCounnt()
    console.log(store.getState())
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
