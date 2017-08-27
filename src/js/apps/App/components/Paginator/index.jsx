import React, { Component } from 'react'

export default class extends Component {
    getPageButtons() {
        const {
            current,
            total,
            setPage,
        } = this.props
        const arr = []
        for (let i = current - 2; i <= current + 2; i += 1) {
            if (i < 1 || i > total) continue
            arr.push(i)
        }
        return arr.map(item => {
            const currentPageClass = item === current ? 'paginator__page--current' : ''
            return <button
                key={item}
                className={`paginator__page button ${currentPageClass}`}
                onClick={() => setPage(item)}>{item}</button>
        })

    }
    render() {
        const {
            nextPage,
            prevPage,
            current,
            total,
        } = this.props
        return <div className="paginator">
            <button
                className="paginator__prev button"
                hidden={current === 1}
                onClick={prevPage}>Предудущая</button>
            <div className="paginator__pages">
                {::this.getPageButtons()}
            </div>
            <button
                className="paginator__next button"
                hidden={current === total}
                onClick={nextPage}>Следующая</button>
        </div>
    }
}