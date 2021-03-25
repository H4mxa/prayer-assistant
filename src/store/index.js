import { createStore } from 'redux';
import serviceApp from 'reducers/index';

const logger = (store) => {
  return (nextDispatch) => {
    /*
      we are returning here function which will take some action. 
      When we providing dispatch function to our store dispatch we need to follow exact same structure of orignal dispatch
      function. Orignal dispatch function take action and dispatch function to reducer. 
    */
    return (action) => {
      console.group(action.type);
      console.log('%c prev state', 'color: gray', store.getState());
      console.log('%c action', 'color: blue', action);
      const returnValue = nextDispatch(action);
      // Now as we dispatch action, our store should be updated. dispatch will called reducer and it should update our state
      console.log('%c next state', 'color: green', store.getState());
      console.groupEnd(action.type);
      return returnValue;
    };
  };
};

const promise = (store) => (nextDispatch) => (action) => {
  if (typeof action.then === 'function') {
    return action.then(nextDispatch);
  }
  return nextDispatch(action);
};

const thunk = (store) => (nextDispatch) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  } else {
    return nextDispatch(action);
  }
};

const applyMiddlewares = (store, middlewares) => {
  middlewares
    .slice()
    .reverse()
    .forEach((middlewares) => {
      store.dispatch = middlewares(store)(store.dispatch);
    });
};

/* You need to remember few things first in redux.
    Actions | Action creators
    dispatch
    reducers
    connect
*/
const initStore = () => {
  const middlewares = [thunk];

  const browserSupport =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(serviceApp, browserSupport);

  // overwriting dispatch function
  // add dispatch to addlogger only when we are in development environment
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }
  applyMiddlewares(store, middlewares);
  return store;
};

export default initStore;
