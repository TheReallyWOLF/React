import React from "react";
import dialogStyle from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={dialogStyle.dialogWrapper}>
            <div className={dialogStyle.dialogsItems}>
                <div className={dialogStyle.dialog + ' ' + dialogStyle.active}>
                    <NavLink to="/dialogs/1">Уасиа</NavLink>
                </div>
                <div className={dialogStyle.dialog}>
                    <NavLink to="/dialogs/2">Фиедиа</NavLink>
                </div>
                <div className={dialogStyle.dialog}>
                    <NavLink to="/dialogs/3">Пашиа</NavLink>
                </div>
                <div className={dialogStyle.dialog}>
                    <NavLink to="/dialogs/4">Крансоле</NavLink>
                </div>
                <div className={dialogStyle.dialog}>
                    <NavLink to="/dialogs/5">Свитаа</NavLink>
                </div>
            </div>
            <div className={dialogStyle.messageWrapper}>
                <div className={dialogStyle.message}>
                    Ку!
                </div>
                <div className={dialogStyle.message}>
                    Ку а рри
                </div>
                <div className={dialogStyle.message}>
                    Пшел вон!
                </div>
            </div>
        </div>
    )
}

export default Dialogs;