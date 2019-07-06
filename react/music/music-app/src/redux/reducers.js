import {combineReducers} from 'redux'
import * as ActionTypes from './actionTypes'
const initialState = {
    showStatus: false,
    song: {}, //当前播放的一首歌
    songs: []
}
function showStatus(showStatus = initialState.showStatus, action){
    switch(action.type){
        case ActionTypes.SHOW_PLAYER:
            return action.showStatus;
        default:
            return showStatus;
    }
}

function song(song = initialState.song,action){
    switch(action.type){
        case ActionTypes.CHANGE_SONG:
            return action.song;
        default: 
            return song
    }
}

export default combineReducers({
    showStatus,
    song
})