import io from "socket.io-client";
import { handleSetSocketConnect } from "./thunk";
import { URL_SERVER } from "../../baseUrl";
import { setSocketConnect } from "../actions/actionCreator";

export const initSocket = () => {
  return (dispatch, getState) => {
    const { socketReducer } = getState();

    if (socketReducer.socketConnect) return;

    const socket = io.connect(`${URL_SERVER}`)
    socket.emit("identify", {userId: localStorage.userId}); 

    dispatch(setSocketConnect(socket));
  };
}
