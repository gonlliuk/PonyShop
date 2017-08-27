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
        .filter(item => filter.color === item.color)
        .filter(item => filter.kind.some(elem => elem === item.kind))
        .filter(item => filter.price.start <= item.price <= filter.price.end)
        .filter(item => filter.isNew === item.isNew)
})