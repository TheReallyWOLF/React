import React from "react";
import styles from "./users.module.css";
import axios from "axios";

// Users заменена на классовую компоненту UsersClassComponent
let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then(response => {
                    props.setUsers(response.data);
                });
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl} alt="Фото" className={styles.userPhoto}/>
                        </div>
                        <div>
                            {user.isFollowed ?
                                <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                        </span>
                        <span>
                            <div>{user.address.street}</div>
                            <div>{user.address.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;