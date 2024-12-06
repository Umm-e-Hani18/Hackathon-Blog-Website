import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendEmailVerification,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    GoogleAuthProvider,
    signInWithPopup
}from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    deleteDoc,
    collection,
    getDocs,
    addDoc,
    onSnapshot,
    serverTimestamp,
    query, 
    orderBy,
    where,
    
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcTbwe6cMwHDW5b5rCMn0ns7Esy7JMRg8",
  authDomain: "hackathon-website-4de4b.firebaseapp.com",
  projectId: "hackathon-website-4de4b",
  storageBucket: "hackathon-website-4de4b.firebasestorage.app",
  messagingSenderId: "767221434657",
  appId: "1:767221434657:web:a99dad0047fb6ce2e6d660",
  measurementId: "G-ELQLDD042Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendEmailVerification,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    GoogleAuthProvider,
    provider,
    signInWithPopup,
    getFirestore,
    doc,
    setDoc,
    db,
    getDoc,
    updateDoc,
    deleteDoc,
    collection,
    getDocs,
    addDoc,
    onSnapshot,
    serverTimestamp,
    query, 
    orderBy,
    where,
}