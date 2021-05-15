const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: '1', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '2', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '3', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '4', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '5', message: 'It,s my first post!', likeCount: '5', dislikeCount: '2'}
    ],
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
            state.postsData.push(newPost);
            state.newPostText = 'занулить';
        }
        return state;
    };
    const _updateNewPostText = (newPostText) => {
        state.newPostText = newPostText;
        return state;
    };

    switch (action.type) {
        case ADD_POST: return _addPost();
        case UPDATE_NEW_POST_TEXT: return _updateNewPostText(action.newPostText);
        default: return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
});

export default profileReducer;
