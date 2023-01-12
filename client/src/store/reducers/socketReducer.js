import { SET_SOCKET, SET_USER_SOCKET_CONNECTED } from "../actions/actionTypes"

const initialState = {
    socketConnect: null,
    userConnected: false,
}

export default function socketReducer(state = initialState, action) {
    switch(action.type) {
        case SET_SOCKET:
            return {
                ...state,
                socketConnect: action.payload
            }
        case SET_USER_SOCKET_CONNECTED:
            return {
                ...state,
                userConnected: action.payload,
            }
        default:
            return state
    }
}
