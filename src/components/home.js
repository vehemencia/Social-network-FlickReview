import { onNavigate } from '../main.js';
import { messageDisplayError, cleaningReviewBox, removeErrorMessage } from '../lib/general.js';
import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { addReview } from '../lib/reviews.js'

export const home = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user)
  const divAllHome = document.createElement('div');

  const bodyTag = document.querySelector('body');
  bodyTag.style.backgroundImage = 'none';

  // Creation of DOM Elements of Header
  const profileHeader = document.createElement('header');
  profileHeader.setAttribute('id', 'homeHeader');

  const profileHeaderTitle = document.createElement('h1');
  profileHeaderTitle.setAttribute('id', 'homeTitle');
  profileHeaderTitle.innerHTML = 'FlickReview';

  const profileHamburgerMenu = document.createElement('div');
  profileHamburgerMenu.classList.add('hamburgermenu');

  const hamburgerMenuLineOne = document.createElement('span');
  hamburgerMenuLineOne.classList.add('lineone', 'lines');

  const hamburgerMenuLineTwo = document.createElement('span');
  hamburgerMenuLineTwo.classList.add('linetwo', 'lines');

  const hamburgerMenuLineThree = document.createElement('span');
  hamburgerMenuLineThree.classList.add('linethree', 'lines');

  const greetingUser = document.createElement('h2');
  greetingUser.setAttribute('id', 'greetingUserText');
  greetingUser.innerHTML = `Welcome, ${user.email}!`;

  /* const hamburgerMenuContent = document.createElement('ul');
  hamburgerMenuContent.classList.add('menu');

  const contentMenuLiOne = document.createElement('li');
  contentMenuLiOne.innerHTML = 'Profile';

  const contentMenuLiTwo = document.createElement('li');
  contentMenuLiTwo.innerHTML = 'Log Out'; */

  // Insert Elements in Header Tag

  // hamburgerMenuContent.append(contentMenuLiOne, contentMenuLiTwo);
  profileHamburgerMenu.append(hamburgerMenuLineOne, hamburgerMenuLineTwo, hamburgerMenuLineThree);
  // eslint-disable-next-line max-len
  profileHeader.append(profileHeaderTitle, profileHamburgerMenu /* , hamburgerMenuContent */);

  //  Creation of DOM Elements of Section

  const profileSection = document.createElement('section');
  profileSection.setAttribute('id', 'createpostBox');

  const movieWatchedInput = document.createElement('input');
  movieWatchedInput.setAttribute('id', 'typeMovie');
  movieWatchedInput.setAttribute('type', 'text');
  movieWatchedInput.setAttribute('placeholder', 'Which movie did you watched?');

  const movieReviewInput = document.createElement('input');
  movieReviewInput.setAttribute('id', 'typeReview');
  movieReviewInput.setAttribute('type', 'text');
  movieReviewInput.setAttribute('placeholder', 'Write your review here...');

  const shareReviewButton = document.createElement('button');
  shareReviewButton.setAttribute('id', 'shareReviewButton');
  shareReviewButton.setAttribute('type', 'button');
  shareReviewButton.innerHTML = 'Share';

  // Insert elements in Section tag
  profileSection.append(movieWatchedInput, movieReviewInput, shareReviewButton);

  // Creation of DOM elements that divide share review from published reviews
  const reviewsDiv = document.createElement('div');
  reviewsDiv.setAttribute('id', 'reviewsText');

  const reviewsText = document.createElement('h3');
  reviewsText.innerHTML = 'Reviews';

  const reviewsLine = document.createElement('canvas');
  reviewsLine.setAttribute('id', 'reviewsLine');

  // Insert elements in reviews div
  reviewsDiv.append(reviewsText, reviewsLine);

  //  Creation of DOM elements of article
  const articlePublishedReview = document.createElement('article');
  articlePublishedReview.setAttribute('id', 'reviewBox');

  const generalInfoDiv = document.createElement('div');
  generalInfoDiv.setAttribute('id', 'generalinfo');

  const userImage = document.createElement('img');
  userImage.setAttribute('id', 'womanprofileimg');
  userImage.setAttribute('src', './images/Agnes-placeholder.PNG');
  userImage.setAttribute('alt', 'User profile picture');

  const userMovieInfo = document.createElement('div');
  userMovieInfo.setAttribute('id', 'userAndMovieInfo');

  const userName = document.createElement('h3');
  userName.setAttribute('id', 'userNameHome');
  userName.innerHTML = 'Agnes Varda';

  const movieName = document.createElement('h4');
  movieName.setAttribute('id', 'movieNameHome');
  movieName.innerHTML = 'Movie: Everything Everywhere All At Once';

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
  paragraphReview.setAttribute('id', 'writtenreview');
  paragraphReview.innerHTML = 'Loren ipsum :3 idufudsfsgdgd idufudsf sgdgd idufudsfsgdgdidu fudsfsgdgd idufudsfsgdgd fdgdfv lorem lorem hdgsgds ydgsyfgydgyf ydsyyfsg very good movie 100 starsstarsstarsstars starsstars starsstars starsstars';

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
  // eslint-disable-next-line max-len
  dotsVector.append(pathdotsVector, dotsVectorCircleOne, dotsVectorCircleTwo, dotsVectorCircleThree);
  userMovieInfo.append(userName, movieName);
  generalInfoDiv.append(userImage, userMovieInfo, dotsVector);
  articlePublishedReview.append(generalInfoDiv, paragraphReview, heartVector);

  // until we add functionality to hamburger menu
  const meanWhileDiv = document.createElement('div');
  meanWhileDiv.setAttribute('id', 'meanWhileDiv');

  const meanwhileButton = document.createElement('button');
  meanwhileButton.classList.add('meanWhile');
  meanwhileButton.innerHTML = 'Log Out';
  meanwhileButton.addEventListener('click', () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Se supone que se cerró sesión')
    }).catch((error) => {
      // An error happened.
    });
    onNavigate('/');
  });

  const meanwhileButtonTwo = document.createElement('button');
  meanwhileButtonTwo.classList.add('meanWhile');
  meanwhileButtonTwo.innerHTML = 'My Profile';
  meanwhileButtonTwo.addEventListener('click', () => {
    onNavigate('/profile');
  });

  meanWhileDiv.append(meanwhileButtonTwo, meanwhileButton);
  // insertion of all content in home div
  // eslint-disable-next-line max-len
  divAllHome.append(profileHeader, greetingUser, profileSection, reviewsDiv, articlePublishedReview, meanWhileDiv);

  shareReviewButton.addEventListener('click', async() => {
    if (typeMovie.value === "" || typeReview.value === "") {
      messageDisplayError('Please complete all fields before submitting your review', 'createpostBox', 'shareReviewButton');
      setTimeout(removeErrorMessage, 3000);
    } else {
      await addReview(typeMovie, typeReview, user);
      cleaningReviewBox(typeMovie, typeReview);
    }
  })
  return divAllHome;
};
