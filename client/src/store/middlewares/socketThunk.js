import io from "socket.io-client";
import { URL_SERVER } from "../../baseUrl";
import { swalErrorStr } from "../../util/swal";
import {
  setSocketConnect,
  addMessage,
  deleteMessage,
  editMessage,
  setOpenChat,
  setCounterpartUser,
} from "../actions/actionCreator";
import { SOCKET_EVENTS } from "../actions/socketEvents";
import { handleSetThisUser } from "./thunk";


export const initSocket = (socketDispatch) => {
  return (dispatch, getState) => {
    const { socketReducer} = getState();

    if (socketReducer.socketConnect) return;

    const socket = io.connect(`${URL_SERVER}`)

    socket.on(SOCKET_EVENTS.CONNECTION, () => {
      console.log("[ws] Connected to server:", URL_SERVER);

      const userId = localStorage.user_id;
      console.log("[ws] Identifying with userId:", userId)
      socket.emit(SOCKET_EVENTS.IDENTIFY, { userId }); 
    });

    socket.on(SOCKET_EVENTS.MESSAGE, (message) => {
      console.log("[ws MESSAGE]", message);
      const { sectionReducer } = getState()

      if (!message) return;
      if (sectionReducer.openChat?.id !== message?.GroupId) return;
      socketDispatch(addMessage(message));
    });

    socket.on(SOCKET_EVENTS.MESSAGE_DELETE, (message) => {
      console.log("[ws MESSAGE_DELETE]", message);
      const { sectionReducer } = getState()

      if (!message) return;
      if (sectionReducer.openChat?.id !== message?.GroupId) return;
      socketDispatch(deleteMessage(message));
    });

    socket.on(SOCKET_EVENTS.MESSAGE_EDIT, (message) => {
      console.log("[ws MESSAGE_EDIT]", message);
      const { sectionReducer } = getState()

      if (!message) return;
      if (sectionReducer.openChat?.id !== message?.GroupId) return;
      socketDispatch(editMessage(message));
    });

    socket.on(SOCKET_EVENTS.USER_UPDATE, (user) => {
      console.log("[ws USER_EDIT]", user);

      // check if current user actually the user from server
      const { userReducer, sectionReducer } = getState();
      const uId = userReducer.thisUser?.id;
      // console.log("[ws USER_UPDATE]", user.id, uId);
      if (uId !== user.id) {
        const { openChat } = sectionReducer;
        if (!openChat || openChat.type !== "dm") return;
        const userIndex = openChat.GroupMembers.findIndex(gm => gm.UserId === user.id);
        if (userIndex === -1) return;
        socketDispatch(setCounterpartUser(user));
        return;
      }
      socketDispatch(handleSetThisUser(user));
    });

    socket.on(SOCKET_EVENTS.GROUP_UPDATE, (group) => {
      console.log("[ws GROUP_UPDATE]", group);

      // check if current user actually the user from server
      const { sectionReducer } = getState();
      const uId = sectionReducer.openChat?.id;
      if (uId !== group.id) return;
      socketDispatch(setOpenChat(group));
    });

    socket.on(SOCKET_EVENTS.FRIEND_REQUEST, (friendship) => {
      console.log("[ws FRIEND_REQUEST]", friendship);

      // check if current user actually the user from server
      const { sectionReducer } = getState();
      // !TODO
    });

    socket.on(SOCKET_EVENTS.FRIEND_REQUEST_ACCEPT, (friendship) => {
      console.log("[ws FRIEND_REQUEST_ACCEPT]", friendship);
      // !TODO
    });

    socket.on(SOCKET_EVENTS.FRIEND_REQUEST_DELETE, (friendship) => {
      console.log("[ws FRIEND_REQUEST_DELETE]", friendship);
      // !TODO
    });

    socket.on(SOCKET_EVENTS.ONLINE, (user) => {
      console.log("[ws ONLINE]", user);
      // !TODO
    });

    socket.on(SOCKET_EVENTS.OFFLINE, (user) => {
      console.log("[ws OFFLINE]", user);
      // !TODO
    });

    socket.on(SOCKET_EVENTS.ERROR, (error) => {
      console.error("[ws ERROR]", error);
      swalErrorStr(error.message);
    });

    dispatch(setSocketConnect(socket));
  };
}

export const closeSocket = () => {
  return (dispatch, getState) => {
    const { socketReducer } = getState();

    if (socketReducer.socketConnect) {
      socketReducer.socketConnect.close(1000, {
        userId: localStorage.user_id,
      });

      dispatch(setSocketConnect(null));
    }
  };
}
