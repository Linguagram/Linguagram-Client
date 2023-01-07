import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import userReducer from "./reducers/userReducer";
import sectionReducer from "./reducers/sectionReducer";
import groupReducer from "./reducers/groupReducer";
import messageReducer from "./reducers/messageReducer";
import drawerReducer from "./reducers/drawerReducer";

const rootReducer = combineReducers ({
    drawerReducer,
    userReducer,
    sectionReducer,
    groupReducer,
    messageReducer
})

const store = createStore(rootReducer, applyMiddleware( thunk))
export default store