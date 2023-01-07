import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import sectionReducer from "./reducers/sectionReducer";
import drawerReducer from "./reducers/drawerReducer";

const rootReducer = combineReducers ({
    sectionReducer,
    drawerReducer
})

const store = createStore(rootReducer, applyMiddleware( thunk))
export default store