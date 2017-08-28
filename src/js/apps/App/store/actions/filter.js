import {
    SET_FILTER,
    RESET_FILTER,
} from '../constants'

/**
 * Set filter action
 * @param {Object} payload
 * @returns {{type: {String}, payload: *}}
 */
export function setFilter(payload) {
    return {
        type: SET_FILTER,
        payload,
    }
}

/**
 *
 * @returns {{type: {String}}}
 */
export function resetFilter() {
    return {
        type: RESET_FILTER,
    }
}