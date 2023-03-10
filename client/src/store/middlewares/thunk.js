import {
  setActiveSection,
  setThisUser,
  setCurrentMessages,
  setPrivateGroups,
  setGroupGroups,
  setSocketConnect,
  setAllGroups,
  setNativeLanguage,
  setInterestLanguage,
  setCounterpartUser,
  setExploreUsers,
  setExploreGroups,
  setFriendRequests,
  setFriends,
  addMessage,
  setNavbarColor,
  setInterests,
  setIsCalling,
  setIsIncomingCall,
  setOpenChat,
  setGroupMessagesRead,
  setFilteredGroups,
} from "../actions/actionCreator";
import { URL_SERVER } from "../../baseUrl";
import axios from "axios";
import { swalError } from "../../util/swal";
import { SOCKET_EVENTS } from "../actions/socketEvents";

const getAccessToken = () => {
  return localStorage.getItem("access_token");
};

export const handleSetThisUser = (user) => {
  return (dispatch, getState) => {
    console.log(user, "nge test balikan user dari put");
    const nativeLangObj = user.UserLanguages.find((el) => el.type === "native");
    const interestLangObj = user.UserLanguages.find(
      (el) => el.type === "interest"
    );
    console.log(nativeLangObj, "ini native lang obj");
    dispatch(setThisUser(user));
    // if(nativeLangObj && nativeLangObj.Language)dispatch(setNativeLanguage(nativeLangObj.Language)); masih ERROR

    // Added condition to prevent error in development ---------------------------
    if (interestLangObj)
      dispatch(setInterestLanguage(interestLangObj.Language));
    if (nativeLangObj)
      dispatch(setNativeLanguage(nativeLangObj.Language));
    //----------------------------------------------------------------------------
  };
};

export const handleSetCounterpartUser = (user) => {
  return (dispatch, getState) => {
    dispatch(setCounterpartUser(user));
  };
};

export const handleSetActiveSection = (section) => {
  return (dispatch, getState) => {
    dispatch(setActiveSection(section));
  };
};

export const getInterests = () => {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${URL_SERVER}/interests`,
    });
  };
};

export const getLanguages = () => {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `${URL_SERVER}/languages`,
    });
  };
};

export const register = (inputs) => {
  return (dispatch, getState) => {
    const {
      username,
      email,
      password,
      confirmPassword,
      country,
      phoneNumber,
      status,
      nativeLanguages,
      interestLanguages,
      interests,
    } = inputs;

    return axios({
      method: "POST",
      url: `${URL_SERVER}/users/register`,
      data: {
        username,
        email,
        password,
        confirmPassword,
        country,
        phoneNumber,
        status,
        nativeLanguages,
        interestLanguages,
        interests,
      },
    });
  };
};

export const login = (inputs) => {
  return (dispatch, getState) => {
    const { email, password } = inputs;

    return axios({
      method: "POST",
      url: `${URL_SERVER}/users/login`,
      data: {
        email,
        password,
      },
    });
  };
};

export const logOut = (dispatcher, inputs) => {
  return (dispatch, getState) => {
    dispatcher(setAllGroups([]));
    dispatcher(setPrivateGroups([]));
    dispatcher(setGroupGroups([]));
    dispatcher(setCounterpartUser([]));
    dispatcher(setCurrentMessages([]));
    dispatcher(setOpenChat(null));
    dispatcher(setThisUser({}));
    dispatcher(setInterestLanguage({}));
    dispatcher(setNativeLanguage({}));
    dispatcher(setIsCalling(false));
    dispatcher(setCurrentMessages([]));
    dispatcher(setCounterpartUser([]));
    dispatcher(setExploreUsers([]));
    dispatcher(setExploreGroups([]));
    dispatcher(setFriendRequests([]));
    dispatcher(setFriends([]));
    dispatcher(setNavbarColor(false));
    dispatcher(setInterests([]));
    dispatcher(setFilteredGroups([]));
    localStorage.clear();
  };
};

export const getUserLogin = () => {
  return (dispatch, getState) => {
    return axios({
      method: "get",
      url: `${URL_SERVER}/users/@me`,
      headers: {
        access_token: getAccessToken(),
      },
    });
  };
};

export const editProfile = (inputs) => {
  return (dispatch, getState) => {
    const {
      username,
      email,
      password,
      newPassword,
      confirmNewPassword,
      country,
      phoneNumber,
      nativeLanguages,
      interestLanguages,
      interests,
    } = inputs;

    return axios({
      method: "PUT",
      url: `${URL_SERVER}/users/@me`,
      data: {
        username,
        email,
        password,
        newPassword,
        confirmNewPassword,
        phoneNumber,
        country,
        nativeLanguages,
        interestLanguages,
        interests,
      },
      headers: {
        access_token: localStorage.access_token,
      },
    });
  };
};

export const handleFetchGroups = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${URL_SERVER}/groups/@me`,
        headers: {
          access_token: getAccessToken(),
        },
      });

      const allGroups = [];
      data.forEach((el) => {
        if (el.Messages.length > 0) {
          el.Messages = el.Messages.map((message) => {
            message.createdAt = new Date(message.createdAt);
            return message;
          });

          allGroups.push(el);
        }
      });

      const privateGroups = data.filter((el) => el.type === "dm");
      const groupGroups = data.filter((el) => el.type === "group");

      dispatch(setAllGroups(allGroups));
      dispatch(setPrivateGroups(privateGroups));
      dispatch(setGroupGroups(groupGroups));
    } catch (err) {
      return err;
    }
  };
};

