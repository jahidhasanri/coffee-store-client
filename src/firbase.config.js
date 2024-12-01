// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0CQNuUb4fMPe6UVPkePsS25dV0keRK2Y",
  authDomain: "coffee-store-667ee.firebaseapp.com",
  projectId: "coffee-store-667ee",
  storageBucket: "coffee-store-667ee.firebasestorage.app",
  messagingSenderId: "890926892317",
  appId: "1:890926892317:web:84dcfd52a70ac30b2e4df4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);