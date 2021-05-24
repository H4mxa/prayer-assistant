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

export const fetchUserServices = (userId) => {
  // fetching data from firebase
  return (
    db
      .collection("services")
      // this will get my data
      .where("user", "==", userId)
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

export const createService = (newService) => {
  return db
    .collection("services")
    .add(newService)
    .then((docRef) => docRef.id);
};

// -------------------- SERVICES END -------------------

// -------------------- AUTH -------------------

const createUserProfile = (userProfile) => {
  return db.collection("profiles").doc(userProfile.uid).set(userProfile);
};

export const register = async ({ email, password, fullName, avatar }) => {
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const { user } = res;
    const userProfile = {
      uid: user.uid,
      fullName,
      email,
      avatar,
      services: [],
      description: "",
    };
    await createUserProfile(userProfile);
    return userProfile;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const login = ({ email, password }) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => Promise.reject(error.message));
};

export const logout = () => firebase.auth().signOut();

export const onAuthStateChanged = (onAuthCallback) =>
  firebase.auth().onAuthStateChanged(onAuthCallback);

export const getUserProfile = (uid) =>
  db
    .collection("profiles")
    .doc(uid)
    .get()
    .then((snapshot) => ({
      uid,
      ...snapshot.data(),
    }));

// export const createUserRef = (uid) => db.doc("profiles/", +uid);

export const createRef = (collection, docId) =>
  db.doc(`${collection}/` + docId);
