// firebase/firebase.utils.js

import firebase from 'firebase/app'; // Standard boilerplate
import 'firebase/firestore'; // Import for firebase db
import 'firebase/auth';// Import for firebase user authentication

// This config object is from the firebase website
const config = {
  apiKey: "AIzaSyBrcEhCKCPmV4FP12w-OHpxHESdmWU7A6s",
  authDomain: "crown-db-1bf4e.firebaseapp.com",
  databaseURL: "https://crown-db-1bf4e.firebaseio.com",
  projectId: "crown-db-1bf4e",
  storageBucket: "crown-db-1bf4e.appspot.com",
  messagingSenderId: "28248142235",
  appId: "1:28248142235:web:6a5752019e49c53367713e",
  measurementId: "G-FX5VNQW1BF"
}

firebase.initializeApp(config); // Initializes firebase with the object data

export const auth = firebase.auth(); //Related to authentication
export const firestore = firebase.firestore(); // Database setup

const provider = new firebase.auth.GoogleAuthProvider();

// Triggers the Google auth system whenever the prompt of select_account is triggered
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

