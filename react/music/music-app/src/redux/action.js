import　* as ActionType from './actionTypes'

export function showPlayer(showStatus){
    return {
        type: ActionType.SHOW_PLAYER,
        showStatus
    }
}

export function cahngeSong(song){
    return {
        type: ActionType.CHANGE_SONG,
        song
    }
}