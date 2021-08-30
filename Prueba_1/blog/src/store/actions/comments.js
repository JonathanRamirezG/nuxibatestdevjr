import * as types from '../actionsTypes';

export const getComments = (dispatch, postId) => new Promise((resolve, reject) => {
    dispatch({
        type: types.SET_COMMENTS,
        loadingComments: true,
        comments: null
    })
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: types.SET_COMMENTS,
                loadingComments: false,
                comments: json
            })
            resolve(json)
        })
        .catch(err => {
            console.error("getComments", err);
            dispatch({
                type: types.SET_COMMENTS,
                loadingComments: false,
                comments: []
            })
        })
})
