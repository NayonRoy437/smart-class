import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFg764Tt8MMafT0Eaxb9dwkmQzxLcYkQI",
  authDomain: "smart-class-f4773.firebaseapp.com",
  projectId: "smart-class-f4773",
  storageBucket: "smart-class-f4773.firebasestorage.app",
  messagingSenderId: "287344292915",
  appId: "1:287344292915:web:3435753d68857ce0bd5f46",
  measurementId: "G-SSV03B8YX8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);