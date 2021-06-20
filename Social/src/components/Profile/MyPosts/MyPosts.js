import React from "react";
import profileModule from './MyPosts.module.css';
import Post from "./Post/MyPost";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";
// функции валидатора
const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    let postsElements = props.postsElements.map(post => <Post key = {post.id} message = {post.message} like={post.likeCount} disLike={post.dislikeCount}/>);
    let addNewPost = (formData) => {
        props.addPost(formData.newPostBody);
    }

    return (
        <div className={profileModule.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit = {addNewPost}/>
                <div>New post</div>
            </div>
            <div className={profileModule.posts}>
                { postsElements }
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name="newPostBody"
                    placeholder="Enter your post"
                    validate = {[requiredField, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm);

export default MyPosts;
