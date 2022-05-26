import React from "react";
import { useSelector } from "react-redux";

export default function Book({ signIn }) {
  const book = useSelector((state) => state.data);
  return (
    <ul>
      <li>
        <img src={book.imageLinks.smallThumbnail} alt={book.title} />
      </li>
      <li>Title: {book.title}</li>
      <li>Subtitle: {book.subtitle}</li>
      <li>Authors: {book.authors}</li>
      <li>Pages: {book.pageCount}</li>
      <li>Categories: {book.categories}</li>
      <li>Description: {book.description}</li>
      <li>Preview Link: {book.previewLink}</li>
    </ul>
  );
}
