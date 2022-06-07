// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfp9Zop09TSuyx4_FvrRCt5PidNeynElI",
  authDomain: "phonestock-18275.firebaseapp.com",
  projectId: "phonestock-18275",
  storageBucket: "phonestock-18275.appspot.com",
  messagingSenderId: "294466391661",
  appId: "1:294466391661:web:8a399c2cf5cec82a777964",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
