import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setIsUsersFetchingActionCreator
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersClassComponent extends React.Component {
// если конструктор ничего не делает кроме вызова super то можно его не писать
    constructor(props) {
        super(props);
    }

// в этом методе жизненого цикла надо делать все запросы
    componentDidMount() {
        this._getUsers();
    }

    _onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this._getUsers(page);
    }

    _getUsers = (page = this.props.currentPage) => {
        if (this.props.users.length === 0 || page) {
            this.props.setIsUsersFetchingActionCreator(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setIsUsersFetchingActionCreator(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    }

    render() {
        return <>
            { this.props.isUsersFetch ? <Preloader/> : null }
            <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      users = {this.props.users}
                      unfollow = {this.props.unfollow}
                      follow = {this.props.follow}
                      isUsersFetch = {this.props.isUsersFetch}
                      onPageChanged = {this._onPageChanged}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isUsersFetch: state.usersPage.isUsersFetch
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageActionCreator(page));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        },
        setIsUsersFetchingActionCreator: (isUsersFetch) => {
            dispatch(setIsUsersFetchingActionCreator(isUsersFetch))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)