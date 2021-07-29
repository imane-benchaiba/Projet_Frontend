import {
  GET_USER,
  UPLOAD_PICTURE,
  UPDATE_BIO,
  FOLLOW_USER,
  UNFOLLOW_USER,
  CURRENTLY_READING,
  READ,
  WANT_TO_READ,
  UNCURRENTLY_READING,
  UNREAD,
  UNWANT_TO_READ
} from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPLOAD_PICTURE:
      return {
        ...state,
        picture: action.payload,
      };
    case UPDATE_BIO:
      return {
        ...state,
        bio: action.payload,
      };

    case FOLLOW_USER:
      return {
        ...state,
        following: [action.payload.idToFollow, ...state.following],
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        following: state.following.filter(
          (id) => id !== action.payload.idToUnfollow
        ),
      };
    case CURRENTLY_READING:
      return {
        ...state,
        currentlyreading: [action.payload.idCr, ...state.currentlyreading],
      };
    case READ:
      return {
        ...state,
        read: [action.payload.idRead, ...state.read],
      };
    case WANT_TO_READ:
      return {
        ...state,
        wanttoread: [action.payload.idWtr, ...state.wanttoread],
      };
      case UNCURRENTLY_READING:
        return {
          ...state,
          currentlyreading: state.following.filter(
            (id) => id !== action.payload.idUnCr
          ),
        };
        case UNREAD:
          return {
            ...state,
            read: state.following.filter(
              (id) => id !== action.payload.idUnRead
            ),
          };
          case UNWANT_TO_READ:
      return {
        ...state,
        wanttoread: state.following.filter(
          (id) => id !== action.payload.idUnWtr
        ),
      };

    default:
      return state;
  }
}
