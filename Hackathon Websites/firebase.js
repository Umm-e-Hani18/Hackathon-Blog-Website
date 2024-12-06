
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, addDoc, collection ,getDocs , doc, setDoc,updateDoc,serverTimestamp,arrayUnion, arrayRemove, deleteDoc,query,  orderBy,  onSnapshot,Timestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut, 
    signInWithPopup, GoogleAuthProvider, db, addDoc, collection,getDocs , doc, setDoc,
    updateDoc ,serverTimestamp,arrayUnion, arrayRemove , deleteDoc,query,  orderBy,  onSnapshot,Timestamp};
