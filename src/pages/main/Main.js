import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getDataAPI } from "../../product/fetch/api";

import "./Main.css";

export default function Home({ signIn }) {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const getInfo = await getDataAPI();
    setBooks(getInfo);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <header className="header__book__container">
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
                  More <span className="arrow"></span>
                </Link>
              </article>
            </article>
          ))
        )}
      </section>
    </header>
  );
}
