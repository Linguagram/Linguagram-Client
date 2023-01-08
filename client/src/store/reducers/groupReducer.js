import { FETCH_GROUPS, FETCH_GROUP_GROUPS, FETCH_PRIVATE_GROUPS, FETCH_ALL_GROUPS } from "../actions/actionTypes";

const initialState = {
  privateGroups: [],
  groupGroups: [],
  allGroups: []
};

export default function groupReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_GROUPS:
      return {
        ...state,
        allGroups: action.payload,
    };
    case FETCH_PRIVATE_GROUPS:
      return {
        ...state,
        privateGroups: action.payload,
    };
    case FETCH_GROUP_GROUPS:
      return {
        ...state,
        groupGroups: action.payload,
    };
    default:
      return state;
  }
}
