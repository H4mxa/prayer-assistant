import { createStore, applyMiddleware, compose } from "redux";
import serviceApp from "reducers/index";

import thunk from "redux-thunk";
import { logger } from "redux-logger";

/* You need to remember few things first in redux.
    Actions | Action creators
    dispatch
    reducers
    connect
*/
const initStore = () => {
  const middlewares = [thunk];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // overwriting dispatch function
  // add dispatch to addlogger only when we are in development environment
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }
  const store = createStore(
    serviceApp,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
};

export default initStore;
