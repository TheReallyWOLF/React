import React from "react";
import profileModule from './MyPosts.module.css';
import Post from "./Post/MyPost";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let postsElements = props.profilePage.postsData.map(post => <Post message = {post.message} like={post.likeCount} disLike={post.dislikeCount}/>);
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={profileModule.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange = { onPostChange } value = { props.profilePage.newPostText } />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
                <div>New post</div>
            </div>
            <div className={profileModule.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
