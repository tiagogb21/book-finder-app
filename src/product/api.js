import { URL_API_KEY } from "../_environments/ignore";

const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=search-terms&key=${URL_API_KEY}`;

export const getData = () => {
  const fetchAPI = fetch(BASE_URL)
    .then((response) => response.json())
    .then((result) => result.items);
  console.log(fetchAPI);
  return fetchAPI;
};
