import { SET_AM_I_THE_CALLER } from "../actions/actionTypes"

const initialState = {
    amITheCaller: false
}

export default function videoReducer(state = initialState, action) {
    switch(action.type) {
        case SET_AM_I_THE_CALLER:
            return {
                ...state,
                amITheCaller: action.payload
            }
        default:
            return state
    }
}