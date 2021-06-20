import {headerAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export default authReducer;
// Thunk
export const getAuthUserDataThunkCreator = () => {
    return (dispatch) => {
        headerAPI.getMe()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        let {id, login, email} = response.data.data;
                        dispatch(setAuthUserData(id, email, login, true));
                    }
                }
            )
    }
};

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        headerAPI.login(email, password, rememberMe)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(getAuthUserDataThunkCreator());
                    } else {
                        /* первый параметр форма второй параметр это имя пооля или общий ключ для формы _error куда будет выводится ошибка для пользователя*/
                        // stopSubmit используется что бы сообщить валидации что запрос пришел с ошибкой
                        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Неправильное имя пользователя или пароль"
                        let action = stopSubmit("login", {_error: errorMessage});
                        // _error можно взять из ответа от сервера или забить значение
                        dispatch(action);
                    }
                }
            )
    }
};

export const logoutThunkCreator = () => {
    return (dispatch) => {
        headerAPI.logout()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUserData(null, null, null, false));
                    }
                }
            )
    }
};
