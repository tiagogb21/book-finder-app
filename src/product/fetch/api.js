import { URL_API_KEY } from "../../_environments/ignore";

const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=search-terms&key=${URL_API_KEY}`;

const SPECIFIC_BOOK_URL = "https://www.googleapis.com/books/v1/volumes?q=";

const SEARCH_BY_AUTHOR_URL =
  "https://www.googleapis.com/books/v1/volumes?q=inauthor:";

export const getDataAPI = () => {
  const fetchData = fetch(BASE_URL)
    .then((response) => response.json())
    .then((result) => result.items);
  return fetchData;
};

export const getSpecificBookAPI = (query) => {
  const fetchData = fetch(`${SPECIFIC_BOOK_URL}${query}`)
    .then((response) => response.json())
    .then((result) => result.items);
  return fetchData;
};

export const getBookByAuthorAPI = (query) => {
  const fetchData = fetch(`${SEARCH_BY_AUTHOR_URL}${query}&key=${URL_API_KEY}`)
    .then((response) => response.json())
    .then((result) => result.items);
  return fetchData;
};
