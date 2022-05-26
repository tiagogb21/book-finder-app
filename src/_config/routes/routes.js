import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../components/home/Home";
import BookInfo from "../../components/book/BookInfo";

export default (
  <Routes>
    <Route exact path="/" component={Home} />
    <Route exact path="/book/:id" component={BookInfo} />
  </Routes>
);
