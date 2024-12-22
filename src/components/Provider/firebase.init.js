// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjTq-A5njcIRiedy8IMD8w2QN31JgpLhA",
  authDomain: "assignment-11-9153e.firebaseapp.com",
  projectId: "assignment-11-9153e",
  storageBucket: "assignment-11-9153e.firebasestorage.app",
  messagingSenderId: "903630789630",
  appId: "1:903630789630:web:4fbfbec59b7a8dab2b7eaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth