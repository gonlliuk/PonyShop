import {
    SET_FILTER,
    RESET_FILTER,
} from '../constants'

export function setFilter(payload) {
    return {
        type: SET_FILTER,
        payload,
    }
}

export function resetFilter() {
    return {
        type: RESET_FILTER,
    }
}