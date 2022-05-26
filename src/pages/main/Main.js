import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getDataAPI,
  getSpecificBookAPI,
  getBookByAuthorAPI,
} from "../../product/api";

import "./Main.css";

export default function Home({ signIn }) {
  const [books, setBooks] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  const getAllBooks = async () => {
    const getInfo = await getDataAPI();
    setBooks(getInfo);
  };

  const getBook = async (query) => {
    const getInfo = await getSpecificBookAPI(query);
    setBooks(getInfo);
  };

  console.log(books);

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <header className="header__book__container">
      <section className="section__search__container">
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
      </section>

      <section className="section__book__container">
        {books.length === 0 ? (
          <h3>Loading ...</h3>
        ) : (
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
                <p>
                  <span>Published:</span> {volumeInfo.publishedDate}
                </p>
                <p>
                  <span>Authors:</span> {volumeInfo.authors}
                </p>
                <Link className="more__details" to={`/book/${id}`}>
                  More <span class="arrow"></span>
                </Link>
              </article>
            </article>
          ))
        )}
      </section>
    </header>
  );
}
