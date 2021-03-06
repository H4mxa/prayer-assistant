import { createStore, combineReducers } from 'redux';
import servicesReducer from 'reducers';
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

  const store = createStore(
    serviceApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default initStore;
