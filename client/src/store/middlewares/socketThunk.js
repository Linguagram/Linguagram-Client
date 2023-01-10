import io from "socket.io-client";
import { URL_SERVER } from "../../baseUrl";
import { swalErrorStr } from "../../util/swal";
import {
  setSocketConnect,
  addMessage,
  deleteMessage,
  editMessage,
} from "../actions/actionCreator";
import { SOCKET_EVENTS } from "../actions/socketEvents";

export const initSocket = (socketDispatch) => {
  return (dispatch, getState) => {
    const { socketReducer, sectionReducer } = getState();

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

      if (!message) return;
      if (sectionReducer.openChat?.id !== message?.GroupId) return;
      socketDispatch(addMessage(message));
    });

    socket.on(SOCKET_EVENTS.MESSAGE_DELETE, (message) => {
      console.log("[ws MESSAGE_DELETE]", message);

      if (!message) return;
      if (sectionReducer.openChat?.id !== message?.GroupId) return;
      socketDispatch(deleteMessage(message));
    });

    socket.on(SOCKET_EVENTS.MESSAGE_EDIT, (message) => {
      console.log("[ws MESSAGE_EDIT]", message);

      if (!message) return;
      if (sectionReducer.openChat?.id !== message?.GroupId) return;
      socketDispatch(editMessage(message));
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
