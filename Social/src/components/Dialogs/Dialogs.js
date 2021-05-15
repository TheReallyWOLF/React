import React from "react";
import dialogStyle from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
// ссылка на компонент (обычно надо избегать такой записи и использовать event.target.value)
    let newMessageElement = React.createRef();
// создает массив объектов с разметкой DialogItem
    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
// создает массив объектов с разметкой Message
    let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}/>);
// изменить state при изменении поля
    let messageChange = () => {
        let message = newMessageElement.current.value;
        props.updateNewMessageText(message);
    }
// Добавить сообщение
    let addMessage = () => {
        props.addMessage();
    }

    return (
        <div className={dialogStyle.dialogWrapper}>
            <div className={dialogStyle.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={dialogStyle.messageWrapper}>
                <div>{ messagesElements }</div>
                <div>
                    <div>
                        <textarea onChange={ messageChange }
                                   ref = { newMessageElement }
                                   value = { props.dialogsPage.newMessageText }
                                   placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={ addMessage }>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
