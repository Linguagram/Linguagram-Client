import { SET_ACTIVE_SECTION, SET_THIS_USER, FETCH_GROUPS, FETCH_ALL_MESSAGES, SET_HOME_DRAWER, SET_OPEN_CHAT, FETCH_PRIVATE_GROUPS, FETCH_GROUP_GROUPS, SET_SOCKET } from "./actionTypes"

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

export const setThisUser = (payload) => {
    return {
        type: SET_THIS_USER,
        payload
    }
}

export const setPrivateGroups = (payload) => {
    return {
        type: FETCH_PRIVATE_GROUPS,
        payload
    }
}

export const setGroupGroups = (payload) => {
    return {
        type: FETCH_GROUP_GROUPS,
        payload
    }
}

export const setAllMessages = (payload) => {
    return {
        type: FETCH_ALL_MESSAGES,
        payload
    }
}

export const setSocketConnect = (payload) => {
    return {
        type: SET_SOCKET,
        payload
    }
}