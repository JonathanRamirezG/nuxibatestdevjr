import * as types from '../actionsTypes';

const initialState = {
    posts: null,
    loadingPosts: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_POSTS:
            return {
                ...state,
                loadingPosts: action.loadingPosts,
                posts: action.posts
            }
        default:
            return state;
    }
}

export default reducer;