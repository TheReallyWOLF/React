import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    // HOOK
    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);
    /*
    под капотом
    let stateWithSetState = useState(false); - возращает массив
    let editMode = stateWithSetState[0]; - значение
    let setEditMode = stateWithSetState[1]; - функция которая может изменять это значение
    */
// синхронизируйся когда изменится props.status (аналог жизненного цикла через HOOK)
    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { !editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
            </div>
            }
            { editMode &&
            <div>
                <input onBlur={deactivateEditMode} onChange={onStatusChange} autoFocus={true} value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
