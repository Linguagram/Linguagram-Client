import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import sectionReducer from "./reducers/sectionReducer";


const rootReducer = combineReducers ({
    sectionReducer,
})

const store = createStore(rootReducer, applyMiddleware( thunk))
export default store