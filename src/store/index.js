import { createStore, combineReducers } from 'redux';

/* You need to remember few things first in redux.
    Actions | Action creators
    dispatch
    reducers
    connect
*/
const initStore = () => {
  // initialize store
  const serviceApp = combineReducers({
    // You'll specify here "state" you want to keep in your application
    // the key will be our service and the value will be function because reducer are functions that return "state"
    service: (state = { items: [] }, action) => {
      debugger;
      if (action.type === 'FETCH_SERVICES') {
        return { ...state, items: action.services };
      }
      return state;
    },
  });

  const store = createStore(
    serviceApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default initStore;
