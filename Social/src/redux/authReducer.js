import {headerAPI} from "../api/api";

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
