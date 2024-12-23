// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArWHKIa_I5I7bQFkLLqdAXipm_Zr0NYLw",
  authDomain: "chat-app-8d31e.firebaseapp.com",
  projectId: "chat-app-8d31e",
  storageBucket: "chat-app-8d31e.firebasestorage.app",
  messagingSenderId: "581890930498",
  appId: "1:581890930498:web:41211a1babf56b65837adb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}
export const db = getFirestore(app)
