import * as types from '../actionsTypes';

export const getPosts = (dispatch, userId) => {
    dispatch({
        type: types.SET_POSTS,
        loadingPosts: true,
        posts: null
    })
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: types.SET_POSTS,
                loadingPosts: false,
                posts: json
            })
        })
        .catch(err => {
            console.error("getPosts", err);
            dispatch({
                type: types.SET_POSTS,
                loadingPosts: false,
                posts: []
            })
        })
}
