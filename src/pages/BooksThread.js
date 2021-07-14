import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../actions/book.actions";
import LeftNav from "../components/LeftNav";
import { isEmpty } from "../components/Utils";
import CardBook from "../components/Book/CardBook";

const BooksThread = () => {
  const [loadBook, setLoadBook] = useState(true);
  const [count, setCount] = useState(5);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducer);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadBook(true);
    }
  };

  useEffect(() => {
    if (loadBook) {
      dispatch(getBooks(count));
      setLoadBook(false);
      setCount(count + 5);
    }

    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, [loadBook, dispatch, count]);

  return (
    <div className="books-thread-container">
      <LeftNav />

      <div className="books-thread">
        <div className="books-thread-header">
          <div className="search__container">
            <input
              className="search__input"
              type="text"
              placeholder="Chercher un livre, un auteur..."
            ></input>
          </div>
        </div>
        
        <div className="books-thread-main">
          <ul>
            {!isEmpty(books[0]) &&
              books.map((book) => {
                return <CardBook book={book} key={book._id} />;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BooksThread;
