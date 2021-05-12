import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

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
