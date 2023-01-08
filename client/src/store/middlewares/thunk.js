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
} from "../actions/actionCreator";
import { URL_SERVER } from "../../baseUrl";
import axios from "axios";

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
    dispatch(setInterestLanguage(interestLangObj.Language));
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

      const privateGroups = data.filter((el) => el.type === "dm");
      const groupGroups = data.filter((el) => el.type === "group");
      dispatch(setAllGroups(data));
      dispatch(setPrivateGroups(privateGroups));
      dispatch(setGroupGroups(groupGroups));
    } catch (err) {
      // console.log(err);
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
    } catch (err) {
      console.log(err);
    }
  };
};

export const getFriendRequest = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `${URL_SERVER}/friends`,
        headers: {
          access_token: getAccessToken(),
        },
      });
      return data
    } catch (err) {
      console.log(err);
    }
  };
};
