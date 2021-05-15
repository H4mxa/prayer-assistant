import db from "db";

import firebase from "firebase/app";
import "firebase/auth";

// -------------------- SERVICES -------------------
export const fetchServiceById = (serviceId) => {
  return db
    .collection("services")
    .doc(serviceId)
    .get()
    .then((snapshot) => ({ id: snapshot.id, ...snapshot.data() }));
};

export const fetchServices = () => {
  // fetching data from firebase
  return (
    db
      .collection("services")
      // this will get my data
      .get()
      .then((snapshot) => {
        // now uh can get this data from snapshot like this
        const services = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        return services;
      })
  );
};

// -------------------- SERVICES END -------------------

// -------------------- AUTH -------------------

export const register = async ({ email, password, fullName, avatar }) => {
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const { user } = res;
    return true;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
