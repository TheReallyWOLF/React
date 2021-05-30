import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId: '17240';
        this.props.getUserProfileThunkCreator(userId);
    }

    render() {
        if(!this.props.isAuth) {
            // если не авторизован то верни на страницу авторизации
            return <Redirect to={"/login"}/>
        }

        return (
           <Profile { ...this.props } profile={ this.props.profile }/>
        )
    }
}

let mapDispatchToProps = {
    getUserProfileThunkCreator
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
};

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);
