import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  getDataAPI,
  getSpecificBookAPI,
  getBookByAuthorAPI,
} from "../../product/api";

import "./Home.css";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [specificBook, setSpecificBook] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  const getAllBooks = async () => {
    const getInfo = await getDataAPI();
    setBooks(getInfo);
  };

  const getBook = async (query) => {
    const getInfo = await getSpecificBookAPI(query);
    setSpecificBook(getInfo);
  };

  const getBookByAuthor = async (query) => {
    const getInfo = await getBookByAuthorAPI(query);
    console.log(getInfo);
    setSpecificBook(getInfo);
  };

  const history = useHistory();

  console.log(history);

  const redirectToBook = () => {};

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <header className="header__book__container">
      <label htmlFor="input-search">
        <input
          type="text"
          id="input-search"
          value={inputSearch}
          onChange={({ target }) => setInputSearch(target.value)}
        />
      </label>

      <button type="button" onClick={() => getBook(inputSearch)}>
        Search
      </button>

      <button type="button" onClick={() => getBookByAuthor(inputSearch)}>
        Search
      </button>

      <section className="section__book__container">
        {books.length > 0 &&
          books.map(({ id, volumeInfo }) => (
            <article key={id} className="article__book__box">
              <img
                src={
                  volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail
                }
                alt={volumeInfo.title}
              />
              <article className="article__book__info">
                <h3>{volumeInfo.title}</h3>
                <p>Published: {volumeInfo.publishedDate}</p>
                <p>Authors: {volumeInfo.authors}</p>
                <button onClick={() => redirectToBook()}>+ Details</button>
              </article>
            </article>
          ))}
      </section>
    </header>
  );
}
