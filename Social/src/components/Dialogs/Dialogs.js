import React from "react";
import dialogStyle from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
// ссылка на компонент (обычно надо избегать такой записи и использовать event.target.value)
    let newMessageElement = React.createRef();
// создает массив объектов с разметкой DialogItem
    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem key = {dialog.id} name={dialog.name} id={dialog.id}/>);
// создает массив объектов с разметкой Message
    let messagesElements = props.dialogsPage.messagesData.map(message => <Message key = {message.id} message={message.message}/>);
// изменить state при изменении поля.(реализация без библиотеки) Не используется! работа с полями и формами ведется при помощи библиотеки redux-form
  /*  let messageChange = () => {
        let message = newMessageElement.current.value;
        props.updateNewMessageText(message);
    }*/
// Добавить сообщение (реализация без библиотеки) Не используется! работа с полями и формами ведется при помощи библиотеки redux-form
    let addMessage = () => {
        props.addMessage();
    }

    let addNewMessage = (formData) => {
        // formData приходят все поля и значения (библиотека redux-form)
        console.log(formData);
        props.addMessage(formData.newMessageBody);
    }

    if(!props.isAuth) {
        // если не авторизован то верни на страницу авторизации
        return <Redirect to={"/login"}/>
    }

    return (
        <div className={dialogStyle.dialogWrapper}>
            <div className={dialogStyle.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={dialogStyle.messageWrapper}>
                <div>{ messagesElements }</div>
                <div>
                    <AddMessageFormRedux onSubmit = {addNewMessage}/>
                </div>
            </div>
        </div>
    )
}
// обертка в тег form для работы с библиотекой redux-form
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
// обертка для работы с библиотекой redux-form
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;
