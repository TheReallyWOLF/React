import React from "react";
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollowThunkCreator, followThunkCreator}) => {
    return (
        <div>
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
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {unfollowThunkCreator(user.id)}}>
                            Unfollow
                        </button> :
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {followThunkCreator(user.id)}}>
                            Follow
                        </button>}
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
        </div>
    )
}

export default User;