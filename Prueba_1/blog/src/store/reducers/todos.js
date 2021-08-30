import * as types from '../actionsTypes';

const initialState = {
    todos: null,
    loadingTodos: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TODOS:
            return {
                ...state,
                loadingTodos: action.loadingTodos,
                todos: action.todos
            }
        default:
            return state;
    }
}

export default reducer;