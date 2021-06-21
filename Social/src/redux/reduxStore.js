import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";

import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";

let reducers = combineReducers({
    app: appReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer // валидация форм библиотека (redux-form)
})
/*
* reducers - прими редюсеры
* applyMiddleware - прими и обрабатывай промежуточные слои (санки)
* */
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
