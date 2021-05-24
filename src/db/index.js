import firebase from "firebase/app";
import "firebase/firestore"; // importing firestore because we want to initialize our firestore database

// initializing database
const db = firebase
  .initializeApp({
    apiKey: "AIzaSyAhGCTS09OTTSfMiCT72t459cETiUxBGME",
    authDomain: "prayerassistant-77424.firebaseapp.com",
    projectId: "prayerassistant-77424",
    storageBucket: "prayerassistant-77424.appspot.com",
    messagingSenderId: "1042925594814",
    appId: "1:1042925594814:web:9f75c37ac704c94fa816ef",
    measurementId: "G-TLSQ0NF69Z",
  })

  // executing here firestore function
  .firestore();

export default db;

const { Timestamp } = firebase.firestore;
export { Timestamp };