export const handleFetchMessagesByGroupId = (groupId) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${URL_SERVER}/groups/${groupId}/messages`,
        headers: {
          access_token: getAccessToken(),
        },
      });

      dispatch(setCurrentMessages(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleSetSocketConnect = (socket) => {
  return async (dispatch, getState) => {
    dispatch(setSocketConnect(socket));
  };
};

export const handleFetchExploreUsers = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${URL_SERVER}/explore/users`,
        headers: {
          access_token: getAccessToken(),
        },
      });
      dispatch(setExploreUsers(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleFetchExploreGroups = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${URL_SERVER}/explore/groups`,
        headers: {
          access_token: getAccessToken(),
        },
      });
      dispatch(setExploreGroups(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getFriends = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${URL_SERVER}/friends`,
        headers: {
          access_token: getAccessToken(),
        },
      });

      const notAccepted = data.filter((friend) => friend.isAccepted === false);
      const requests = notAccepted.filter(
        (friend) => friend.FriendId == localStorage.user_id
      );
      const friends = data.filter((friend) => friend.isAccepted === true);

      dispatch(setFriendRequests(requests));
      dispatch(setFriends(friends));
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendFriendRequest = (friendId) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "post",
        url: `${URL_SERVER}/friends/${friendId}`,
        headers: {
          access_token: getAccessToken(),
        },
      });

      const { exploreReducer } = getState();
      let updatedExploreUsersList = [];

      for (let i = 0; i < exploreReducer.users.length; i++) {
        const element = exploreReducer.users[i];
        if (element.id != friendId) {
          updatedExploreUsersList.push(element);
        }
      }

      dispatch(setExploreUsers(updatedExploreUsersList));

      // !TODO: insert to friend list?
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendMessage = (data) => {
  return async (dispatch, getState) => {
    try {
      if (!data) throw new TypeError("data can't be empty");

      const { socketReducer } = getState();

      let uploaded;

      const { content, file, GroupId, UserId } = data;

      if (file.elements.namedItem("attachment").value) {
        console.log("[sendMessage upload attachment]", file);
        uploaded = await axios({
          method: "post",
          url: `${URL_SERVER}/attachment`,
          headers: {
            access_token: getAccessToken(),
            "Content-Type": "multipart/form-data",
          },
          data: file,
        });
        console.log("[sendMessage upload attachment]", uploaded.data);
      }

      const toSend = {
        content,
        MediaId: uploaded?.data?.id,
        GroupId,
        UserId,
      };

      console.log(toSend, "<<<<<<< to emit MESSAGE");

      socketReducer.socketConnect.emit(SOCKET_EVENTS.MESSAGE, toSend);
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleDeleteMessage = (groupId, msgId, userId) => {
  return async (dispatch, getState) => {
    try {
      if (!groupId || !msgId || !userId)
        throw new TypeError("groupId or msgId or userId can't be empty");

      const { socketReducer } = getState();

      socketReducer.socketConnect.emit(SOCKET_EVENTS.MESSAGE_DELETE, {
        GroupId: groupId,
        MessageId: msgId,
        UserId: userId,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleEditMessage = (data) => {
  return async (dispatch, getState) => {
    try {
      if (!data) throw new TypeError("data can't be empty");

      const { socketReducer } = getState();

      const { content, GroupId, MessageId, UserId } = data;

      if (!content || !GroupId || !MessageId || !UserId)
        throw new TypeError(
          "content or GroupId or MessageId or UserId can't be empty"
        );

      const toSend = {
        content,
        GroupId,
        MessageId,
        UserId,
      };

      console.log(toSend, "<<<<<<< to emit MESSAGE_EDIT");

      socketReducer.socketConnect.emit(SOCKET_EVENTS.MESSAGE_EDIT, toSend);
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleTranslate = async (content, toLanguage) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `${URL_SERVER}/translate`,
      headers: {
        access_token: getAccessToken(),
      },
      data: {
        text: content,
        to: toLanguage,
      },
    });

    return data.translated;
  } catch (error) {
    console.log(error);
  }
};

export const acceptFriendRequest = (friendshipId) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "PATCH",
        url: `${URL_SERVER}/friendships/${friendshipId}`,
        headers: {
          access_token: getAccessToken(),
        },
      });
      const { friendReducer } = getState();
      console.log(friendReducer.friendRequests, {friendshipId})
      let updatedFriendRequestList = [];
      for (let i = 0; i < friendReducer.friendRequests.length; i++) {
        const element = friendReducer.friendRequests[i];
        if (element.User.id != friendshipId) {
          updatedFriendRequestList.push(element);
        }
      }

      console.log({updatedFriendRequestList})
      
      const newFriendList = [ ...friendReducer.friends, data]
      dispatch(setFriends(newFriendList))
      dispatch(setFriendRequests(updatedFriendRequestList))
    } catch (err) {
      console.log(err);
    }
  };
};

export const changeNavbarColor = (condition) => {
  return async (dispatch, getState) => {
    dispatch(setNavbarColor(condition));
  };
};

export const joinGroup = (groupId) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: URL_SERVER + "/groups/" + groupId + "/join",
        headers: {
          access_token: getAccessToken(),
        },
      });
      dispatch(handleFetchGroups())
      dispatch(handleFetchExploreGroups());
      return data;
    } catch (err) {
      swalError(err);
    }
  };
};

