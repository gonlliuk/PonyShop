import React, { Component } from 'react'
import Paginator from '../Paginator'
import ProductCard from '../ProductCard'

export default class extends Component {
    constructor(props) {
        super(props)
        this.pageLimit = 20
        this.totalPages = Math.ceil(props.data.length / this.pageLimit)
    }
    getProductCardList() {
        const {
            page,
            data,
        } = this.props
        const startPos = this.pageLimit * (page - 1)
        const endPos = this.pageLimit * page
        return data
            .map((item, i) =>
                <ProductCard
                    key={item.name + i}
                    product={item}/>
            )
            .slice(startPos, endPos)
    }

    nextPage() {
        const {
            history,
            page,
        } = this.props
        history.push(`/${page + 1}`)
    }

    prevPage() {
        const {
            history,
            page,
        } = this.props
        history.push(`/${page - 1}`)
    }

    setPage(page) {
        const {
            history,
        } = this.props
        history.push(`/${page}`)
    }

    render() {
        const {
            toggleFilter,
            page,
        } = this.props
        return <div className="page">
            <div className="page__filter-buttons">
                <button className="button" onClick={toggleFilter}>Настроить фильтры</button>
            </div>
            <div className="page__products">
                { ::this.getProductCardList() }
            </div>
            <div className="page__paginator">
                <Paginator
                    setPage={::this.setPage}
                    prevPage={::this.prevPage}
                    nextPage={::this.nextPage}
                    current={page}
                    total={this.totalPages}/>
            </div>
        </div>
    }
}