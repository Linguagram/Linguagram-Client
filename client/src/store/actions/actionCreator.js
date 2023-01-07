import { SET_ACTIVE_SECTION, SET_USER, FETCH_GROUPS, FETCH_ALL_MESSAGES, SET_HOME_DRAWER, SET_OPEN_CHAT } from "./actionTypes"

export const setActiveSection = (payload) => {
    return {
        type: SET_ACTIVE_SECTION,
        payload
    }
}

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

export const setUser = (payload) => {
    return {
        type: SET_USER,
        payload
    }
}

export const setGroups = (payload) => {
    return {
        type: FETCH_GROUPS,
        payload
    }
}

export const setAllMessages = (payload) => {
    return {
        type: FETCH_ALL_MESSAGES,
        payload
    }
}