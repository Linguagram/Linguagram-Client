import {
  FETCH_ALL_FRIENDS,
  FETCH_ALL_FRIEND_REQUESTS,
} from "../actions/actionTypes";

const initialState = {
  friends: [],
  friendRequests: [],
  friendsFetched: false,
};

export default function friendReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_FRIENDS:
      return { ...state, friends: action.payload, friendsFetched: true };
    case FETCH_ALL_FRIEND_REQUESTS:
      return { ...state, friendRequests: action.payload };
    default:
      return state;
  }
}
