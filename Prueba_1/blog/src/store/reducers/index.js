import { combineReducers } from 'redux';
import users from './users';
import todos from './todos';
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
    users,
    todos,
    posts,
    comments
})

export default rootReducer;