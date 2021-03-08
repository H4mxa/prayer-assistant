import { createStore, combineReducers } from 'redux';
import servicesReducer from 'reducers';

const addLoggerToDispatch = (store) => {
  const dispatch = store.dispatch;
  /*
    we are returning here function which will take some action. 
    When we providing dispatch function to our store dispatch we need to follow exact same structure of orignal dispatch
    function. Orignal dispatch function take action and dispatch function to reducer. 
  */
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = dispatch(action);
    // Now as we dispatch action action, our store should be updated. dispatch will called reducer and it should update our state
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

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
  // overwriting dispatch function
  store.dispatch = addLoggerToDispatch(store);
  return store;
};

export default initStore;
