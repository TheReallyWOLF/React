import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setIsUsersFetching, toggleFollowingProgress
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {userAPI} from "../../api/api";

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
            this.props.setIsUsersFetching(true);

            userAPI.getUsers(page, this.props.pageSize).then(data => {
                    this.props.setIsUsersFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
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
                   followingInProgress = {this.props.followingInProgress}
                   toggleFollowingProgress = {this.props.toggleFollowingProgress}
                   onPageChanged = {this._onPageChanged}/>
        </>
    }
}

// 1 вариант написания (устаревший)
/*let mapDispatchToProps = (dispatch) => {
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
}*/

// 2 вариант написания (упрощенный) акшион креэйторы переименованы
/*let mapDispatchToProps = {
    follow: follow,
    unfollow: unfollow,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setTotalUsersCount: setTotalUsersCount,
    setIsUsersFetching: setIsUsersFetching
}*/

// Как писали раньше ВЫШЕ сейчас современный синтаксис позволяет писать так:
let mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsUsersFetching,
    toggleFollowingProgress
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isUsersFetch: state.usersPage.isUsersFetch,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)