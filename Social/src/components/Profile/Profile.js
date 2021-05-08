import React from "react";
import profileModule from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state"; // Стили для компонента

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData = {props.postsData} addPost = { props.addPost }/>
        </div>
    )
}

export default Profile;
