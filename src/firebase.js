
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqc3Q5UJr-hlpkWKoSUmA-0SYbpajibP8",
  authDomain: "chat-4a195.firebaseapp.com",
  projectId: "chat-4a195",
  storageBucket: "chat-4a195.appspot.com",
  messagingSenderId: "265467461715",
  appId: "1:265467461715:web:487d525f660af9aa3586a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()