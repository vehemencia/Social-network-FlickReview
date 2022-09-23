import {
  collection, addDoc, serverTimestamp,
  query, onSnapshot, orderBy,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { db } from './config.js';

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
      elements.push(doc.data());
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
      userName.innerHTML = `${obj.userDisplayName}`;

      const movieName = document.createElement('h4');
      movieName.setAttribute('class', 'movieNameHome');
      movieName.innerHTML = `${obj.title}`;

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
      paragraphReview.innerHTML = `${obj.review}`;

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

      const heartVector = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      heartVector.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      heartVector.classList.add('icon', 'icon-tabler', 'icon-tabler-heart');
      heartVector.setAttribute('width', '24');
      heartVector.setAttribute('heigth', '24');
      heartVector.setAttribute('viewBox', '0 0 24 24');
      heartVector.setAttribute('stroke-width', '1');
      heartVector.setAttribute('stroke', '#FEFFF1');
      heartVector.setAttribute('fill', 'none');
      heartVector.setAttribute('stroke-linecap', 'round');
      heartVector.setAttribute('stroke-linejoin', 'round');

      const pathHeartVector = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathHeartVector.setAttribute('stroke', 'none');
      pathHeartVector.setAttribute('d', 'M0 0h24v24H0z');
      pathHeartVector.setAttribute('fill', 'none');

      const pathTwoHeartVector = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathTwoHeartVector.setAttribute('d', 'M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572');

      //  Insert elements in article tag
      heartVector.append(pathHeartVector, pathTwoHeartVector);
      if (obj.userId === user.uid) {
        editVector.append(pathEditVector, pathEditVectorTwo, pathEditVectorThree, lineForVector);
        deleteVector.append(pathDeleteVector, lineForTrash, lineForTrashTwo, lineForTrashThree, pathDeleteVectorRedux, pathDeleteVectorRemaster)
      }
      userMovieInfo.append(userName, movieName);
      generalInfoDiv.append(userImage, userMovieInfo, editVector, deleteVector);
      articlePublishedReview.append(generalInfoDiv, paragraphReview, heartVector);

      content.append(articlePublishedReview);
    });
  });
  return content;
};
