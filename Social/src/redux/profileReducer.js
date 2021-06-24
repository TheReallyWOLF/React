import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    postsData: [
        {id: '1', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '2', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '3', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '4', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '5', message: 'It,s my first post!', likeCount: '5', dislikeCount: '2'}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    const _addPost = (newPostBody) => {
        if (newPostBody) {
            let newPost = {
                id: state.postsData[state.postsData.length - 1].id*1 + 1,
                message: action.newPostBody,
                likeCount: 0,
                dislikeCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }
        return state;
    };
    const _setProfile = (profile) => {
        return {
            ...state,
            profile: profile
        }
    };
    const _setUserStatus = (status) => {
        return {
            ...state,
            status: status
        }
    };

    switch (action.type) {
        case ADD_POST: return _addPost(action.newPostBody);
        case SET_USER_PROFILE: return _setProfile(action.profile);
        case SET_USER_STATUS: return _setUserStatus(action.status);
        default: return state;
    }
};

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
// Thunk
export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await  profileAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));
};
export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);

    if (response) {
        dispatch(setUserStatus(response.data));
    }
};
export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0){
        dispatch(setUserStatus(status));
    }
};


export default profileReducer;
