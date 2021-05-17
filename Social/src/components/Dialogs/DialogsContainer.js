import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let dialogsPage = store.getState().dialogsPage;
                // изменить state при изменении поля
                let messageChange = (message) => {
                    store.dispatch(updateNewMessageTextActionCreator(message));
                }
                // Добавить сообщение
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }
                return <Dialogs updateNewMessageText={messageChange}
                                addMessage={addMessage}
                                dialogsPage={dialogsPage}/>
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;
