import { SET_OPEN_CHAT } from "../actions/actionTypes"

const initialState = {
    openChat: null
}

export default function sectionReducer(state = initialState, action) {
    switch(action.type) {
        case SET_OPEN_CHAT:
            return {
                ...state,
                openChat: action.payload
            }
        default:
            return state
    }
}
