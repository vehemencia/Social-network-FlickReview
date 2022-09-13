import { collection, addDoc, getDoc, getDocs, serverTimestamp, doc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { db } from './config.js'

// Add a new document with a generated id.
export const addReview = async (movieInput, reviewInput, user) => {
  const docRef = await addDoc(collection(db, "reviews"), {
    wroteByUser: user.email,
    userDisplayName: user.displayName,
    title: movieInput.value,
    review: reviewInput.value,
    likedBy: [],
    timeOfPublication: serverTimestamp()
  })
  console.log(docRef.id)
}

export const getReviewsDocuments = async () => {
  const response = await getDocs(collection(db, "reviews"));
  const dataArray = [];
  response.forEach(element => {
    //console.log (element.data().review);
    const saveData = element.data();
    dataArray.push(saveData);
  });
  return dataArray;
}

//  Create review box
export const createReviewBox = async () => {
  const reciveData = await getReviewsDocuments();
  const content = document.createElement('section');
  const printingDom = reciveData.forEach(obj => {
    console.log(obj.title)
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
    userName.innerHTML = `${obj.wroteByUser}`;

    const movieName = document.createElement('h4');
    movieName.setAttribute('class', 'movieNameHome');
    movieName.innerHTML = `${obj.title}`;

    const dotsVector = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    dotsVector.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    dotsVector.classList.add('icon', 'icon-tabler', 'icon-tabler-dots');
    dotsVector.setAttribute('width', '24');
    dotsVector.setAttribute('heigth', '24');
    dotsVector.setAttribute('viewBox', '0 0 24 24');
    dotsVector.setAttribute('stroke-width', '1');
    dotsVector.setAttribute('stroke', '#FEFFF1');
    dotsVector.setAttribute('fill', 'none');
    dotsVector.setAttribute('stroke-linecap', 'round');
    dotsVector.setAttribute('stroke-linejoin', 'round');

    const pathdotsVector = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathdotsVector.setAttribute('stroke', 'none');
    pathdotsVector.setAttribute('d', 'M0 0h24v24H0z');
    pathdotsVector.setAttribute('fill', 'none');

    const dotsVectorCircleOne = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dotsVectorCircleOne.setAttribute('cx', '5');
    dotsVectorCircleOne.setAttribute('cy', '12');
    dotsVectorCircleOne.setAttribute('r', '1');

    const dotsVectorCircleTwo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dotsVectorCircleTwo.setAttribute('cx', '12');
    dotsVectorCircleTwo.setAttribute('cy', '12');
    dotsVectorCircleTwo.setAttribute('r', '1');

    const dotsVectorCircleThree = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dotsVectorCircleThree.setAttribute('cx', '19');
    dotsVectorCircleThree.setAttribute('cy', '12');
    dotsVectorCircleThree.setAttribute('r', '1');

    const paragraphReview = document.createElement('p');
    paragraphReview.setAttribute('class', 'writtenreview');
    paragraphReview.innerHTML = `${obj.review}`;

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
    dotsVector.append(pathdotsVector, dotsVectorCircleOne, dotsVectorCircleTwo, dotsVectorCircleThree);
    userMovieInfo.append(userName, movieName);
    generalInfoDiv.append(userImage, userMovieInfo, dotsVector);
    articlePublishedReview.append(generalInfoDiv, paragraphReview, heartVector);
    
    content.append(articlePublishedReview)
  })
  return content
}
