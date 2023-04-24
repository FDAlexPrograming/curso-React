// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU3XAE4v8op5NvRAWGRXteK5YAvAm4sMY",
  authDomain: "react-cursos-f8f16.firebaseapp.com",
  projectId: "react-cursos-f8f16",
  storageBucket: "react-cursos-f8f16.appspot.com",
  messagingSenderId: "668254350115",
  appId: "1:668254350115:web:6aa95ec7a1b0f1a10fba96"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
