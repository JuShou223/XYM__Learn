import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from './redux/index'
// import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from './redux-thunk/index';
function foo(state = 0, action) {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'DE':
            return state - 1;
        default:
            return state
    }
}
function bar(state = 'INIT', action) {
    switch (action.type) {
        case 'CHANGE':
            return action.content
        default:
            return state
    }
}
const reducer = combineReducers({ foo, bar })
const store = createStore(reducer, applyMiddleware(ReduxThunk))
class Home extends React.Component {
    bandleAdd() {
        store.dispatch({
            type: 'ADD'
        })
    }
    handleAddAsync = () => {
        const asyncAdd = (dispatch) => {
            setTimeout(() => {
                dispatch({
                    type: 'ADD'
                })
            }, 1000);
        }
        store.dispatch(asyncAdd)
    }
    render() {
        const reduxstore = store.getState()
        return (
            <div>
                foo: {reduxstore.foo}
                bar: {reduxstore.bar}
                <button onClick={this.bandleAdd}>+</button>
                <button onClick={this.handleAddAsync}>async+</button>
            </div>
        )
    }
}
ReactDOM.render(<Home />, document.getElementById('root'));
store.subscribe(() => {
    ReactDOM.render(<Home />, document.getElementById('root'));
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
