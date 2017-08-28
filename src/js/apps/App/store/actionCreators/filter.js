import {
    setFilter,
    resetFilter,
} from '../actions/filter'

/**
 * Set filter action creator
 * @param {Object} data
 * @returns {function(*)}
 */
export function setFilterAction(data) {
    return (dispatch) => { dispatch(setFilter(data)) }
}

/**
 * Reset filter action creator
 * @returns {function(*)}
 */
export function resetFilterAction() {
    return (dispatch) => { dispatch(resetFilter()) }
}