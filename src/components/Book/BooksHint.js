import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils";
import AuthorPopup from "./AuthorPopup";
import AddBookHandler from "./AddBookHandler";

const BooksHint = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [playOnce, setPlayOnce] = useState(true);
  const [booksHint, setBooksHint] = useState([]);
  const bookData = useSelector((state) => state.bookReducer);
  const userData = useSelector((state) => state.userReducer);
  const [authorPopup, setAuthorPopup] = useState(false);

  useEffect(() => {
    const notBookList = () => {
      let array = [];
      bookData.map((book) => {
        if (!book.read.includes(userData._id))
          return array.push(book._id);
      });

      array.sort(() => 0.5 - Math.random());
      if (window.innerHeight > 780) {
        array.length = 5;
      } else if (window.innerHeight > 720) {
        array.length = 4;
      } else if (window.innerHeight > 615) {
        array.length = 3;
      } else if (window.innerHeight > 540) {
        array.length = 1;
      } else {
        array.length = 0;
      }
      setBooksHint(array);
    };

    if (playOnce && !isEmpty(bookData[0]) && !isEmpty(userData._id)) {
      notBookList();
      setIsLoading(false);
      setPlayOnce(false);
    }
  }, [bookData, userData, playOnce]);

  return (
    <div className="get-books-container">
      <h4>Suggestion de livres</h4>
      {isLoading ? (
        <div className="icon">
          <i className="fas fa-spinner fa-pulse"></i>
        </div>
      ) : (
        <ul>
          {booksHint &&
            booksHint.map((book) => {
              for (let i = 0; i < bookData.length; i++) {
                if (book === bookData[i]._id) {
                  return (
                    <li className="book-hint" key={book}>
                      <img src={bookData[i].picture} alt="user-pic" />
                      <div className="book-infos">
                        <p
                          className="author-name"
                          onClick={() => setAuthorPopup(true)}
                        >
                          {bookData[i].author}
                        </p>
                        <p className="book-name">{bookData[i].bookName}</p>
                      </div>
                      <AddBookHandler idRead={bookData[i]._id} type={"suggestion"} /> 
                      
                      {authorPopup && (
                        <div className="popup-author-container">
                          <div className="modal">
                            <span
                              className="cross"
                              onClick={() => setAuthorPopup(false)}
                            >
                              &#10005;
                            </span>
                            <AuthorPopup book={bookData[i]} />
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }
              }
            })}
        </ul>
      )}
    </div>
  );
};

export default BooksHint;
