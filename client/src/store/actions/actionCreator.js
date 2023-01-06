import { SET_ACTIVE_SECTION, SUCCESS_FETCH_USER } from "./actionTypes"

export const setActiveSection = (payload) => {
    return {
        type: SET_ACTIVE_SECTION,
        payload
    }
}

export const setUser = (payload) => {
    return {
        type: SUCCESS_FETCH_USER,
        payload
    }
}
