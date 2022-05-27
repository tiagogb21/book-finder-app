import React from 'react';
import { useSelector } from 'react-redux';

import './Book.css';

export default function Book() {
  const getBook = useSelector((state) => state);

  const { book } = getBook.bookReducer;

  return (
    <section className="book__container__info">
      <img src={book.imageLinks.smallThumbnail} alt={book.title} />
      <section>
        <p>
          <span>Title:</span>
          {' '}
          {book.title}
        </p>
        <p>
          <span>Subtitle:</span>
          {' '}
          {book.subtitle}
        </p>
        <p>
          <span>Authors:</span>
          {' '}
          {book.authors}
        </p>
        <p>
          <span>Pages:</span>
          {' '}
          {book.pageCount}
        </p>
        <p>
          <span>Categories:</span>
          {' '}
          {book.categories}
        </p>
        <p>
          <span>Description:</span>
          {' '}
          {book.description}
        </p>
        <p>
          <span>Preview Link:</span>
          {' '}
          {book.previewLink}
        </p>
      </section>
    </section>
  );
}
