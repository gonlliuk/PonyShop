import { SET_DATA } from '../constants'

/**
 * Initial state of data
 * @type {Array}
 */
const initialState = []

/**
 * Data reducer
 * @param state - current state of data
 * @param type - action type
 * @param payload - action payload
 * @returns {Array}
 */
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_DATA:
            return payload || state
        default:
            return state
    }
}