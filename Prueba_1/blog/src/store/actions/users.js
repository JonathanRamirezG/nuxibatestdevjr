import * as types from '../actionsTypes';

export const getUsers = (dispatch) => {
    dispatch({
        type: types.SET_USERS,
        loadingUsers: true,
        users: null
    })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: types.SET_USERS,
                loadingUsers: false,
                users: json
            })
        })
        .catch(err => {
            console.error("getUsers", err);
            dispatch({
                type: types.SET_USERS,
                loadingUsers: false,
                users: []
            })
        })
}