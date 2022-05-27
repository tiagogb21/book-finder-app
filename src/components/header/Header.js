import React, { useState } from "react";

import "./Header.css";

import magnifyingglass from "../../assets/img/magnifyingglass.png";

import { getSpecificBookAPI } from "../../product/fetch/api";

const verify = true;

export default function Header(props) {
  const [books, setBooks] = useState([]);

  const getBook = async (query) => {
    const getInfo = await getSpecificBookAPI(query);
    setBooks(getInfo);
  };

  return (
    <header className="header__container">
      <h1 className="header__title">Book Finder App</h1>
      {verify && (
        <section className="section__container">
          <label htmlFor="">
            <input
              type="text"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  props.onClick();
                }
              }}
              onChange={props.onChange}
              placeholder="Type author, book name, subject..."
            />
          </label>
          <button id="search-btn" onClick={props.onClick}>
            <img src={magnifyingglass} alt="magnifying glass" />
          </button>
        </section>
      )}
    </header>
  );
}
