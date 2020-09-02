import React from "react";
import profileModule from './Profile.module.css'; // Стили для компонента

const Profile = () => {
    return (
        <div className={profileModule.content}>
            <div>
                <img className={profileModule.imageProfile} src="https://wallpapershome.ru/images/pages/pic_h/6472.jpg"/>
            </div>
            <div>
                <img className={profileModule.imageProfile} src="https://wallpapershome.ru/images/pages/pic_h/6472.jpg"/>
            </div>
            <div>
                My post
                <div>New post</div>
            </div>
            <div className={profileModule.item}>
                post 1
            </div>
            <div className={profileModule.item}>
                post 2
            </div>
        </div>
    )
}

export default Profile;