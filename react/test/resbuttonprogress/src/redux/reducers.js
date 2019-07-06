import { combineReducers } from 'redux'
const maxWidth = window.innerWidth;
function onTouch(onTouch = false, action) {
    switch (action.type) {
        case "ONTOUCHSTART":
            return true;
        case "ONTOUCHEND":
            return false;
        default:
            return onTouch;
    }
}
function progress(progress = '50%', action) {
    switch (action.type) {
        case "ONDRAGSTART":
            if (action.progress > maxWidth)
                return maxWidth+'px';
            else
                return action.progress+'px';
        case "onDRAG":
            if (action.progress > maxWidth)
                return maxWidth+'px';
            else
                return action.progress+'px';
        case "onDragEnd":
            return progress;
        default:
            return progress
    }
}
export default combineReducers({
    onTouch,
    progress
})