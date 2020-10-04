import React from "react";
import dialogStyle from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={dialogStyle.dialogWrapper}>
            <div className={dialogStyle.dialogsItems}>
                <div className={dialogStyle.dialog + ' ' + dialogStyle.active}>
                    Уасиа
                </div>
                <div className={dialogStyle.dialog}>
                    Фиедиа
                </div>
                <div className={dialogStyle.dialog}>
                    Пашиа
                </div>
                <div className={dialogStyle.dialog}>
                    Крансоле
                </div>
                <div className={dialogStyle.dialog}>
                    Свитаа
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