import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../../actions/post.actions";
import IconHeart from "../../img/icons/heart.svg";
import IconHeartFilled from "../../img/icons/heart-filled.svg";

const LikeButton = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const like = () => {
    dispatch(likePost(post._id, uid))
    setLiked(true);
  };

  const unlike = () => {
    dispatch(unlikePost(post._id, uid))
    setLiked(false);
  };

  useEffect(() => {
    if (post.likers.includes(uid)) setLiked(true);
    else setLiked(false);
  }, [uid, post.likers, liked]);

  return (
    <div className="like-container">
      {uid && liked === false && (
        <img src={IconHeart} onClick={like} alt="like" />
      )}
      {uid && liked && (
        <img src={IconHeartFilled} onClick={unlike} alt="unlike" />
      )}
      <span>{post.likers.length}</span>
    </div>
  );
};

export default LikeButton;
