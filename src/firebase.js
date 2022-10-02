// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { Firestore, getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import {getcollection, addDoc, where, query, getDocs} from "firebase/firestore"

// import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsmA2sWsrksbkettSeOhVqERnwv-d-CT4",
  authDomain: "xeras-ad087.firebaseapp.com",
  projectId: "xeras-ad087",
  storageBucket: "xeras-ad087.appspot.com",
  messagingSenderId: "919665415947",
  appId: "1:919665415947:web:010f469b66efa68c0b740e",
  measurementId: "G-8TY6ELJBFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const firebaseAuth = getAuth(app);
export const fbDatabase = getDatabase(app);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);

//  const db = app.firestore();
const db = getFirestore(app)
const auth = getAuth(app);

export { db, auth };