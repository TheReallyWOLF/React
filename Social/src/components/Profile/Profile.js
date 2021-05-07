import React from "react";
import profileModule from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo"; // Стили для компонента

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData = {props.postsData}/>
        </div>
    )
}

export default Profile;
