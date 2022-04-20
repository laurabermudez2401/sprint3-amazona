// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUetzP68lvz22Xu0BIa6fh9AtzPfcoXUY",
  authDomain: "a-5ac71.firebaseapp.com",
  projectId: "a-5ac71",
  storageBucket: "a-5ac71.appspot.com",
  messagingSenderId: "664917686417",
  appId: "1:664917686417:web:43203855f95c162d136730"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    db
}
