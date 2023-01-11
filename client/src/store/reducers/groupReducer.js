import {
  FETCH_GROUPS,
  FETCH_GROUP_GROUPS,
  FETCH_PRIVATE_GROUPS,
  FETCH_ALL_GROUPS,
  ADD_ALL_GROUPS,
  ADD_PRIVATE_GROUPS,
  ADD_GROUP_GROUPS,
  SET_GROUP_MESSAGES_READ,
  SET_FILTERED_GROUPS,
} from "../actions/actionTypes";

const initialState = {
  privateGroups: [],
  groupGroups: [],
  allGroups: [],
  filteredGroups: []
};

export default function groupReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_GROUPS:
      return {
        ...state,
        allGroups: action.payload,
    };
    case SET_FILTERED_GROUPS:
      return {
        ...state,
        filteredGroups: action.payload,
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
    case ADD_ALL_GROUPS:
      const groups = state.allGroups.concat(action.payload);
      console.log(groups, "<<<<<<<< allGroups");
      return {
        ...state,
        allGroups: groups,
      };
    case ADD_PRIVATE_GROUPS:
      return {
        ...state,
        privateGroups: state.privateGroups.concat(action.payload),
      };
    case ADD_GROUP_GROUPS:
      return {
        ...state,
        groupGroups: state.groupGroups.concat(action.payload),
      };
    case SET_GROUP_MESSAGES_READ:
      const indx = state.allGroups.find(g => g.id === action.payload);
      let newAllGroups;
      if (indx !== -1) {
        newAllGroups = state.allGroups.slice();
        newAllGroups[indx].unreadMessageCount = 0;
      }
      return {
        ...state,
        allGroups: newAllGroups || state.allGroups,
      };
    default:
      return state;
  }
}
