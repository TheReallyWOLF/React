const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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

export default profileReducer;
