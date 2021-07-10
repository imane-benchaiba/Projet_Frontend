import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";
import IconTrash from "../../img/icons/trash.svg";

const DeleteCard = (props) => {
  const dispatch = useDispatch();

  const deleteQuote = () => dispatch(deletePost(props.id));

  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer cet article ?")) {
          deleteQuote();
        }
      }}
    >
      <img src={IconTrash} alt="trash" />
    </div>
  );
};

export default DeleteCard;
