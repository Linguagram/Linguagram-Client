import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import sectionReducer from "./reducers/sectionReducer";
import userReducer from "./reducers/userReducer";


const rootReducer = combineReducers ({
    sectionReducer, userReducer
})

const store = createStore(rootReducer, applyMiddleware( thunk))
export default store