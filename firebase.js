// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC479-ClARSDZ7yMWUyZjxRklhaW6j4Xo",
  authDomain: "vetapp-57ec4.firebaseapp.com",
  projectId: "vetapp-57ec4",
  storageBucket: "vetapp-57ec4.appspot.com",
  messagingSenderId: "478875795008",
  appId: "1:478875795008:web:b1d506c683ef524fbb29a5"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
