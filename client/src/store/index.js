import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import userReducer from "./reducers/userReducer";
import sectionReducer from "./reducers/sectionReducer";
import groupReducer from "./reducers/groupReducer";
import messageReducer from "./reducers/messageReducer";
import drawerReducer from "./reducers/drawerReducer";
import socketReducer from "./reducers/socketReducer";
import videoReducer from "./reducers/videoReducer";
import exploreReducer from "./reducers/exploreReducer";
import friendReducer from "./reducers/friendReducer";
import languageReducer from "./reducers/languageReducer";

const rootReducer = combineReducers ({
    drawerReducer,
    userReducer,
    sectionReducer,
    groupReducer,
    messageReducer,
    socketReducer,
    videoReducer,
    socketReducer,
    exploreReducer,
    friendReducer,
    languageReducer
})

const store = createStore(rootReducer, applyMiddleware( thunk))
export default store