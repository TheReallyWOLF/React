const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


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
            newMessageText: 'Введите сообщение'
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
    _addPost() {
        if (this._state.profilePage.newPostText) {
            let newPost = {
                id: this._state.profilePage.postsData[this._state.profilePage.postsData.length - 1].id*1 + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
                dislikeCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = 'занулить';
            this._callSubscriber(this._state);
        }
    },
    _updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },
    _updateNewMessageText(newMessageText){
        this._state.dialogsPage.newMessageText = newMessageText;
        this._callSubscriber(this._state);
    },
    _addMessage(){
        let newMessage = {
            id: this._state.dialogsPage.messagesData[this._state.dialogsPage.messagesData.length - 1].id*1 + 1,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = 'Пусто =)';
        this._callSubscriber(this._state);
    },
    subcribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) { // { type: 'что сделать'}
        if(action.type === ADD_POST){
           this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newPostText);
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._updateNewMessageText(action.newMessageText);
        }else if(action.type === SEND_MESSAGE) {
            this._addMessage();
        } else {
            console.log(`${action.type} не существует`);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
});
export const addMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageText: text
});

export default store;
window.store = store;
