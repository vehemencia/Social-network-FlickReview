import {
  doc, updateDoc, arrayUnion, arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { db } from './config.js';

export async function addLikes(accessToLikedByArray, loggedUserId, specificDocumentId) {
  const match = await accessToLikedByArray.includes(loggedUserId);
  if (match) {
    const removeLikefromDocument = (doc(db, 'reviews', specificDocumentId));
    await updateDoc(removeLikefromDocument, {
      likedBy: arrayRemove(loggedUserId),
    });
    return false;
  }
  const addLikeToDocument = (doc(db, 'reviews', specificDocumentId));
  await updateDoc(addLikeToDocument, {
    likedBy: arrayUnion(loggedUserId),
  });
  return true;
}
