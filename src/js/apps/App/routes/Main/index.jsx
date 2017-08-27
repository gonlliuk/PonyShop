import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.match.params.page)
        return <div>
            <h1>Pony Shop</h1>
        </div>
    }
}
