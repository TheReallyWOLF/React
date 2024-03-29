import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
// свой стор (велосипед) НЕ ИСПОЛЬЗУЕТСЯ!
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
    subcribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sideBarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
