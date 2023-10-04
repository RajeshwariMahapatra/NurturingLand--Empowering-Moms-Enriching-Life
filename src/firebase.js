// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyALhR8mokgDt8N4C5ZfRHvO9_B-y35ZvDM",
  authDomain: "codeissance-b7920.firebaseapp.com",
  projectId: "codeissance-b7920",
  storageBucket: "codeissance-b7920.appspot.com",
  messagingSenderId: "249700418148",
  appId: "1:249700418148:web:f1389738bce979a55cd571",
  measurementId: "G-YZJEPDJ3BJ"
};

// Initialize Firebase
let app;

if (firebase.apps.length == 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();

export { db, auth, storage };
