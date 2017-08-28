import React, { Component } from 'react'
import MainContainer from '../../containers/main-container'

export default class extends Component {
    render() {
        const { history, match: { params: { page } } } = this.props
        return <div>
            <MainContainer page={page} history={history}/>
        </div>
    }
}
