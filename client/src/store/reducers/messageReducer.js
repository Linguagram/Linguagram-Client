import { FETCH_MESSAGES_BY_GROUPID, ADD_MESSAGE, DELETE_MESSAGE } from "../actions/actionTypes"

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
                currentMessages: state.currentMessages.concat(action.payload),
            }
        case DELETE_MESSAGE:
            const messages = state.currentMessages.slice();
            const indx = messages.findIndex(mess => mess.id === action.payload.id);

            if (indx >= 0) messages[indx].deleted = true;
            return {
                ...state,
                currentMessages: messages,
            }
        default:
            return state
    }
}
