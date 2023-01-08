import { SET_THIS_USER, SET_COUNTERPART_USER } from "../actions/actionTypes"

const initialState = {
    thisUser: {},
    counterpartUser: {}
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_THIS_USER:
            return {
                ...state,
                thisUser: action.payload
            }
        case SET_COUNTERPART_USER:
            return {
                ...state,
                counterpartUser: action.payload
            }
        default:
            return state
    }
}