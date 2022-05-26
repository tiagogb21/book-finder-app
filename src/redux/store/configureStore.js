import { createStore } from "redux";
import rootReducer from "../reducer/rootReducer";

const preloadedState = {};

const store = createStore(rootReducer, preloadedState);

export default store;
