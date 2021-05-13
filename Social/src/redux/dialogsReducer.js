const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {

    const _updateNewMessageText = (newMessageText) => {
        state.newMessageText = newMessageText;
        return state;
    };
    const _addMessage = () => {
        let newMessage = {
            id: state.messagesData[state.messagesData.length - 1].id*1 + 1,
            message: state.newMessageText
        };
        state.messagesData.push(newMessage);
        state.newMessageText = 'Пусто =)';
        return state;
    };

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: return _updateNewMessageText(action.newMessageText);
        case SEND_MESSAGE: return _addMessage();
        default: return state;
    }
};

export const addMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageText: text
});

export default dialogsReducer;
