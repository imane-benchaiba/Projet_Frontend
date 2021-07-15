import axios from "axios";

export const GET_AUTHORS = "GET_AUTHORS";

export const getAuthors = (num) => {
    return (dispatch) => {
      return axios
        .get(`${process.env.REACT_APP_API_URL}api/author/`)
        .then((res) => {
          const array = res.data.slice(0, num);
          dispatch({ type: GET_AUTHORS, payload: array });
        })
        .catch((err) => console.log(err));
    };
};