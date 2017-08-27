import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory }  from 'history'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import initialState from './initial-state'
import * as reducers from './reducers'

const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
})

const browserHistory = createBrowserHistory()

const middlewares = [
    logger(),
    thunk,
    routerMiddleware(browserHistory)
]

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const reducers = require('./reducers/')
        const nextRootReducer = combineReducers({
            ...reducers,
            routing: routerReducer
        })
        store.replaceReducer(nextRootReducer)
    })
}

export const history = syncHistoryWithStore(browserHistory, store)

export default store
