import {
  FETCH_EXPLORE_GROUPS,
  FETCH_EXPLORE_USERS,
} from "../actions/actionTypes";

const initialState = {
  users: [],
  groups: [],
};

export default function exploreReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EXPLORE_USERS:
      return { ...state, users: action.payload };
    case FETCH_EXPLORE_GROUPS:
      return { ...state, groups: action.payload };
    default:
      return state;
  }
}
