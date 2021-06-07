import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId: '17240';
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId);
    }

    render() {
        return (
           <Profile { ...this.props }
                    profile = { this.props.profile }
                    status = { this.props.status }
                    updateStatus = {this.props.updateUserStatusThunkCreator}
           />
        )
    }
}

let mapDispatchToProps = {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    // HOC
    withAuthRedirect
)(ProfileContainer)
