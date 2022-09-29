/* eslint-disable max-len */
import {
  collection, addDoc, serverTimestamp,
  query, onSnapshot, orderBy, doc, deleteDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { db } from './config.js';
import { addLikes } from './likes.js';

const q = query(collection(db, 'reviews'), orderBy('timeOfPublication', 'desc'));

// Add a new document with a generated id.
export const addReview = async (movieInput, reviewInput, user) => {
  const docRef = await addDoc(collection(db, 'reviews'), {
    userId: user.uid,
    wroteByUser: user.email,
    userDisplayName: user.displayName,
    title: movieInput.value,
    review: reviewInput.value,
    likedBy: [],
    timeOfPublication: serverTimestamp(),
  });
};

//  Create review box
export const createReviewBox = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const content = document.createElement('section');
  content.setAttribute('id', 'reviewsSection');
  onSnapshot(q, (querySnapshot) => {
    if (content.childElementCount > 0) {
      content.replaceChildren();
    }
    const elements = [];
    querySnapshot.forEach((doc) => {
      elements.push(doc);
    });
    const eliminateRepeatedElements = new Set(elements);
    eliminateRepeatedElements.forEach((obj) => {
      const articlePublishedReview = document.createElement('article');
      articlePublishedReview.setAttribute('class', 'reviewBox');

      const generalInfoDiv = document.createElement('div');
      generalInfoDiv.setAttribute('class', 'generalinfo');

      const userImage = document.createElement('img');
      userImage.setAttribute('class', 'womanprofileimg');
      userImage.setAttribute('src', './images/Agnes-placeholder.PNG');
      userImage.setAttribute('alt', 'User profile picture');

      const userMovieInfo = document.createElement('div');
      userMovieInfo.setAttribute('class', 'userAndMovieInfo');

      const userName = document.createElement('h3');
      userName.setAttribute('class', 'userNameHome');
      userName.innerHTML = `${obj.data().userDisplayName}`;

      const movieName = document.createElement('h4');
      movieName.setAttribute('class', 'movieNameHome');
      movieName.innerHTML = `${obj.data().title}`;

      const editVector = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      editVector.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      editVector.classList.add('icon', 'icon-tabler', 'icon-tabler-edit');
      editVector.setAttribute('width', '18');
      editVector.setAttribute('heigth', '18');
      editVector.setAttribute('viewBox', '0 0 24 24');
      editVector.setAttribute('stroke-width', '1.5');
      editVector.setAttribute('stroke', '#FEFFF1');
      editVector.setAttribute('fill', 'none');
      editVector.setAttribute('stroke-linecap', 'round');
      editVector.setAttribute('stroke-linejoin', 'round');

      const pathEditVector = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathEditVector.setAttribute('stroke', 'none');
      pathEditVector.setAttribute('d', 'M0 0h24v24H0z');
      pathEditVector.setAttribute('fill', 'none');

      const pathEditVectorTwo = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathEditVectorTwo.setAttribute('d', 'M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3');

      const pathEditVectorThree = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathEditVectorThree.setAttribute('d', 'M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3');

      const lineForVector = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      lineForVector.setAttribute('x1', '16');
      lineForVector.setAttribute('y1', '5');
      lineForVector.setAttribute('x2', '19');
      lineForVector.setAttribute('y2', '8');

      const paragraphReview = document.createElement('p');
      paragraphReview.setAttribute('class', 'writtenreview');
      paragraphReview.innerHTML = `${obj.data().review}`;

      const deleteVector = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      deleteVector.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      deleteVector.classList.add('icon', 'icon-tabler', 'icon-tabler-trash');
      deleteVector.setAttribute('width', '18');
      deleteVector.setAttribute('heigth', '18');
      deleteVector.setAttribute('viewBox', '0 0 24 24');
      deleteVector.setAttribute('stroke-width', '1.5');
      deleteVector.setAttribute('stroke', '#FEFFF1');
      deleteVector.setAttribute('fill', 'none');
      deleteVector.setAttribute('stroke-linecap', 'round');
      deleteVector.setAttribute('stroke-linejoin', 'round');

      const pathDeleteVector = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathDeleteVector.setAttribute('stroke', 'none');
      pathDeleteVector.setAttribute('d', 'M0 0h24v24H0z');
      pathDeleteVector.setAttribute('fill', 'none');

      const lineForTrash = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      lineForTrash.setAttribute('x1', '4');
      lineForTrash.setAttribute('y1', '7');
      lineForTrash.setAttribute('x2', '20');
      lineForTrash.setAttribute('y2', '7');

      const lineForTrashTwo = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      lineForTrashTwo.setAttribute('x1', '10');
      lineForTrashTwo.setAttribute('y1', '11');
      lineForTrashTwo.setAttribute('x2', '10');
      lineForTrashTwo.setAttribute('y2', '17');

      const lineForTrashThree = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      lineForTrashThree.setAttribute('x1', '14');
      lineForTrashThree.setAttribute('y1', '11');
      lineForTrashThree.setAttribute('x2', '14');
      lineForTrashThree.setAttribute('y2', '17');

      const pathDeleteVectorRedux = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathDeleteVectorRedux.setAttribute('d', 'M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12');

      const pathDeleteVectorRemaster = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathDeleteVectorRemaster.setAttribute('d', 'M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3');

      const heartVector = document.createElement('img');
      heartVector.setAttribute('class', 'outlineheart');
      heartVector.src = './images/liked.png';

      const heartVectorLiked = document.createElement('img');
      heartVectorLiked.setAttribute('class', 'icon-tabler-heart');
      heartVectorLiked.src = './images/liked.png';

      heartVector.addEventListener('click', async () => {
        const paintingButton = await addLikes(obj.data().likedBy, user.uid, obj.id);
      });
      heartVectorLiked.addEventListener('click', async () => {
        const paintingButton = await addLikes(obj.data().likedBy, user.uid, obj.id);
      });

      const displayLikesDiv = document.createElement('div');
      displayLikesDiv.setAttribute('class', 'displaylikesdiv');
      const likesParagraph = document.createElement('p');
      likesParagraph.setAttribute('class', 'displaylikestext');
      likesParagraph.innerHTML = `${obj.data().likedBy.length}`;

      displayLikesDiv.appendChild(likesParagraph);

      if (obj.data().userId === user.uid) {
        editVector.append(pathEditVector, pathEditVectorTwo, pathEditVectorThree, lineForVector);
        deleteVector.append(pathDeleteVector, lineForTrash, lineForTrashTwo, lineForTrashThree, pathDeleteVectorRedux, pathDeleteVectorRemaster);
        deleteVector.addEventListener('click', () => {
          const deleteMessageDiv = document.createElement('div');
          deleteMessageDiv.setAttribute('class', 'deleteMessageBox');
          if (obj.data().likedBy.includes(user.uid)) {
            articlePublishedReview.insertBefore(deleteMessageDiv, heartVectorLiked);
          } else {
            articlePublishedReview.insertBefore(deleteMessageDiv, heartVector);
          }

          const confirmDeleteMessage = document.createElement('p');
          confirmDeleteMessage.innerHTML = 'Are you sure you want delete this post? This action is permanent';
          confirmDeleteMessage.setAttribute('class', 'deleteMessage');

          const deleteButtonsDiv = document.createElement('div');
          deleteButtonsDiv.setAttribute('class', 'deleteDiv');

          const permanentelyDelete = document.createElement('button');
          permanentelyDelete.innerHTML = 'Delete permanentely';
          permanentelyDelete.setAttribute('class', 'confirmDeleteButton');
          confirmDeleteMessage.appendChild(permanentelyDelete);

          const cancelDeleteButton = document.createElement('button');
          cancelDeleteButton.setAttribute('class', 'cancelDelete');
          cancelDeleteButton.innerHTML = 'Cancel';

          deleteButtonsDiv.append(permanentelyDelete, cancelDeleteButton);
          deleteMessageDiv.append(confirmDeleteMessage, deleteButtonsDiv);
          generalInfoDiv.removeChild(deleteVector);
          generalInfoDiv.removeChild(editVector);

          permanentelyDelete.addEventListener('click', async () => {
            await deleteDoc(doc(db, 'reviews', obj.id));
          });

          cancelDeleteButton.addEventListener('click', () => {
            deleteMessageDiv.removeChild(confirmDeleteMessage);
            deleteMessageDiv.removeChild(deleteButtonsDiv);
            generalInfoDiv.append(editVector, deleteVector);
          });
        });

        editVector.addEventListener('click', async () => {
          const editReviewInput = document.createElement('textarea');
          editReviewInput.setAttribute('class', 'typeReviewEdit');
          editReviewInput.setAttribute('maxlength', '700');
          editReviewInput.innerHTML = await `${obj.data().review}`;

          const editionButtonsDiv = document.createElement('div');
          editionButtonsDiv.setAttribute('class', 'editionDiv');

          const saveEditButton = document.createElement('button');
          saveEditButton.setAttribute('class', 'saveEdition');
          saveEditButton.innerHTML = 'Save';

          const cancelEditButton = document.createElement('button');
          cancelEditButton.setAttribute('class', 'cancelEdition');
          cancelEditButton.innerHTML = 'Cancel';

          if (obj.data().likedBy.includes(user.uid)) {
            articlePublishedReview.insertBefore(editReviewInput, heartVectorLiked);
            editionButtonsDiv.append(saveEditButton, cancelEditButton);
            articlePublishedReview.insertBefore(editionButtonsDiv, heartVectorLiked);
            generalInfoDiv.removeChild(editVector);
          } else {
            articlePublishedReview.insertBefore(editReviewInput, heartVector);
            editionButtonsDiv.append(saveEditButton, cancelEditButton);
            articlePublishedReview.insertBefore(editionButtonsDiv, heartVector);
            generalInfoDiv.removeChild(editVector);
          }

          articlePublishedReview.removeChild(paragraphReview);
          generalInfoDiv.removeChild(deleteVector);
          editionButtonsDiv.append(saveEditButton, cancelEditButton);

          saveEditButton.addEventListener('click', async () => {
            const documentToEdit = (doc(db, 'reviews', obj.id));
            await updateDoc(documentToEdit, {
              review: editReviewInput.value,
            });
            generalInfoDiv.append(editVector, deleteVector);
          });

          cancelEditButton.addEventListener('click', () => {
            if (obj.data().likedBy.includes(user.uid)) {
              articlePublishedReview.insertBefore(paragraphReview, heartVectorLiked);
            } else {
              articlePublishedReview.insertBefore(paragraphReview, heartVector);
            }
            articlePublishedReview.removeChild(editReviewInput);
            articlePublishedReview.removeChild(editionButtonsDiv);
            generalInfoDiv.append(editVector, deleteVector);
          });
        });
      }
      userMovieInfo.append(userName, movieName);
      generalInfoDiv.append(userImage, userMovieInfo, editVector, deleteVector);
      articlePublishedReview.append(generalInfoDiv, paragraphReview);
      if (obj.data().likedBy.includes(user.uid)) {
        articlePublishedReview.append(heartVectorLiked, displayLikesDiv);
      } else {
        articlePublishedReview.append(heartVector, displayLikesDiv);
      }

      content.append(articlePublishedReview);
    });
  });
  return content;
};
