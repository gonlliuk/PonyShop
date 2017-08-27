import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {
            children,
            name,
        } = this.props
        return <div className="filter__item">
            <div className="filter__item-title">{name}</div>
            <div className="filter__item-options">
                { children }
            </div>
        </div>
    }
}