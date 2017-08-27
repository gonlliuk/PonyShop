import React, { Component } from 'react'
import MainContainer from '../../containers/main-container'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <h1>Pony Shop</h1>
            <MainContainer/>
        </div>
    }
}
