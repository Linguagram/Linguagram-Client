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
} from "../actions/actionCreator";
import { URL_SERVER } from "../../baseUrl";
import axios from "axios";
import { swalError } from "../../util/swal";

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
    if(interestLangObj) dispatch(setInterestLanguage(interestLangObj.Language));
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

export const register = (inputs) => {
  return (dispatch, getState) => {
    const { username, email, password, confirmPassword, phoneNumber, country } =
      inputs;

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
      const requests = data.filter(
        (friend) =>
          friend.FriendId == localStorage.user_id && !friend.isAccepted
      );
      const friends = data.filter(
        (friend) => friend.UserId == localStorage.user_id && friend.isAccepted
      );
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
      console.log(friendId)
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
      swalError(err)
    }
  };
};

export const sendMessage = (groupId, formData) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "post",
        url: `${URL_SERVER}/groups/${groupId}/messages`,
        headers: {
          access_token: getAccessToken(),
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });

      dispatch(addMessage(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const handleDeleteMessage = async (groupId, msgId) => {
  try {
    await axios({
      method: "DELETE",
      url: `${URL_SERVER}/groups/${groupId}/messages/${msgId}`,
      headers: {
        access_token: getAccessToken(),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleEditMessage = async (groupId, msgId) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
};

export const handleTranslate = async (content, toLanguage) => {
  try {
    const { data } = await axios({
      method: 'POST',
      url: `${URL_SERVER}/translate`,
      headers: {
        access_token: getAccessToken()
      },
      data: {
        text: content,
        to: toLanguage
      }
    })

    return data.translated
  } catch (error) {
    console.log(error);
  }
}
