import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  getSpecificBookAPI,
  getBookByAuthorAPI,
} from '../../product/fetch/api';

import './Header.css';

import magnifyingglass from '../../assets/img/magnifyingglass.png';

const verify = true;

export default function Header() {
  const [books, setBooks] = useState([]);

  const getBook = async (query) => {
    const getInfo = await getSpecificBookAPI(query);
    setBooks(getInfo);
  };

  const getBookByAuthor = async (query) => {
    const getInfo = await getBookByAuthorAPI(query);
    setBooks(getInfo);
  };

  function addBookCreation(booksList) {
    return { type: 'ADD_BOOKS_LIST', booksList };
  }

  // Recebe dados do reducer:
  // const booksT = useSelector((state) => state);
  // console.log(booksT.bookReducer.data);

  // Envia dados para o reducer:
  const dispatch = useDispatch();
  function addBooks() {
    dispatch(addBookCreation(books));
  }

  return (
    <header className="header__container">
      <h1 className="header__title">Book Finder App</h1>
      {verify && (
        <section className="section__container">
          <label htmlFor="input-search">
            <input
              type="text"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  addBooks();
                }
              }}
              id="input-search"
              onChange={({ target }) => getBook(target.value) && getBookByAuthor(target.value)}
              placeholder="Type author, book name, subject..."
            />
          </label>
          <button type="button" id="search-btn" onClick={() => addBooks()}>
            <img src={magnifyingglass} alt="magnifying glass" />
          </button>
        </section>
      )}
    </header>
  );
}
