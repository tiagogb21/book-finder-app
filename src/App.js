import React from "react";

import { Provider } from "react-redux";

import store from "./configureStore";

import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <header>Oi</header>
    </Provider>
  );
}
