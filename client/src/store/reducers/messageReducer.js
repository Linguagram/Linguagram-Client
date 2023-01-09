import { FETCH_MESSAGES_BY_GROUPID } from "../actions/actionTypes"

const initialState = {
    currentMessages: []
}

export default function messageReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_MESSAGES_BY_GROUPID:
            return {
                ...state,
                currentMessages: action.payload
            }
        default:
            return state
    }
}
