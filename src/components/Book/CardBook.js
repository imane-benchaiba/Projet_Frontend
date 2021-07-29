import React, { useState } from "react";
import IconMessage from "../../img/icons/message1.svg";
import AuthorPopup from "./AuthorPopup";
import CardBookComments from "./CardBookComments";
import AddBookHandler from "./AddBookHandler";

const CardBook = ({ book }) => {
  const [showComments, setShowComments] = useState(false);
  const [authorPopup, setAuthorPopup] = useState(false);
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
        <div className="popup-author-container">
          <div className="modal">
            <span className="cross" onClick={() => setAuthorPopup(false)}>
              &#10005;
            </span>
            <AuthorPopup book={book} />
          </div>
        </div>
      )}

      <div className="card-book-footer">
      <AddBookHandler idRead={book._id} type={"card"} />  

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