export const changeAvatarUser = (data) => {
  return async (dispatch, getState) => {
    try {
      const { avatar } = data;
      const res = await axios({
        method: "POST",
        url: `${URL_SERVER}/users/avatar`,
        headers: {
          access_token: getAccessToken(),
          "Content-Type": "multipart/form-data",
        },
        data: avatar,
      });

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAvatarUser = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `${URL_SERVER}/users/avatar`,
        headers: {
          access_token: getAccessToken(),
        },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const editStatusUser = (status) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "PATCH",
        url: `${URL_SERVER}/users/status`,
        headers: {
          access_token: getAccessToken(),
        },
        data: {
          status,
        },
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const newChatFromExplore = (userId, componentDispatch) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${URL_SERVER}/groups/${userId}`,
        headers: {
          access_token: getAccessToken(),
        }
      });
      console.log({data, fn: "newChatFromExplore"});

      return data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const handleSetIsCalling = (state) => {
  return (dispatch, getState) => {
    dispatch(setIsCalling(state));
  }
}

export const leaveGroup = (groupId) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: 'DELETE',
        url: `${URL_SERVER}/groupmembers/${groupId}`,
        headers: {
          access_token: getAccessToken(),
        }
      })

      const { groupReducer } = getState()

      const allGroups = []
      const groupGroups = []

      groupReducer.allGroups.forEach(el => {
        if (el.id !== data.GroupId) {
          allGroups.push(el)
        }
      })

      groupReducer.groupGroups.forEach(el => {
        if (el.id !== data.GroupId) {
          groupGroups.push(el)
        }
      })

      dispatch(setCounterpartUser({}))
      dispatch(setAllGroups(allGroups))
      dispatch(setGroupGroups(groupGroups))
    } catch (error) {
      return error
    }
  }
}

export const handleSetIsIncomingCall = (state) => {
  return (dispatch, getState) => {
    dispatch(setIsIncomingCall(state));
  }
}


export const readMessages = (groupId) => {
  return (dispatch, getState) => {
      return axios({
        method: 'PATCH',
        url: `${URL_SERVER}/groups/${groupId}/messages`,
        headers: {
          access_token: getAccessToken(),
        }
      })
  }
}

export const deleteFriendship = (friendId) => {
  return (dispatch, getState) => {
      return axios({
        method: 'DELETE',
        url: `${URL_SERVER}/friendships/${friendId}`,
        headers: {
          access_token: getAccessToken(),
        }
      })
  }
}

export function openChat(group, componentDispatch) {
  return (dispatch, getState) => {
    const { groupReducer, userReducer } = getState();
    const { allGroups } = groupReducer;
    const { thisUser } = userReducer;

    if (group.type === "dm") {
      for (const user of group.GroupMembers) {
        console.log("[member openChat]", user);
        if (user.User.id !== thisUser.id) {
          componentDispatch(handleSetCounterpartUser(user.User));
          break;
        }
      }

      if (group.unreadMessageCount > 0) {
        componentDispatch(readMessages(group.id))
          .then((res) => {
            componentDispatch(setGroupMessagesRead(group.id));
          })
          .catch((err) => {
            swalError(err);
          });
      }
    } else {
      componentDispatch(handleSetCounterpartUser(group));
    }

    console.log(group, "<<<<< GROUP openChat");
    componentDispatch(setOpenChat(group));
    componentDispatch(handleFetchMessagesByGroupId(group.id));
  }
}
