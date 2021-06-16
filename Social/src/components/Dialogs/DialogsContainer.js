import React from "react";
import {addMessageActionCreator} from "../../redux/dialogsReducer"; // updateNewMessageTextActionCreator
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        /*updateNewMessageText: (message) => {
            dispatch(updateNewMessageTextActionCreator(message));
        },*/
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody));
        }
    };
};
// HOC
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
