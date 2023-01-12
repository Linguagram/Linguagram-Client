import { CHANGE_NAVBAR_COLOR } from "../actions/actionTypes";

const initialState = {
  color: false,
}

export default function navbarReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAVBAR_COLOR:
      return {
        ...state,
        color: action.payload
      }
    default:
      return state;
  }
}