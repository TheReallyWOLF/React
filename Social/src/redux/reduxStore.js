import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";

import appReducer from "./appReducer";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    form: formReducer, // валидация форм библиотека (redux-form)
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})
/*
* reducers - прими редюсеры
* applyMiddleware - прими и обрабатывай промежуточные слои (санки)
* */
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
