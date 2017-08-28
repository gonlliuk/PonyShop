import { SET_DATA } from '../constants'

/**
 * Set data action
 * @param {Array} payload
 * @returns {{type: {String}, payload: Array}}
 */
export function setData(payload = []) {
    return {
        type: SET_DATA,
        payload,
    }
}