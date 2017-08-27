import { createSelector } from 'reselect'

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
 * Data selector by filter
 */
export const dataSelector = createSelector([
    filter,
    data,
], (filter, data) => {
    return data
        .filter(item => filter.color === item.color)
        .filter(item => filter.kind.some(elem => elem === item.kind))
        .filter(item => filter.price.start <= item.price <= filter.price.end)
        .filter(item => filter.isNew === item.isNew)
})