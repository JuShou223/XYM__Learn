import {createStore, applyMiddleware} from 'redux'
import {thunkMiddlleware} from 'redux-thunk'
import { createLogger } from "redux-logger";

const middleware = [
    thunkMiddlleware,
    createLogger()
]

export default function configStore () {
    const store = createStore(rootReducer,
        applyMiddleware(...middleware));
        return store
}