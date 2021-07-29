import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AuthorPopup = ({ book }) => {
  const authorData = useSelector((state) => state.authorReducer);
  return (
    <>
      <ul>
        {authorData.map((author) => {
          if (book.author === author.authorName) {
            return (
              <li key={author._id}>
                <div className="author-pic">
                  <img src={author.picture} alt="user-pic" />
                </div>
                <div>
                  <h3>{author.authorName}</h3>
                  <h4>
                    Né(e) le {author.birthday} en {author.country}
                  </h4>
                  <br />
                  <h4>Biographie :</h4>
                  <h5 className="author-bio">{author.bio}</h5>
                </div>
              </li>
            );
          }
        return null;
        })}
      </ul>
    </>
  );
};
export default AuthorPopup;
