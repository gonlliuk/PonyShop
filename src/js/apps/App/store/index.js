import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import initialState from './initial-state'
import * as reducers from './reducers'
import config from 'build/config'

const rootReducer = combineReducers({
    ...reducers,
})

const middlewares = [
    thunk,
]

if (config.debug) {
    middlewares.push(logger())
}

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const reducers = require('./reducers/')
        const nextRootReducer = combineReducers({
            ...reducers,
        })
        store.replaceReducer(nextRootReducer)
    })
}

export default store
