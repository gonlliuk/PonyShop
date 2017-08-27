import React, { Component } from 'react'

export default class extends Component {
    getName() {
        const {
            product: {
                name,
                isNew,
            }
        } = this.props
        return isNew ? `${name}, Новинка!` : name
    }
    render() {
        const {
            product: {
                color,
                kind,
                price,
            }
        } = this.props
        return <div className="product-card">
            <div className="product-card__name">{::this.getName()}</div>
            <div className="product-card__spec-list">
                <div className="product-card__spec">
                    <span className="product-card__spec-title">Вид</span>
                    <span className="product-card__spec-value">{kind}</span>
                </div>
                <div className="product-card__spec">
                    <span className="product-card__spec-title">Цвет</span>
                    <span className="product-card__spec-value">{color}</span>
                </div>
            </div>
            <div className="product-card__price">
                <span className="product-card__spec-title">{price} P</span>
            </div>
        </div>
    }
}