import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconMessage from "../../img/icons/message1.svg";
import CardBookComments from "./CardBookComments";

const CardBook = ({ book }) => {
  const [showComments, setShowComments] = useState(false);
  const [authorPopup, setAuthorPopup] = useState(false);
  const authorData = useSelector((state) => state.authorReducer);
  return (
    <li className="card-book-container" key={book._id}>
      <div className="card-book-main">
        <div className="card-left">
          {book.picture && (
            <img src={book.picture} alt="card-book" className="card-book" />
          )}
        </div>
        <div className="card-right">
          {book.author && (
            <h2 className="book-author" onClick={() => setAuthorPopup(true)}>
              {book.author}
            </h2>
          )}
          {book.bookName && <h3 className="book-name">{book.bookName}</h3>}
          {book.editor && (
            <h4 className="book-editor">Editions : {book.editor}</h4>
          )}
          {book.type && <h4 className="book-type">Genre : {book.type}</h4>}
          <br />
          {book.abstract && (
            <h5 className="book-abstract">
              Résumé : <br /> {book.abstract}
            </h5>
          )}
        </div>
      </div>

      {authorPopup && (
        <div className="popup-card-book-container">
          <div className="modal">
            <span className="cross" onClick={() => setAuthorPopup(false)}>
              &#10005;
            </span>
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
                    <h4>Né(e) le {author.birthday} en {author.country}</h4>
                    <br/>
                    <h4>Biographie :</h4>
                    <h5 className="author-bio">{author.bio}</h5>
                    </div>
                  </li>
                ); } return null;
              })}
            </ul>
          </div>
        </div>
      )}

      <div className="card-book-footer">
        <div class="select-book">
          <select>
            <option value="1">Want to read</option>
            <option value="2">Read</option>
            <option value="3">Currently reading</option>
          </select>
        </div>
        <div className="comment-icon">
          <img
            onClick={() => setShowComments(!showComments)}
            src={IconMessage}
            alt="comment"
          />
          <span>{book.comments.length}</span>
        </div>
      </div>
      {showComments && <CardBookComments book={book} />}
    </li>
  );
};

export default CardBook;
