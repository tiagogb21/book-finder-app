import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import rootReducer from '../reducer/rootReducer';

import history from '../../_config/routes/history';

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(...middlewares),
);

export default store;
