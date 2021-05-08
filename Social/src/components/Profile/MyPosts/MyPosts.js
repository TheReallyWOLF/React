import React from "react";
import profileModule from './MyPosts.module.css';
import Post from "./Post/MyPost"; // Стили для компонента

const MyPosts = (props) => {
    let postsElements = props.postsData.map(post => <Post message = {post.message} like={post.likeCount} disLike={post.dislikeCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={profileModule.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref = { newPostElement }></textarea>
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
