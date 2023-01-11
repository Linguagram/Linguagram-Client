import {
  SET_ACTIVE_SECTION,
  SET_THIS_USER,
  SET_INCOMING_CALLER,
  FETCH_ALL_GROUPS,
  SET_FILTERED_GROUPS,
  FETCH_MESSAGES_BY_GROUPID,
  SET_HOME_DRAWER,
  SET_OPEN_CHAT,
  FETCH_PRIVATE_GROUPS,
  FETCH_GROUP_GROUPS,
  SET_SOCKET,
  SET_COUNTERPART_USER,
  FETCH_EXPLORE_USERS,
  FETCH_EXPLORE_GROUPS,
  SET_NATIVE_LANGUAGE,
  SET_INTEREST_LANGUAGE,
  FETCH_ALL_FRIENDS,
  FETCH_ALL_FRIEND_REQUESTS,
  ADD_MESSAGE,
  SET_AM_I_THE_CALLER,
  FETCH_INTERESTS,
  DELETE_MESSAGE,
  EDIT_MESSAGE,
  CHANGE_NAVBAR_COLOR,
  FETCH_LANGUAGES,
  SET_IS_CALLING,
  SET_IS_INCOMING_CALL,
  ADD_ALL_GROUPS,
  ADD_PRIVATE_GROUPS,
  ADD_GROUP_GROUPS,
  SET_GROUP_MESSAGES_READ,
  SET_IS_NEW_USER,
} from "./actionTypes";

export const setActiveSection = (payload) => {
  return {
    type: SET_ACTIVE_SECTION,
    payload,
  };
};

export const setOpenChat = (payload) => {
  return {
    type: SET_OPEN_CHAT,
    payload,
  };
};

export const setHomeDrawer = (payload) => {
  return {
    type: SET_HOME_DRAWER,
    payload,
  };
};

export const setThisUser = (payload) => {
  return {
    type: SET_THIS_USER,
    payload,
  };
};

export const setNativeLanguage = (payload) => {
  return {
    type: SET_NATIVE_LANGUAGE,
    payload,
  };
};

export const setInterestLanguage = (payload) => {
  return {
    type: SET_INTEREST_LANGUAGE,
    payload,
  };
};

export const setCounterpartUser = (payload) => {
  return {
    type: SET_COUNTERPART_USER,
    payload,
  };
};

export const setAmITheCaller = (payload) => {
  return {
      type: SET_AM_I_THE_CALLER,
      payload
  }
}

export const setIncomingCaller = (payload) => {
  return {
      type: SET_INCOMING_CALLER,
      payload
  }
}


export const setAllGroups = (payload) => {
  return {
    type: FETCH_ALL_GROUPS,
    payload,
  };
};

export const setFilteredGroups = (payload) => {
  return {
    type: SET_FILTERED_GROUPS,
    payload,
  };
};

export const setPrivateGroups = (payload) => {
  return {
    type: FETCH_PRIVATE_GROUPS,
    payload,
  };
};

export const setGroupGroups = (payload) => {
  return {
    type: FETCH_GROUP_GROUPS,
    payload,
  };
};

export const setCurrentMessages = (payload) => {
  return {
    type: FETCH_MESSAGES_BY_GROUPID,
    payload,
  };
};

export const setSocketConnect = (payload) => {
  return {
    type: SET_SOCKET,
    payload,
  };
};

export const setExploreUsers = (payload) => {
  return {
    type: FETCH_EXPLORE_USERS,
    payload,
  };
};

export const setExploreGroups = (payload) => {
  return {
    type: FETCH_EXPLORE_GROUPS,
    payload,
  };
};

export const setFriends = (payload) => {
  return {
    type: FETCH_ALL_FRIENDS,
    payload,
  };
};

export const setFriendRequests = (payload) => {
  return {
    type: FETCH_ALL_FRIEND_REQUESTS,
    payload,
  };
};

export const addMessage = (payload) => {
  return {
    type: ADD_MESSAGE,
    payload,
  };
};

export const deleteMessage = (payload) => {
  return {
    type: DELETE_MESSAGE,
    payload,
  };
};

export const editMessage = (payload) => {
  return {
    type: EDIT_MESSAGE,
    payload,
  };
};

export const setInterests = (payload) => {
  return {
    type: FETCH_INTERESTS,
    payload
  }
}

export const setNavbarColor = (payload) => {
  return {
    type: CHANGE_NAVBAR_COLOR,
    payload
  }
}

export const setLanguages = (payload) => {
  return {
    type: FETCH_LANGUAGES,
    payload
  }
}

export const setIsCalling = (payload) => {
  return {
    type: SET_IS_CALLING,
    payload
  }
}

export const setIsIncomingCall = (payload) => {
  return {
    type: SET_IS_INCOMING_CALL,
    payload
  }
}

export const addAllGroups = (payload) => {
  return {
    type: ADD_ALL_GROUPS,
    payload
  }
}

export const addPrivateGroups = (payload) => {
  return {
    type: ADD_PRIVATE_GROUPS,
    payload
  }
}

export const addGroupGroups = (payload) => {
  return {
    type: ADD_GROUP_GROUPS,
    payload
  }
}

export const setGroupMessagesRead = (payload) => {
  return {
    type: SET_GROUP_MESSAGES_READ,
    payload
  }
}

export const setIsNewUser = (payload) => {
  return {
    type: SET_IS_NEW_USER,
    payload
  }
}