import { SET_ACTIVE_SECTION, SET_THIS_USER, FETCH_ALL_GROUPS, FETCH_MESSAGES_BY_GROUPID, SET_HOME_DRAWER, SET_OPEN_CHAT, FETCH_PRIVATE_GROUPS, FETCH_GROUP_GROUPS, SET_SOCKET, SET_COUNTERPART_USER, FETCH_EXPLORE_USERS, FETCH_EXPLORE_GROUPS, SET_NATIVE_LANGUAGE, SET_INTEREST_LANGUAGE } from "./actionTypes"

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

export const setNativeLanguage = (payload) => {
    return {
        type: SET_NATIVE_LANGUAGE,
        payload
    }
}

export const setInterestLanguage = (payload) => {
    return {
        type: SET_INTEREST_LANGUAGE,
        payload
    }
}

export const setCounterpartUser = (payload) => {
    return {
        type: SET_COUNTERPART_USER,
        payload
    }
}

export const setAllGroups = (payload) => {
    return {
        type: FETCH_ALL_GROUPS,
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

export const setCurrentMessages = (payload) => {
    return {
        type: FETCH_MESSAGES_BY_GROUPID,
        payload
    }
}

export const setSocketConnect = (payload) => {
    return {
        type: SET_SOCKET,
        payload
    }
}

export const setExploreUsers = (payload) => {
  return {
    type: FETCH_EXPLORE_USERS,
    payload
  }
}

export const setExploreGroups = (payload) => {
  return {
    type: FETCH_EXPLORE_GROUPS,
    payload
  }
}
