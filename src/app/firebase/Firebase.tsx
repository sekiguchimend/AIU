// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTgdyN68gKpDsStXfE0sxHL8WR0RerYYo",
  authDomain: "vibe-5fc96.firebaseapp.com",
  projectId: "vibe-5fc96",
  storageBucket: "vibe-5fc96.appspot.com",
  messagingSenderId: "208364480830",
  appId: "1:208364480830:web:0f4f1db017ce157393a46f",
  measurementId: "G-ZGLKZHNXBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth}