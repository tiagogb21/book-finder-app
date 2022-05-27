import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getDataAPI } from '../../product/fetch/api';

import semimagem from '../../assets/img/semimagem.png';

import './Main.css';

export default function Home() {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const getInfo = await getDataAPI();
    setBooks(getInfo);
  };

  const changeBooks = useSelector((state) => state);

  function addBookCreation(bookItem) {
    return { type: 'ADD_BOOK', bookItem };
  }

  const dispatch = useDispatch();

  function addBook(val) {
    dispatch(addBookCreation(val));
  }

  useEffect(() => {
    setBooks(changeBooks.bookReducer.data);
  }, [changeBooks]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const teste = (val) => {
    addBook(val);
  };

  return (
    <header className="header__book__container">
      <section className="section__book__container">
        {books.length === 0 ? (
          <h3 style={{
            height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
          >
            Loading ...
          </h3>
        ) : (
          books.map(({ id, volumeInfo }) => (
            <article key={id} className="article__book__box">
              <img
                src={
                  volumeInfo.imageLinks
                    ? volumeInfo.imageLinks.smallThumbnail
                    : semimagem
                }
                alt={volumeInfo.title}
              />
              <article className="article__book__info">
                <h3>{volumeInfo.title}</h3>
                <p>
                  <span>Published:</span>
                  {' '}
                  {volumeInfo.publishedDate}
                </p>
                <p>
                  <span>Authors:</span>
                  {' '}
                  {volumeInfo.authors}
                </p>
                <Link
                  className="more__details"
                  onClick={() => teste(volumeInfo)}
                  to={`/book/${id}`}
                >
                  More
                  {' '}
                  <span className="arrow" />
                </Link>
              </article>
            </article>
          ))
        )}
      </section>
    </header>
  );
}
