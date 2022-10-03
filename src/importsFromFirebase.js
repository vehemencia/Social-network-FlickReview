/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';

export {
  getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

export {
  doc, updateDoc, arrayUnion, arrayRemove,
  collection, addDoc, serverTimestamp,
  query, onSnapshot, orderBy, deleteDoc,
  getFirestore,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
