import { createStore, combineReducers } from 'redux';
import servicesReducer from 'reducers';

const addLoggerToDispatch = (store) => {
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

const addPromiseToDispatch = (store) => (nextDispatch) => (action) => {
  if (typeof action.then === 'function') {
    return action.then(nextDispatch);
  }
  return nextDispatch(action);
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
  const middlewares = [addPromiseToDispatch];
  // initialize store
  const serviceApp = combineReducers({
    // You'll specify here "state" you want to keep in your application
    // the key will be our service and the value will be function because reducer are functions that return "state"
    // ---------------------- this is move to new file reducer -------------
    /*
      service: (state = { items: [] }, action) => {
        if (action.type === 'FETCH_SERVICES') {
          return { ...state, items: action.services };
        }
        return state;
      },
    */
    service: servicesReducer,
  });

  const browserSupport =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(serviceApp, browserSupport);

  // overwriting dispatch function
  // add dispatch to addlogger only when we are in development environment
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(addLoggerToDispatch);
  }
  applyMiddlewares(store, middlewares);
  return store;
};

export default initStore;
