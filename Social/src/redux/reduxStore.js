import {applyMiddleware, combineReducers, compose, createStore} from "redux";
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
// подключил утилиту редакс дев тулс
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// без утилиты редакс дев тулс (дефолт)
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// свой дубль стора в глобальном объекте (не нужен существует ради дев проверок)
window.__store__ = store;

export default store;
