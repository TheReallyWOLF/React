import React from "react";
import dialogStyle from "./../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={dialogStyle.message}>
            {props.message}
        </div>
    )
}

export default Message;
