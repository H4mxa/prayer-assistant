import {
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_SUCCESS,
  REQUEST_SERVICE,
  SET_AUTH_USER,
} from "types";

import * as api from "api";
/*
// fecting from database
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
*/

export const fetchServices = () => (dispatch) => {
  return api.fetchServices().then((services) =>
    dispatch({
      type: FETCH_SERVICES_SUCCESS,
      services,
    })
  );
};

export const fetchServiceById = (serviceId) => (dispatch, getState) => {
  // checking equality of serviceid with id of service of state
  const lastService = getState().selectedService.item;

  if (lastService.id && lastService.id === serviceId) {
    return Promise.resolve();
  }

  dispatch({ type: REQUEST_SERVICE });
  return api.fetchServiceById(serviceId).then((service) =>
    dispatch({
      type: FETCH_SERVICE_SUCCESS,
      service,
    })
  );
};

export const register = (registerFormData) =>
  api.register({ ...registerFormData });

export const login = (loginData) => api.login({ ...loginData });

export const onAuthStateChanged = (onAuthCallback) =>
  api.onAuthStateChanged(onAuthCallback);

export const storeAuthUser = (authUser) => (dispatch) => {
  if (authUser) {
    return api
      .getUserProfile(authUser.uid)
      .then((userWithProfile) =>
        dispatch({ user: userWithProfile, type: SET_AUTH_USER })
      );
  } else {
    return dispatch({ user: null, type: SET_AUTH_USER });
  }
};
