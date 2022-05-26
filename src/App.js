import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store/store";
import Routes from "./_config/routes/index";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
