import React from "react";
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={styles.wrapperSpan}>
                {
                    pages.map(page => {
                        return <span key = {page} onClick={() => {
                            props.onPageChanged(page);
                        }} className={props.currentPage === page ? styles.selectedPage : ''}>{page}</span>
                    })
                }
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                 <img
                                     src={user.photos.small ? user.photos.small : 'https://n1s1.hsmedia.ru/fc/39/33/fc39337433e5e191dd4ecc22ad040fb7/600x600_1_759dfd7b6ed9b9a6cfe0fff51d2b257c@1080x1080_0xac120003_13481422031617037800.jpg'}
                                     alt="Фото" className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed ?
                                <button onClick={() => {
                                    userAPI.unfollow(user.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(user.id);
                                            }
                                        });
                                    }
                                }>Unfollow</button> :
                                <button onClick={() => {
                                    userAPI.follow(user.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id);
                                            }
                                        });
                                    }
                                }>Follow</button>}
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

export default Users;