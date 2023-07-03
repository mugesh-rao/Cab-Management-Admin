import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0SIRosfRD8Az8eYhQ-kQI4uuwhBQel5I",
  authDomain: "chennai-cabs-admin-1.firebaseapp.com",
  projectId: "chennai-cabs-admin-1",
  storageBucket: "chennai-cabs-admin-1.appspot.com",
  messagingSenderId: "355544412858",
  appId: "1:355544412858:web:7300a70d566126743b0883",
  measurementId: "G-F489RYSTB0"
};

// Use these for db & auth

firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();


