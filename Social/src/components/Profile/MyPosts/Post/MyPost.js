import React from "react";
import profileModule from './MyPost.module.css'; // Стили для компонента

const Post = (props) => {
    return (
        <div className={profileModule.item}>
            <img src='https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg'/>
            {props.message}
            <p>
                <span>like: </span>{props.like} &nbsp;
                <span>dislike: </span>{props.disLike}
            </p>
        </div>
    )
}

export default Post;
