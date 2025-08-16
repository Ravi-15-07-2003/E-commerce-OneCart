import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "login-login-onecart-2025.firebaseapp.com",
  projectId: "login-login-onecart-2025",
  storageBucket: "login-login-onecart-2025.firebasestorage.app",
  messagingSenderId: "90421844303",
  appId: "1:90421844303:web:4140ca97f3e2aa5375cd3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

