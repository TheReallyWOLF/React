import React from "react";
import dialogStyle from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

/*    let dialogsData = [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Yora'},
        {id: '3', name: 'Wolf'},
        {id: '4', name: 'Lissa'},
        {id: '5', name: 'Admin'}
    ];

    let messagesData = [
        {id: '1', message: "Ку!"},
        {id: '2', message: "Ку а рри"},
        {id: '3', message: "Пшел вон!"},
        {id: '4', message: "ДА!"},
        {id: '5', message: "Нет!"}
    ];*/
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
