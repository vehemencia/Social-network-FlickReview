/* eslint-disable import/no-unresolved */
import {
  doc, updateDoc, arrayUnion, arrayRemove, db,
} from '../importsFromFirebase.js';

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
