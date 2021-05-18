import React from "react";
import profileModule from './MyPosts.module.css';
import Post from "./Post/MyPost";

const MyPosts = (props) => {
    let postsElements = props.postsElements.map(post => <Post key = {post.id} message = {post.message} like={post.likeCount} disLike={post.dislikeCount}/>);
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={profileModule.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange = { onPostChange } value = { props.newPostText } />
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
