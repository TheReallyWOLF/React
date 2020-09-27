import React from "react";
import profileModule from './MyPosts.module.css';
import Post from "./Post/MyPost"; // Стили для компонента

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
           <div>New post</div></div>
           <Post message = 'Hi, how ate you?'/>
           <Post message = 'It,s my first post!'/>
        </div>
    )
}

export default MyPosts;