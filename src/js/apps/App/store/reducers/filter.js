import {
    SET_FILTER,
    RESET_FILTER,
} from '../constants'

/**
 * Initial state of filter
 * @type {Object}
 */
const initialState = {
    color: [],
    kind: [],
    price: {
        start: 0,
        end: 999999,
    },
    isNew: null,
}

/**
 * Filter reducer
 * @param state - current state of filter
 * @param type - action type
 * @param payload - action payload
 * @returns {Object}
 */
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FILTER:
            return payload || state
        case RESET_FILTER:
            return initialState
        default:
            return state
    }
}