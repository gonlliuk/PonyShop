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

    /**
     * Toggle filter handler
     */
    toggleFilter() {
        const { isFilterVisible } = this.state
        this.setState({ isFilterVisible: !isFilterVisible })
    }

    /**
     * Apply new filter and hide overlay
     * @param {Object} filter
     */
    setFilter(filter) {
        this.props.setFilterAction(filter)
        this.toggleFilter()
        this.props.history.push(`/1`)
    }

    /**
     * Reset filter to default and hide overlay
     */
    resetFilter() {
        this.props.resetFilterAction()
        this.toggleFilter()
        this.props.history.push(`/1`)
    }

    render() {
        const {
            data,
            filter,
            page,
            history,
        } = this.props
        const { isFilterVisible } = this.state
        return <div>
            <div hidden={!isFilterVisible}>
                <Overlay>
                    <Filter
                        filter={filter}
                        set={::this.setFilter}
                        reset={::this.resetFilter}/>
                </Overlay>
            </div>
            <Page
                data={data}
                toggleFilter={::this.toggleFilter}
                resetFilter={resetFilterAction}
                history={history}
                page={+page}/>
        </div>
    }
}