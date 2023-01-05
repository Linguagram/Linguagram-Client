import { SET_ACTIVE_SECTION } from "../actions/actionTypes"

const initialState = {
    user: false,
    group: false,
    message: true,
    address: false,
    gear: false,
    explore: false
}

export default function sectionReducer(state = initialState, action) {
    switch(action.type) {
        case SET_ACTIVE_SECTION:
            return {
                user: false,
                group: false,
                message: false,
                address: false,
                gear: false,
                explore: false,
                [action.payload]: true
            }
        default:
            return state
    }
}