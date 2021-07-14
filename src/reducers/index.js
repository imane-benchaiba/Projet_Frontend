import { combineReducers } from "redux";
import userReducer from './user.reducer';
import usersReducer from "./users.reducer";
import postReducer from "./post.reducer";
import bookReducer from "./book.reducer";

export default combineReducers({
    userReducer,
    usersReducer,
    postReducer, 
    bookReducer
});