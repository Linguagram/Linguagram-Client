import { FETCH_INTERESTS } from "../actions/actionTypes";

const initialState = {
  interestList: []
};

export default function interestReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_INTERESTS:
      return {
        ...state,
        interestList: action.payload
      }
    default:
      return state
  }
}
