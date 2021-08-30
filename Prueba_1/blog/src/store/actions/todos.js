import * as types from '../actionsTypes';

export const getTodos = (dispatch, userId) => {
    dispatch({
        type: types.SET_TODOS,
        loadingTodos: true,
        todos: null
    })
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: types.SET_TODOS,
                loadingTodos: false,
                todos: json
            })
        })
        .catch(err => {
            console.error("getTodos", err);
            dispatch({
                type: types.SET_TODOS,
                loadingTodos: false,
                todos: []
            })
        })
}

export const createTodo = (newTodo) => new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            resolve(json);
        });
})