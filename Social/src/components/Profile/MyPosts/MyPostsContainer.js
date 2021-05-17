import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    /*let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }*/

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }
                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    postsElements={state.profilePage.postsData}
                                    newPostText={state.profilePage.newPostText}/>
                }

            }
        </StoreContext.Consumer>)
}

export default MyPostsContainer;
