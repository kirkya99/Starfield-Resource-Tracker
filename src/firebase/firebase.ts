// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaCfxM7eOjN4BOtH5eshfcpfla7qhkgUY",
    authDomain: "starfield-resource-tracker.firebaseapp.com",
    projectId: "starfield-resource-tracker",
    storageBucket: "starfield-resource-tracker.appspot.com",
    messagingSenderId: "621043212042",
    appId: "1:621043212042:web:7efa76481397cb55d9e4f3",
    measurementId: "G-R405TX4NP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {analytics, db, auth};