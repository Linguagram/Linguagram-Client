import { SET_THIS_USER } from "../actions/actionTypes"

const initialState = {
    thisUser: {},
    friend: {}
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_THIS_USER:
            return {
                ...state,
                thisUser: action.payload
            }
        default:
            return state
    }
}