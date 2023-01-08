import { SET_SOCKET } from "../actions/actionTypes"

const initialState = {
    socketConnect: {}
}

export default function socketReducer(state = initialState, action) {
    switch(action.type) {
        case SET_SOCKET:
            return {
                ...state,
                socketConnect: action.payload
            }
        default:
            return state
    }
}