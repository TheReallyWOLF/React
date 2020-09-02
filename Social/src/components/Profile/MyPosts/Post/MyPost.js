import React from "react";
import profileModule from './MyPost.module.css'; // Стили для компонента

const Post = () => {
    return (
        <div className={profileModule.item}>
            <img src='https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg'/>
            post 1
            <div>
                <span>like</span>
                <span>dislike</span>
            </div>
        </div>
    )
}

export default Post;