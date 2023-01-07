import { SET_HOME_DRAWER, SET_OPEN_CHAT } from "./actionTypes"

export const setOpenChat = (payload) => {
    return {
        type: SET_OPEN_CHAT,
        payload
    }
}

export const setHomeDrawer = (payload) => {
    return {
        type: SET_HOME_DRAWER,
        payload
    }
}