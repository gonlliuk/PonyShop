import { setData } from '../actions/data'

/**
 * Set data action
 * @param {Array} data
 * @returns {function(*)}
 */
export function setDataAction(data = []) {
    return (dispatch) => { dispatch(setData(data)) }
}