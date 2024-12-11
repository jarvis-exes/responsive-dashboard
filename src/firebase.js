import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0OZbiiaFLnW1fvmRai9S2Beo-EHURd9E",
  authDomain: "responsive-dashboard-4035d.firebaseapp.com",
  projectId: "responsive-dashboard-4035d",
  storageBucket: "responsive-dashboard-4035d.firebasestorage.app",
  messagingSenderId: "60344829585",
  appId: "1:60344829585:web:e266edbfe8d9658dffa130",
  measurementId: "G-XWH9Z1PZ0E",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error during authentication", error);
  }
};
