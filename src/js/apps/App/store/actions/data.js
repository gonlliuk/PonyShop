import { SET_DATA } from '../constants'

export function setData(payload = []) {
    return {
        type: SET_DATA,
        payload,
    }
}