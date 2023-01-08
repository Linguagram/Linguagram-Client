import {
  setActiveSection,
  setThisUser,
  setGroups,
  setAllMessages,
  setPrivateGroups,
  setGroupGroups,
} from "../actions/actionCreator";
import { URL_SERVER } from "../../baseUrl";
import axios from "axios";
import swal from "sweetalert";

const jwt =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjcyOTc4NjE4fQ.SUaOajp4WM-GI7qFy3BPq6wQR-j3VP11v8PXYjKa9pI";

const getAccessToken = () => {
  return localStorage.getItem("access_token");
};

export const handleSetThisUser = (user) => {
  return (dispatch, getState) => {
    dispatch(setThisUser(user));
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
      const privateGroups = data.filter(el => el.type === 'dm')
      const groupGroups = data.filter(el => el.type === 'group')
      dispatch(setPrivateGroups(privateGroups));
      dispatch(setGroupGroups(groupGroups));
    } catch (err) {
      // console.log(err);
      return err
    }
  };
};

export const handleFetchAllMessagesByGroupId = (groups) => {
  return async (dispatch, getState) => {
    try {
      const array = [];

      groups.forEach(async (el) => {
        const { data } = await axios({
          method: "get",
          url: `${URL_SERVER}/groups/${el.GroupId}/messages`,
          headers: {
            access_token: jwt,
          },
        });
        if (data.length > 0) array.push(data);
      });

      dispatch(setAllMessages(array));
    } catch (err) {
      console.log(err);
    }
  };
};
