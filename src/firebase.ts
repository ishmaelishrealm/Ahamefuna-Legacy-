import { initializeApp, getApps } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBpzLquvBRCqLc1db13-YNrhXVjqyuuhBA",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ahamefuna-legacy.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ahamefuna-legacy",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ahamefuna-legacy.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "941773844005",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:941773844005:web:ef68b2356d03ba425d19cc",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-GZ64C1GG74"
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics only in browser and if supported
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}
export { analytics };

// Development emulator setup (optional)
if (import.meta.env.DEV && import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true') {
  try {
    // Only connect to emulators if not already connected
    if (!auth.emulatorConfig) {
      connectAuthEmulator(auth, "http://localhost:9099");
    }
    if (!db._delegate._databaseId.projectId.includes('demo-')) {
      connectFirestoreEmulator(db, 'localhost', 8080);
    }
  } catch (error) {
    console.log('Firebase emulators not available:', error);
  }
}

export default app;
