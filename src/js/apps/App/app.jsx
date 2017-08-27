import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Redirect, Switch } from 'react-router'
import { createBrowserHistory }  from 'history'
import {
    Main,
} from './routes'
import store from './store'

export default class extends Component {
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