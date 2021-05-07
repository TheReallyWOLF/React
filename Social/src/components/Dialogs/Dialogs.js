import React from "react";
import dialogStyle from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
// создает массив объектов с разметкой DialogItem
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
// создает массив объектов с разметкой Message
    let messagesElements = props.messagesData.map(message => <Message message={message.message}/>);

    return (
        <div className={dialogStyle.dialogWrapper}>
            <div className={dialogStyle.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={dialogStyle.messageWrapper}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;
