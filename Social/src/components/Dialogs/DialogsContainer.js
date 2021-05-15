import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let dialogsPage = props.store.getState().dialogsPage;
// изменить state при изменении поля
    let messageChange = (message) => {
        props.store.dispatch(updateNewMessageTextActionCreator(message));
    }
// Добавить сообщение
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    return (<Dialogs updateNewMessageText = { messageChange }
                     addMessage = { addMessage }
                     dialogsPage = { dialogsPage }/>)
}

export default DialogsContainer;
