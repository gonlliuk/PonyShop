import { SET_DATA } from '../constants'
import initialState from '../initial-state'

/**
 * Initial state of filter
 * @type {Object}
 */
const { data } = initialState

/**
 * Data reducer
 * @param {Array} state - current state of data
 * @param {String} type - action type
 * @param {Array} payload - action payload
 * @returns {Array}
 */
export default (state = data, { type, payload }) => {
    switch (type) {
        case SET_DATA:
            return [ ...payload ] || state
        default:
            return state
    }
}