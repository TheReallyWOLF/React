import React from "react";
import dialogStyle from "./../Dialogs.module.css";
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

export default DialogItem;
