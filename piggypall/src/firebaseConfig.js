// Import necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Add SDKs for other Firebase products as needed
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration for your web app
const firebaseConfig = {
  apiKey: "AIzaSyDJwU2g-UdVC34c6kMxZgQTH37aZAt05lk",
  authDomain: "piggypal-97175.firebaseapp.com",
  projectId: "piggypal-97175",
  storageBucket: "piggypal-97175.appspot.com",
  messagingSenderId: "260625482699",
  appId: "1:260625482699:web:7bc1780ff8c4bd7806ec4e",
  measurementId: "G-WQYQBWF0QJ"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);