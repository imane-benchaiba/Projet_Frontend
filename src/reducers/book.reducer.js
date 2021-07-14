import { GET_BOOKS } from "../actions/book.actions";

const initialState = {};

export default function bookReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS: return action.payload;
        default: return state;
    }
}