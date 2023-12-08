// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_kZMU-WpAvctkWBCo3n-rxgw_6RDLiXk",
  authDomain: "todoapp-8f14f.firebaseapp.com",
  projectId: "todoapp-8f14f",
  storageBucket: "todoapp-8f14f.appspot.com",
  messagingSenderId: "354571322841",
  appId: "1:354571322841:web:19c8145d97e2f8251385c8",
  measurementId: "G-V43YBQ7LJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export {auth,provider}