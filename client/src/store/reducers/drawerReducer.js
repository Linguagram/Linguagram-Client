import { SET_HOME_DRAWER } from "../actions/actionTypes";

const initialState = {
  homeDrawer: false,
};

export default function drawerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HOME_DRAWER:
      return {
        ...state,
        homeDrawer: action.payload,
      };
    default:
      return state;
  }
}
