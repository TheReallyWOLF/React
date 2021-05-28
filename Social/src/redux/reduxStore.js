import {applyMiddleware, combineReducers, createStore} from "redux";

import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
/*
* reducers - прими редюсеры
* applyMiddleware - прими и обрабатывай промежуточные слои (санки)
* */
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
