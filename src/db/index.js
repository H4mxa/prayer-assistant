import firebase from 'firebase/app';
import 'firebase/firestore'; // importing firestore because we want to initialize our firestore database

// initializing database
const db = firebase
  .initializeApp({
    apiKey: 'AIzaSyB0HATy4aiixWfKu0Kj4DQfhjb_IZCfVks',
    authDomain: 'prayerassistant-8e8db.firebaseapp.com',
    projectId: 'prayerassistant-8e8db',
    storageBucket: 'prayerassistant-8e8db.appspot.com',
    messagingSenderId: '591572018291',
    appId: '1:591572018291:web:f1ec57ae971daec51fb606',
    measurementId: 'G-4ENXQY3S6T',
  })

  // executing here firestore function
  .firestore();

export default db;

const { Timestamp } = firebase.firestore;
export { Timestamp };
