import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ConnectedRouter } from "connected-react-router";

import Main from "../../pages/main/Main";
import Book from "../../pages/book/Book";
import history from "./history";

const BooksRoutes = () => {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/book/:id" exact element={<Book />} />
        {/* <Route path="*" element={<Pagina404 />} /> */}
      </Routes>
    </Router>
  );
};

export default BooksRoutes;
