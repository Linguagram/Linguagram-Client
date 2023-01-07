import { FETCH_ALL_MESSAGES } from "../actions/actionTypes"

const initialState = {
    messages: []
}

export default function messageReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ALL_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }
        default:
            return state
    }
}