import * as types from '../actionsTypes';

const initialState = {
    users: null,
    loadingUsers: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USERS:
            return {
                ...state,
                loadingUsers: action.loadingUsers,
                users: action.users
            }
        default:
            return state;
    }
}

export default reducer;