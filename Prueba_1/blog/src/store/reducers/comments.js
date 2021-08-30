import * as types from '../actionsTypes';

const initialState = {
    comments: null,
    loadingComments: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_COMMENTS:
            return {
                ...state,
                loadingComments: action.loadingComments,
                comments: action.comments
            }
        default:
            return state;
    }
}

export default reducer;