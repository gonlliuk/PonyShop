import React, { Component } from 'react'
import FilterItem from '../FilterItem'
import data from 'data/filter-data'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.filter,
            isNewCheck: false,
            isOldCheck: false,
        }
    }
    componentWillReceiveProps(props) {
        this.setState({ ...props.filter })
    }

    mapKindCheckBoxes(list) {
        const {
            kind,
        } = this.state
        return list.map((item, i) => {
            const checked = kind.find(elem => item === elem)
            return <div key={i + item}>
                <input
                    type="checkbox"
                    ref={item}
                    checked={!!checked}
                    onChange={() => ::this.kindCheckboxHandler(item)}/>
                <span className="filter__checkbox-label">{item}</span>
            </div>
        })
    }

    mapColorCheckBoxes(list) {
        const {
            color,
        } = this.state
        return list.map((item, i) => {
            const checked = color === item
            return <div key={i + item}>
                <input
                    type="checkbox"
                    ref={item}
                    checked={checked}
                    onChange={() => ::this.colorCheckboxHandler(item)}/>
                <span className="filter__checkbox-label">{item}</span>
            </div>
        })
    }

    colorCheckboxHandler(name) {
        const { checked } = this.refs[name]
        this.setState({ color:  checked ? name : '' })
    }

    kindCheckboxHandler(name) {
        const { checked } = this.refs[name]
        const { kind } = this.state
        if (!checked) {
            this.setState({ kind: kind.filter(elem => elem !== name) })
            return
        }

        this.setState({ kind: kind.concat(name) })
    }

    isNewCheckboxHandler(name) {
        const { checked } = this.refs[name]
        this.setState({ [name]: checked })
        setTimeout(() => {
            const {
                isNewCheck,
                isOldCheck,
            } = this.state
            if (!isNewCheck && !isOldCheck || isOldCheck && isNewCheck) {
                this.setState({ isNew: null })
            } else {
                this.setState({ isNew: isNewCheck })
            }
        }, 10)
    }

    inputChangeHandler(name) {
        const { value } = this.refs[name]
        const { price } = this.state
        this.setState({
            price: {
                ...price,
                [name]: value,
            }
        })
    }

    render() {
        const {
            isNewCheck,
            isOldCheck,
            price,
        } = this.state
        const {
            set,
            reset,
        } = this.props
        const {
            colorList,
            kindList,
        } = data
        return <div className="filter">
            <div className="filter__title">Выберите нужные фильтры</div>
            <div className="filter__list">
                <FilterItem name="Цвет">
                    { ::this.mapColorCheckBoxes(colorList) }
                </FilterItem>
                <FilterItem name="Вид">
                    { ::this.mapKindCheckBoxes(kindList) }
                </FilterItem>
                <FilterItem name="Цена">
                    <span className="filter__price">от</span>
                    <input
                        className="filter__input"
                        type="text"
                        ref="start"
                        maxLength="6"
                        onChange={() => ::this.inputChangeHandler('start')}
                        value={price.start}/>
                    <span className="filter__price">до</span>
                    <input
                        className="filter__input"
                        type="text"
                        ref="end"
                        maxLength="6"
                        onChange={() => ::this.inputChangeHandler('end')}
                        value={price.end}/>
                </FilterItem>
                <FilterItem name="Новинка">
                    <div>
                        <input
                            type="checkbox"
                            ref="isNewCheck"
                            checked={isNewCheck}
                            onChange={() => ::this.isNewCheckboxHandler('isNewCheck')}/>
                        <span className="filter__checkbox-label">Да</span>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            ref="isOldCheck"
                            checked={isOldCheck}
                            onChange={() => ::this.isNewCheckboxHandler('isOldCheck')}/>
                        <span className="filter__checkbox-label">Нет</span>
                    </div>
                </FilterItem>
            </div>
            <div className="filter__buttons">
                <button className="button filter__find" onClick={() => set(this.state)}>Найти</button>
                <button className="button filter__reset" onClick={reset}>Сбросить фильтры</button>
            </div>
        </div>
    }
}