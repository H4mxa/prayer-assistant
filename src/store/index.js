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
    service: () => ({ testingData: 'Hello world', testingNumber: 10 }),
  });

  const store = createStore(
    serviceApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default initStore;

const services = [
  {
    id: '2asd8sa7d98',
    user: 'some_id_1',
    category: 'mathematics',
    title: 'I will teach you math fast!',
    description:
      'I am teaching highschool mathematics, algebra, triogometry. I can teach you anything!',
    price: 10, //per hour
    image:
      'https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 'ssa9d789as7',
    user: 'some_id_2',
    category: 'programming',
    title: 'I will teach you Programming fast!',
    description: 'I am teaching C++, C#, JS ...',
    price: 10, //per hour
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
];

export const getServices = () => [...services];
