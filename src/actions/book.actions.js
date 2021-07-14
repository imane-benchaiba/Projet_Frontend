import axios from "axios";

// books
export const GET_BOOKS = "GET_BOOKS";
export const LIKE_BOOK = "LIKE_BOOK";
export const UNLIKE_BOOK = "UNLIKE_BOOK";

// comments
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";


export const getBooks = (num) => {
    return (dispatch) => {
      return axios
        .get(`${process.env.REACT_APP_API_URL}api/book/`)
        .then((res) => {
          const array = res.data.slice(0, num);
          dispatch({ type: GET_BOOKS, payload: array });
        })
        .catch((err) => console.log(err));
    };
};
export const likeBook = (bookId, userId) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/book/like-book/` + bookId,
        data: { id: userId },
      })
        .then((res) => {
          dispatch({ type: LIKE_BOOK, payload: { bookId, userId } });
        })
        .catch((err) => console.log(err));
    };
};
export const unlikeBook = (bookId, userId) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/book/unlike-book/` + bookId,
        data: { id: userId },
      })
        .then((res) => {
          dispatch({ type: UNLIKE_BOOK, payload: { bookId, userId } });
        })
        .catch((err) => console.log(err));
    };
};
export const addComment = (bookId, commenterId, text, commenterPseudo) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/book/comment-book/${bookId}`,
        data: { commenterId, text, commenterPseudo },
      })
        .then((res) => {
          dispatch({ type: ADD_COMMENT, payload: { bookId } });
        })
        .catch((err) => console.log(err));
    };
};
export const editComment = (bookId, commentId, text) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/book/edit-comment-book/${bookId}`,
        data: { commentId, text },
      })
        .then((res) => {
          dispatch({ type: EDIT_COMMENT, payload: { bookId, commentId, text } });
        })
        .catch((err) => console.log(err));
    };
};
export const deleteComment = (bookId, commentId) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/book/delete-comment-book/${bookId}`,
        data: { commentId },
      })
        .then((res) => {
          dispatch({ type: DELETE_COMMENT, payload: { bookId, commentId } });
        })
        .catch((err) => console.log(err));
    };
  };