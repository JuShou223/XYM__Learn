import {combineReducers} from 'redux'
import * as ActionTypes from './actionTypes'

function addToDoList(state = [], action){
    switch(action.type){
        case ActionTypes.ADDTODOLIST:
            let id = state.length;
            return [
                {
                    text: action.text,
                    id,
                    completed: false
                },
                ...state
            ];
        case ActionTypes.TOGGLETODOLIST:
            return state.map(e=>{
                if(e.id === action.id) e.completed = !e.completed;
                return e
            })
        default:
            return state;
    }
}

export default combineReducers({
    addToDoList
})