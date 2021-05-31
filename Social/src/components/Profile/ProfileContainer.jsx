import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId: '13';
        this.props.getUserProfileThunkCreator(userId);
    }

    render() {
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
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    // HOC
    withAuthRedirect
)(ProfileContainer)
