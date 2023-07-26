// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADlyv7EOeEbFZXSyCxQBN2DW8VyHdF8bI",
  authDomain: "book-store2-eb786.firebaseapp.com",
  projectId: "book-store2-eb786",
  storageBucket: "book-store2-eb786.appspot.com",
  messagingSenderId: "804490538477",
  appId: "1:804490538477:web:847dd8d0ab02841d958be4",
  measurementId: "G-9D9M4K1GFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);