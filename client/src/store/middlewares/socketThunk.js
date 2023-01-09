import io from "socket.io-client";
import { handleSetSocketConnect } from "./thunk";
import { URL_SERVER } from "../../baseUrl";
import { setSocketConnect } from "../actions/actionCreator";

const SOCKET_EVENTS = {
  CONNECTION: "connect",
  DISCONNECT: "disconnect",
  IDENTIFY: "identify",
  ERROR: "error",

  ONLINE: "user_online",
  OFFLINE: "user_offline",

  MESSAGE: "message",
  MESSAGE_EDIT: "message_edit",
  MESSAGE_DELETE: "message_delete",

  // STATUS: "status", // dijadiin satu sama user update
  USER_UPDATE: "user_update",

  GROUP_CREATE: "group_create",
  GROUP_JOIN: "group_join",
  GROUP_LEAVE: "group_leave",
  GROUP_DELETE: "group_delete",
  GROUP_UPDATE: "group_update",

  FRIEND_REQUEST: "friend_request",
  FRIEND_REQUEST_DELETE: "friend_request_delete",
  FRIEND_REQUEST_ACCEPT: "friend_request_accept",

  SCHEDULE: "schedule",
  SCHEDULE_CANCEL: "schedule_cancel",
}

export const initSocket = () => {
  return (dispatch, getState) => {
    const { socketReducer } = getState();

    if (socketReducer.socketConnect) return;

    const socket = io.connect(`${URL_SERVER}`)

    socket.on(SOCKET_EVENTS.CONNECTION, () => {
      console.log("[ws] Connected to server:", URL_SERVER);

      const userId = localStorage.userId;
      console.log("[ws] Identifying with userId:", userId)
      socket.emit(SOCKET_EVENTS.IDENTIFY, { userId }); 
    });

    socket.on(SOCKET_EVENTS.ERROR, (error) => {
      console.error(error);
    });

    dispatch(setSocketConnect(socket));
  };
}

export const closeSocket = () => {
  return (dispatch, getState) => {

  };
}
