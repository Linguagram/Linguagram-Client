import { SET_ACTIVE_SECTION, SET_HOME_DRAWER } from "../actions/actionTypes"

const initialState = {
    user: false,
    group: false,
    message: true,
    address: false,
    gear: false,
    explore: false,
    homeDrawer: false
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

        case SET_HOME_DRAWER:
            return {
                ...state,
                homeDrawer: action.payload
            }
        default:
            return state
    }
}