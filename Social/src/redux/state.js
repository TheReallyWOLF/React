let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: '1', name: 'Dima'},
                {id: '2', name: 'Yora'},
                {id: '3', name: 'Wolf'},
                {id: '4', name: 'Lissa'},
                {id: '5', name: 'Admin'}
            ],
            messagesData: [
                {id: '1', message: "Ку!"},
                {id: '2', message: "Ку а рри"},
                {id: '3', message: "Пшел вон!"},
                {id: '4', message: "ДА!"},
                {id: '5', message: "Нет!"}
            ],
        },
        profilePage: {
            postsData: [
                {id: '1', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
                {id: '2', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
                {id: '3', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
                {id: '4', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
                {id: '5', message: 'It,s my first post!', likeCount: '5', dislikeCount: '2'}
            ],
            newPostText: 'Введите сообщение'
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subcribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    addPost() {
        if (this._state.profilePage.newPostText) {
            let newPost = {
                id: this._state.profilePage.postsData[this._state.profilePage.postsData.length - 1].id + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
                dislikeCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = 'занулить';
            this._callSubscriber(this._state);
        }
    },
    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },
    dispatch(action) { // { type: 'что сделать'}
        if(action.type === 'ADD-POST'){
            let flag = this._state.profilePage.newPostText;
            if (flag) {
                let newPost = {
                    id: this._state.profilePage.postsData[this._state.profilePage.postsData.length - 1].id + 1,
                    message: this._state.profilePage.newPostText,
                    likeCount: 0,
                    dislikeCount: 0
                };
                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.newPostText = 'занулить';
                this._callSubscriber(this._state);
            }
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;
