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

/**
 * Is filter applied selector
 */
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

        // filter by color
        .filter(item => filter.color ? filter.color === item.color : true)

        // filter by kind
        .filter(item => filter.kind.length ? filter.kind.some(elem => elem === item.kind) : true)

        // filter by start price
        .filter(item => filter.price.start ? filter.price.start <= item.price : true)

        // filter by end price
        .filter(item => filter.price.end ? item.price <= filter.price.end : true)

        // filter by 'isNew' option
        .filter(item => typeof filter.isNew === 'boolean' ? filter.isNew === item.isNew : true)
})