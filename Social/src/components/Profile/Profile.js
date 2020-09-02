import React from "react";
import profileModule from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts"; // Стили для компонента

const Profile = () => {
    return (
        <div className={profileModule.content}>
            <div>
                <img className={profileModule.imageProfile} src="https://wallpapershome.ru/images/pages/pic_h/6472.jpg"/>
            </div>
            <div>
                <img className={profileModule.imageProfile} src="https://wallpapershome.ru/images/pages/pic_h/6472.jpg"/>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;