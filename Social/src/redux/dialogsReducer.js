//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'; // после подключения библиотеки redux-form нативный метод тригера изменений по нажатию не нужен он будет существовать под капотом в redux-form
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
/*    const _updateNewMessageText = (newMessageText) => {
        return {
            ...state,
            newMessageText: newMessageText
        };
    };*/
    const _addMessage = (newMessageBody) => {
        if(newMessageBody){
            let newMessage = {
                id: state.messagesData[state.messagesData.length - 1].id*1 + 1,
                message: newMessageBody
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        }
        return state;
    };

    switch (action.type) {
       // case UPDATE_NEW_MESSAGE_BODY: return _updateNewMessageText(action.newMessageText);
        case SEND_MESSAGE: return _addMessage(action.newMessageBody);
        default: return state;
    }
};

export const addMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
/*export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageText: text
});*/

export default dialogsReducer;
