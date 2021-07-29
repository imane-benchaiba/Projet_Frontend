import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const CURRENTLY_READING = "CURRENTLY_READING";
export const READ = "READ";
export const WANT_TO_READ = "WANT_TO_READ";
export const UNCURRENTLY_READING = "UNCURRENTLY_READING";
export const UNREAD = "UNREAD";
export const UNWANT_TO_READ= "UNWANT_TO_READ";

export const getUser = (uid) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
            .then((res) => {
                dispatch({ type: GET_USER, payload: res.data });
            })
            .catch((err) => console.log(err));
    }
};
export const uploadPicture = (data, id) => {
    return (dispatch) => {
      return axios
        .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
        .then((res) => {
            return axios 
            .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
            .then((res) => {
                dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture })
            })
        })
        .catch((err) => console.log(err));
    };
};
export const updateBio = (userId, bio) => {
    return (dispatch) => {
      return axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/user/` + userId,
        data: { bio },
      })
        .then((res) => {
          dispatch({ type: UPDATE_BIO, payload: bio });
        })
        .catch((err) => console.log(err));
    };
};
export const followUser = (followerId, idToFollow) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/follow/` + followerId,
      data: { idToFollow },
    })
      .then((res) => {
        dispatch({ type: FOLLOW_USER, payload: { idToFollow } });
      })
      .catch((err) => console.log(err));
  };
};
export const unfollowUser = (followerId, idToUnfollow) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/unfollow/` + followerId,
      data: { idToUnfollow },
    })
      .then((res) => {
        dispatch({ type: UNFOLLOW_USER, payload: { idToUnfollow } });
      })
      .catch((err) => console.log(err));
  };
};
  


export const currentlyReading = (id, idCr) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/currentlyreading/` + id,
      data: { idCr },
    })
      .then((res) => {
        dispatch({ type: CURRENTLY_READING, payload: { idCr } });
      })
      .catch((err) => console.log(err));
  };
};
export const read = (id, idRead) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/read/` + id,
      data: { idRead },
    })
      .then((res) => {
        dispatch({ type: READ, payload: { idRead } });
      })
      .catch((err) => console.log(err));
  };
};
export const wantToRead = (id, idWtr) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/wantoread/` + id,
      data: { idWtr },
    })
      .then((res) => {
        dispatch({ type: WANT_TO_READ, payload: { idWtr } });
      })
      .catch((err) => console.log(err));
  };
};

export const unCurrentlyReading = (id, idUnCr) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/uncurrentlyreading/` + id,
      data: { idUnCr },
    })
      .then((res) => {
        dispatch({ type: UNCURRENTLY_READING, payload: { idUnCr } });
      })
      .catch((err) => console.log(err));
  };
};
export const unRead = (id, idUnRead) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/unread/` + id,
      data: { idUnRead },
    })
      .then((res) => {
        dispatch({ type: UNREAD, payload: { idUnRead } });
      })
      .catch((err) => console.log(err));
  };
};
export const unWantToRead = (id, idUnWtr) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/unwanttoread/` + id,
      data: { idUnWtr },
    })
      .then((res) => {
        dispatch({ type: UNWANT_TO_READ, payload: { idUnWtr } });
      })
      .catch((err) => console.log(err));
  };
};