import { createSelector } from 'reselect'
import initialState from '../store/initial-state'

/**
 * Get filter from redux state
 * @param filter
 */
const filter = ({ filter }) => filter

/**
 * Get data from redux state
 * @param data
 */
const data = ({ data }) => data

export const isFiltered = createSelector([
    filter,
], (filter) => {
    return filter !== initialState.filter
})

/**
 * Data selector by filter
 */
export const dataSelector = createSelector([
    filter,
    data,
    isFiltered,
], (filter, data, isFiltered) => {
    if (!isFiltered) return data
    return data
        .filter(item => filter.color ? filter.color === item.color : true)
        .filter(item => filter.kind.length ? filter.kind.some(elem => elem === item.kind) : true)
        .filter(item => filter.price.start ? filter.price.start <= item.price : true)
        .filter(item => filter.price.end ? item.price <= filter.price.end : true)
        .filter(item => typeof filter.isNew === 'boolean' ? filter.isNew === item.isNew : true)
})