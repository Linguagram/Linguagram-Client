import { FETCH_MESSAGES_BY_GROUPID, ADD_MESSAGE } from "../actions/actionTypes"

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
        case ADD_MESSAGE:
            return {
                ...state,
                currentMessages: state.concat(action.payload),
            }
        default:
            return state
    }
}
