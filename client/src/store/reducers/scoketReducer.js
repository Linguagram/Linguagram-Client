import { SOCKET_CONNECT } from "../actions/actionTypes"

const initialState = {
    currentSocket: {}
}

export default function socketReducer(state = initialState, action) {
    switch(action.type) {
        case SOCKET_CONNECT:
            // console.log(action.payload, "reducer")
            return {
                ...state,
                currentSocket: action.payload
            }
        default:
            return state
    }
}