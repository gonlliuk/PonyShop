import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Redirect, Switch } from 'react-router'
import { createBrowserHistory }  from 'history'
import { Main } from './routes'
import store from './store'
import { SET_DATA } from './store/constants'

export default class extends Component {
    constructor(props) {
        super(props)
        store.dispatch({
            type: SET_DATA,
            payload: props.data,
        })
    }
    render() {
        return <Provider store={store}>
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route exact path="/:page" component={ Main } />
                    <Redirect to="1"/>
                </Switch>
            </Router>
        </Provider>
    }
}