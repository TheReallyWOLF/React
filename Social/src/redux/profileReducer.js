import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: '1', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '2', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '3', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '4', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '5', message: 'It,s my first post!', likeCount: '5', dislikeCount: '2'}
    ],
    profile: null,
    newPostText: 'Введите сообщение'
};

const profileReducer = (state = initialState, action) => {
    const _addPost = () => {
        if (state.newPostText) {
            let newPost = {
                id: state.postsData[state.postsData.length - 1].id*1 + 1,
                message: state.newPostText,
                likeCount: 0,
                dislikeCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: 'занулить'
            };
        }
        return state;
    };
    const _updateNewPostText = (newPostText) => {
        return {
            ...state,
            newPostText: newPostText
        };
    };
    const _setProfile = (profile) => {
        return {
            ...state,
            profile: profile
        }
    }

    switch (action.type) {
        case ADD_POST: return _addPost();
        case UPDATE_NEW_POST_TEXT: return _updateNewPostText(action.newPostText);
        case SET_USER_PROFILE: return _setProfile(action.profile);
        default: return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
// Thunk
export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}

export default profileReducer;
