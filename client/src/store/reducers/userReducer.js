import { SET_COUNTERPART_USER, SET_INCOMING_CALLER, SET_INTEREST_LANGUAGE, SET_IS_CALLING, SET_NATIVE_LANGUAGE, SET_THIS_USER } from "../actions/actionTypes"

const initialState = {
    thisUser: {},
    counterpartUser: {},
    incomingCaller: {},
    nativeLanguage: {},
    interestLanguage: {},
    counterpartUser: {},
    isCalling: false,
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_THIS_USER:
            return {
                ...state,
                thisUser: action.payload
            }
        case SET_NATIVE_LANGUAGE:
            return {
                ...state,
                nativeLanguage: action.payload
            }
        case SET_INTEREST_LANGUAGE:
            return {
                ...state,
                interestLanguage: action.payload
            }
        case SET_COUNTERPART_USER:
            return {
                ...state,
                counterpartUser: action.payload
            }
        case SET_INCOMING_CALLER:
            return {
                ...state,
                incomingCaller: action.payload
            }
        case SET_IS_CALLING:
            return {
                ...state,
                isCalling: action.payload
            }
        default:
            return state
    }
}
