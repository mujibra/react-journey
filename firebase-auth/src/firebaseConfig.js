// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqewMFlGoJx5v2YEzr__ZY-AQAZN_3H8Q",
    authDomain: "fir-auth-d5dd3.firebaseapp.com",
    projectId: "fir-auth-d5dd3",
    storageBucket: "fir-auth-d5dd3.appspot.com",
    messagingSenderId: "125510933743",
    appId: "1:125510933743:web:f52fdab5298469a3968f1a",
    measurementId: "G-B4ZQ6NMQWT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
