import {
    setFilter,
    resetFilter,
} from '../actions/filter'

/**
 * Set filter action
 * @param {Object} data
 * @returns {function(*)}
 */
export function setFilterAction(data) {
    return (dispatch) => { dispatch(setFilter(data)) }
}

/**
 * Reset filter action
 * @returns {function(*)}
 */
export function resetFilterAction() {
    return (dispatch) => { dispatch(resetFilter()) }
}