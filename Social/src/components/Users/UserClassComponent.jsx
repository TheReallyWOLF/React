import React from "react";
import styles from "./users.module.css";
import axios from "axios";


class UsersClassComponent extends React.Component{
// если конструктор ничего не делает кроме вызова super то можно его не писать
    constructor(props) {
        super(props);
    }
// в этом методе жизненого цикла надо делать все запросы
    componentDidMount() {
        this._getUsers();
    }

    _getUsers = (page = this.props.currentPage) => {
        if (this.props.users.length === 0 || page) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    }

    _onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this._getUsers(page);
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1;i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div className={styles.wrapperSpan}>
                    {
                        pages.map(page => {
                            return <span onClick={() => {this._onPageChanged(page);}} className={this.props.currentPage === page && styles.selectedPage}>{ page }</span>
                        })
                    }
                </div>
                {
                    this.props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small ? user.photos.small :  'https://n1s1.hsmedia.ru/fc/39/33/fc39337433e5e191dd4ecc22ad040fb7/600x600_1_759dfd7b6ed9b9a6cfe0fff51d2b257c@1080x1080_0xac120003_13481422031617037800.jpg'} alt="Фото" className={styles.userPhoto}/>
                        </div>
                        <div>
                            {user.isFollowed ?
                                <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    this.props.follow(user.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.id}</div>
                        </span>
                        <span>
                            <div>{user.uniqueUrlName ? user.uniqueUrlName : 'нет ссылки'}</div>
                            <div>{user.status ? user.status : 'нет статуса'}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}

export default UsersClassComponent;