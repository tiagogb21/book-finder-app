import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store/store";
import Routes from "./_config/routes/index";

import "./App.css";

import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <Header className="app__header" />
      <Routes />
      <Footer />
    </Provider>
  );
}

export default App;
