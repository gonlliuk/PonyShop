import React, { Component } from 'react'
import MainContainer from '../../containers/main-container'

export default class extends Component {

    render() {
        const { history, match: { params: { page } } } = this.props
        return <div>
            <h1>Pony Shop</h1>
            <MainContainer page={page} history={history}/>
        </div>
    }
}
