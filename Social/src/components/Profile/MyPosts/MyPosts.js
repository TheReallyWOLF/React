import React from "react";
import profileModule from './MyPosts.module.css';
import Post from "./Post/MyPost"; // Стили для компонента

const MyPosts = () => {
    return (
        <div className={profileModule.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>New post</div>
            </div>
            <div className={profileModule.posts}>
                <Post message = 'Hi, how ate you?' like='2' disLike='10'/>
                <Post message = 'It,s my first post!' like='12' disLike='3'/>
            </div>
        </div>
    )
}

export default MyPosts;
