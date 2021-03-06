import {
    SET_FILTER,
    RESET_FILTER,
} from '../constants'
import initialState from '../initial-state'

/**
 * Initial state of filter
 * @type {Object}
 */
const { filter } = initialState


/**
 * Filter reducer
 * @param {Object}state - current state of filter
 * @param {String} type - action type
 * @param {Object} payload - action payload
 * @returns {Object}
 */
export default (state = filter, { type, payload }) => {
    switch (type) {
        case SET_FILTER:
            return { ...payload } || state
        case RESET_FILTER:
            return filter
        default:
            return state
    }
}