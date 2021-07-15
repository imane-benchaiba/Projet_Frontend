import { GET_AUTHORS } from "../actions/author.actions";

const initialState = {};

export default function authorReducer(state = initialState, action) {
    switch (action.type) {
        case GET_AUTHORS: return action.payload;
        default: return state;
    }
}