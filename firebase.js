import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "health-tracker-adfc1.firebaseapp.com",
  projectId: "health-tracker-adfc1",
  storageBucket: "health-tracker-adfc1.firebasestorage.app",
  messagingSenderId: "304449027651",
  appId: "1:304449027651:web:3dfd5f99fd9fd149235ef6",
  measurementId: "G-FWWQF5WSZT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);