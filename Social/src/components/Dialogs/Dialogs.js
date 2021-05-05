import React from "react";
import dialogStyle from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={dialogStyle.dialog + ' ' + dialogStyle.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={dialogStyle.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={dialogStyle.dialogWrapper}>
            <div className={dialogStyle.dialogsItems}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Yora" id="2"/>
                <DialogItem name="Wolf" id="3"/>
                <DialogItem name="Lissa" id="4"/>
                <DialogItem name="Admin" id="5"/>
            </div>
            <div className={dialogStyle.messageWrapper}>
                <Message message="Ку!"/>
                <Message message="Ку а рри"/>
                <Message message="Пшел вон!"/>
            </div>
        </div>
    )
}

export default Dialogs;
