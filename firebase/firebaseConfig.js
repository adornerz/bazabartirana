import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJNKnzEse2WiUyaNXrJ9Aofn6Fzay9qmM",
  authDomain: "baza-blog.firebaseapp.com",
  projectId: "baza-blog",
  storageBucket: "baza-blog.appspot.com",
  messagingSenderId: "1077956671071",
  appId: "1:1077956671071:web:81c2a19be82589e80ecdea",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);