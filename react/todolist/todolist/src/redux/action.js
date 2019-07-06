import * as ActionTypes from './actionTypes'

export function actionAddToDo(text){
    return {
        type: ActionTypes.ADDTODOLIST,
        text
    }
}

export function actiontoggleTodo(id){
    return {
        type: ActionTypes.TOGGLETODOLIST,
        id
    }
}