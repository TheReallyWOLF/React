import React from "react";
import profileModule from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state"; // Стили для компонента

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage = {props.profilePage}
                     addPost = { props.addPost }
                     updateNewPostText = { props.updateNewPostText }
            />
        </div>
    )
}

export default Profile;
