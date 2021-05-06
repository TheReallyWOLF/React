import React from "react";
import profileModule from './MyPosts.module.css';
import Post from "./Post/MyPost"; // Стили для компонента

const MyPosts = () => {

    let postsData = [
        {id: '1', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '2', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '3', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '4', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
        {id: '5', message: 'It,s my first post!', likeCount: '5', dislikeCount: '2'}
    ]

    let postsElements = postsData.map(post => <Post message = {post.message} like={post.likeCount} disLike={post.dislikeCount}/>)

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
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
