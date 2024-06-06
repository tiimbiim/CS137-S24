// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWA8EF2tsLrsDMG14KS-YrG1O1BZ31w0M",
  authDomain: "quizap-8e863.firebaseapp.com",
  projectId: "quizap-8e863",
  storageBucket: "quizap-8e863.appspot.com",
  messagingSenderId: "68774556728",
  appId: "1:68774556728:web:d6541666be3c46623822cd",
  measurementId: "G-04L23NBGNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

