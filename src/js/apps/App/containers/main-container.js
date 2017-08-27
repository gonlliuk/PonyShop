import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { dataSelector } from '../selectors/data'
import {
    setFilterAction,
    resetFilterAction,
} from '../store/actionCreators/filter'

import Page from '../components/Page'
import Filter from '../components/Filter'
import Overlay from '../components/Overlay'

@connect(
    (state) => ({
        filter: state.filter,
        data: dataSelector(state),
    }),
    (dispatch) => bindActionCreators({
        setFilterAction,
        resetFilterAction,
    }, dispatch)
)

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFilterVisible: false,
        }
    }
    toggleFilter() {
        const { isFilterVisible } = this.state
        this.setState({ isFilterVisible: !isFilterVisible })
    }

    render() {
        const {
            data,
            filter,
            setFilterAction,
            resetFilterAction,
        } = this.props
        const { isFilterVisible } = this.state
        return <div>
            <Overlay hidden={isFilterVisible}>
                <Filter filter={filter} set={setFilterAction} reset={resetFilterAction}/>
            </Overlay>
            <Page data={data} toggleFilter={::this.toggleFilter} resetFilter={resetFilterAction}/>
        </div>
    }
}