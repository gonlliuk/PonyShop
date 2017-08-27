import React, { Component } from 'react'

export default class extends Component {
    render() {
        return <div>
            <h3>Overlay</h3>
            { this.props.children}
        </div>
    }
}