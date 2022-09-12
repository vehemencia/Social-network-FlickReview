import { collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { db } from './config.js'

// Add a new document with a generated id.
export const addReview = async (movieInput, reviewInput, user) => {
  const docRef = await addDoc(collection(db, "reviews"), {
    wroteByUser: user.email,
    title: movieInput.value,
    review: reviewInput.value,
    likedBy: [],
    timeOfPublication: serverTimestamp()
  })
  console.log(docRef.id)
}