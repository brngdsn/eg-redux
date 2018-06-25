import redux from 'redux'
import thunk from 'redux-thunk'
import { posts } from './reducers'
import stateData from './initialState'

// helpers
const { createStore, combineReducers, applyMiddleware } = redux
const thunkMiddleware = thunk.default

// stub localStorage
const localStorage = []

const logger = store => next => action => {
    console.log(`state.before=`, store.getState())
    next(action)
    console.log(`state.after=`, store.getState())
}

const saver = store => next => action => {
    const result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver, thunkMiddleware)(createStore)(
        combineReducers({ posts }),
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            stateData
    )

export default storeFactory