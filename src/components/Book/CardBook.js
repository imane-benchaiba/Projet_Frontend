import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconMessage from "../../img/icons/message1.svg";
import CardBookComments from "./CardBookComments";

const CardBook = ({ book }) => {
  const [showComments, setShowComments] = useState(false);
  return (
    <li className="card-book-container" key={book._id}>
      <div className="card-book-main">
        <div className="card-left">
          {book.picture && (
            <img src={book.picture} alt="card-book" className="card-book" />
          )}
        </div>
        <div className="card-right">
          {book.author && <h2 className="book-author">{book.author}</h2>}
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
