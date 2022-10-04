/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { app } from './lib/config.js';

export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';

export {
  signOut, onAuthStateChanged, signInWithEmailAndPassword,
  signInWithPopup, createUserWithEmailAndPassword, updateProfile,
  GoogleAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

export {
  doc, updateDoc, arrayUnion, arrayRemove,
  collection, addDoc, serverTimestamp,
  query, onSnapshot, orderBy, deleteDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
