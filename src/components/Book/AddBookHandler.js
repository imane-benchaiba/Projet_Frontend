import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../Utils";
import {
  read,
  unRead
} from "../../actions/user.actions";

const AddBookHandler = ({ idRead, type }) => {
  const userData = useSelector((state) => state.userReducer);
  const [isRead, setIsRead] = useState(false);
  const dispatch = useDispatch();


  const handleRead = () => {
    dispatch(read(userData._id, idRead));
    setIsRead(true);
  };
  const handleUnRead = () => {
    dispatch(unRead(userData._id, idRead));
    setIsRead(false);
  };

  useEffect(() => {
    if (!isEmpty(userData.read)) {
      if (userData.read.includes(idRead)) {
        setIsRead(true);
      } else setIsRead(false);
    }
  }, [userData, idRead]);

  return (
    <div >
        {isRead && !isEmpty(userData) && (
          <span onClick={handleUnRead}>
            {type === "suggestion" && <button className="unread-book-button" >Ajouté !</button>}
            {type === "card" && <button className="unread-book-button">Ajouté !</button>}
          </span>          
        )}
        {isRead === false && !isEmpty(userData) && (
          <span onClick={handleRead}>
            {type === "suggestion" && <button className="read-book-button" >Ajouter</button>}
            {type === "card" && <button className="read-book-button">Ajouter à mes livres</button>}
          </span>          
        )}
      </div>
  );
};

export default AddBookHandler;
