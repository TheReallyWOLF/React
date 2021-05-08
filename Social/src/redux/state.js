import {rerenderEntireTree} from "../render";

let state = {
    dialogsPage: {
        dialogsData: [
            {id: '1', name: 'Dima'},
            {id: '2', name: 'Yora'},
            {id: '3', name: 'Wolf'},
            {id: '4', name: 'Lissa'},
            {id: '5', name: 'Admin'}
        ],
        messagesData: [
            {id: '1', message: "Ку!"},
            {id: '2', message: "Ку а рри"},
            {id: '3', message: "Пшел вон!"},
            {id: '4', message: "ДА!"},
            {id: '5', message: "Нет!"}
        ],
    },
    profilePage: {
        postsData: [
            {id: '1', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
            {id: '2', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
            {id: '3', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
            {id: '4', message: 'Hi, how ate you?', likeCount: '10', dislikeCount: '0'},
            {id: '5', message: 'It,s my first post!', likeCount: '5', dislikeCount: '2'}
        ],
    },
    sidebar: {}
}

export let addPost = (postMessage) => {
    if (postMessage) {
        let newPost = {
            id: state.profilePage.postsData[state.profilePage.postsData.length - 1].id + 1,
            message: postMessage,
            likeCount: 0,
            dislikeCount: 0
        };
        state.profilePage.postsData.push(newPost);
        rerenderEntireTree(state);
    }
}

export default state;
