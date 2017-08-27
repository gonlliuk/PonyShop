import React, { Component } from 'react'

export default class extends Component {
    render() {
        const {
            product: {
                color,
                kind,
                price,
                isNew,
                name,
            }
        } = this.props
        return <div className="product-card">
            <div className="product-card__name">{name}</div>
            <div className="product-card__spec-list">
                <div className="product-card__spec">
                    <span className="product-card__spec-title">Вид:</span>
                    <span className="product-card__spec-value">{kind}</span>
                </div>
                <div className="product-card__spec">
                    <span className="product-card__spec-title">Цвет:</span>
                    <span className="product-card__spec-value">{color}</span>
                </div>
                <div className="product-card__spec">
                    <span className="product-card__spec-title">Новинка:</span>
                    <span className="product-card__spec-value">{isNew ? 'Да' : 'Нет'}</span>
                </div>
            </div>
            <div className="product-card__price">{price} P
            </div>
        </div>
    }
}