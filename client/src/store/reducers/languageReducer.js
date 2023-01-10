import { FETCH_LANGUAGES } from "../actions/actionTypes";

const initialState = {
  languageList: []
};

export default function languageReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_LANGUAGES:
      return {
        ...state,
        languageList: action.payload
      }
    default:
      return state
  }
}
