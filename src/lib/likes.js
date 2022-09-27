import {
  doc, updateDoc, arrayUnion, arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { db } from './config.js';

export async function addLikes(accessToLikedByArray, loggedUserId, specificDocumentId, imageSource) {
  const match = await accessToLikedByArray.includes(loggedUserId);
  if (match) {
    const removeLikefromDocument = (doc(db, 'reviews', specificDocumentId));
    await updateDoc(removeLikefromDocument, {
      likedBy: arrayRemove(loggedUserId),
    });
    imageSource.style.filter = 'invert(100%)';
    console.log('Quita like :c');
  } else {
    const addLikeToDocument = (doc(db, 'reviews', specificDocumentId));
    await updateDoc(addLikeToDocument, {
      likedBy: arrayUnion(loggedUserId),
    });
    console.log('Da like 8)');
    console.log(loggedUserId);
    imageSource.style.filter = 'invert(50%)';
  }
}
