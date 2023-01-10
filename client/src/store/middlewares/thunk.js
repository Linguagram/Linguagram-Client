import {
  setActiveSection,
  setThisUser,
  setGroups,
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
    const nativeLangObj = user.UserLanguages.find((el) => el.type === "native");
    const interestLangObj = user.UserLanguages.find(
      (el) => el.type === "interest"
    );

    dispatch(setThisUser(user));
    dispatch(setNativeLanguage(nativeLangObj.Language));

    // Added condition to prevent error in development ---------------------------
    if (interestLangObj)
      dispatch(setInterestLanguage(interestLangObj.Language));
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
      nativeLanguage,
      interestLanguage,
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
        phoneNumber,
        country,
        nativeLanguage,
        interestLanguage,
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

export const logOut = (inputs) => {
  return (dispatch, getState) => {
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
      console.log({ data });
      const notAccepted = data.filter((friend) => friend.isAccepted === false);
      const requests = notAccepted.filter(
        (friend) => friend.FriendId == localStorage.user_id
      );
      const friends = data.filter((friend) => friend.isAccepted === true);
      console.log({ friends }, "<<< from thunk");
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
      console.log(friendId);
      const { data } = await axios({
        method: "post",
        url: `${URL_SERVER}/friends/${friendId}`,
        headers: {
          access_token: getAccessToken(),
        },
      });
      /*
        Fetch ulang people untuk mendapatkan
        people yang belum dikirimkan friend request
      */
      // !TODO: insert to friend list?
    } catch (err) {
      swalError(err);
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
        throw new TypeError("content or GroupId or MessageId or UserId can't be empty");

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
      await axios({
        method: "PATCH",
        url: `${URL_SERVER}/friendships/${friendshipId}`,
        headers: {
          access_token: getAccessToken(),
        },
      });
      dispatch(getFriends());
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
      console.log({ groupId }, "<<< dari thunk");
      const { data } = await axios({
        method: "POST",
        url: URL_SERVER + '/groups/' + groupId + '/join',
        headers: {
          access_token: getAccessToken(),
        },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };
};

export const changeAvatarUser = (data) => {
  return async (dispatch, getState) => {
    try {
      const { avatar } = data
      const res = await axios({
        method: 'POST',
        url: `${URL_SERVER}/users/avatar`,
        headers: {
          access_token: getAccessToken(),
          "Content-Type": "multipart/form-data",
        },
        data: avatar
      })

      return res.data
    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteAvatarUser = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: 'DELETE',
        url: `${URL_SERVER}/users/avatar`,
        headers: {
          access_token: getAccessToken()
        },
      })

      return data
    } catch (error) {
      console.log(error);
    }
  }
}