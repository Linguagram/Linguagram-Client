import { SET_USER } from "../actions/actionTypes"

const initialState = {
    data: {}
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}