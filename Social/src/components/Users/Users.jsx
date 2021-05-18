import React from "react";
import styles from "./users.module.css"

let Users = (props) => {
    if (props.users.length === 0){
        props.setUsers(
            [
                {id: '1', photoUrl: 'https://pechater.ru/wp-content/uploads/2019/08/foto-ot-pechaterfoto-vjcrdf-679x1024.jpg', isFollowed: false, fullName: 'Wolf', status: 'I am a Boss', location: {city: 'Paris', country: 'Fran'}},
                {id: '2', photoUrl: 'https://pechater.ru/wp-content/uploads/2019/08/foto-ot-pechaterfoto-vjcrdf-679x1024.jpg', isFollowed: true, fullName: 'Wolf', status: 'I am a Boss', location: {city: 'Paris', country: 'Fran'}},
                {id: '3', photoUrl: 'https://pechater.ru/wp-content/uploads/2019/08/foto-ot-pechaterfoto-vjcrdf-679x1024.jpg', isFollowed: false, fullName: 'Wolf', status: 'I am a Boss', location: {city: 'Paris', country: 'Fran'}},
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(user => <div key={user.id} >
                    <span>
                        <div>
                            <img src={user.photoUrl} alt="Фото" className={styles.userPhoto}/>
                        </div>
                        <div>
                            { user.isFollowed ?
                                <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> :
                                <button onClick={() => {props.follow(user.id)}}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;