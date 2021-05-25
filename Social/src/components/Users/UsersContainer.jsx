import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setIsUsersFetching
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
            this.props.setIsUsersFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setIsUsersFetching(false);
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
    setIsUsersFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)