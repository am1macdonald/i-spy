// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmhj_u1G0zp8DZXsopjH9CXObLuZ6PDwk",
  authDomain: "i-spy-9066e.firebaseapp.com",
  projectId: "i-spy-9066e",
  storageBucket: "i-spy-9066e.appspot.com",
  messagingSenderId: "389266545207",
  appId: "1:389266545207:web:1c3840c5ddf953910bfdb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
