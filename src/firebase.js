import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBpzLquvBRCqLc1db13-YNrhXVjqyuuhBA",
  authDomain: "ahamefuna-legacy.firebaseapp.com",
  projectId: "ahamefuna-legacy",
  storageBucket: "ahamefuna-legacy.firebasestorage.app",
  messagingSenderId: "941773844005",
  appId: "1:941773844005:web:ef68b2356d03ba425d19cc",
  measurementId: "G-GZ64C1GG74"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
