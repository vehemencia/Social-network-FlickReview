import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { onNavigate } from '../main.js';
import { messageDisplayError, cleaningReviewBox, removeErrorMessage } from '../lib/general.js';
import { addReview, createReviewBox /*showingChanges*/ } from '../lib/reviews.js';

export const home = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  // showingChanges();

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

  // until we add functionality to hamburger menu
  const meanWhileDiv = document.createElement('div');
  meanWhileDiv.setAttribute('id', 'meanWhileDiv');

  const meanwhileButton = document.createElement('button');
  meanwhileButton.classList.add('meanWhile');
  meanwhileButton.innerHTML = 'Log Out';
  meanwhileButton.addEventListener('click', () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Se supone que se cerró sesión');
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
  (async () => {
    divAllHome.append(profileHeader, greetingUser, profileSection, reviewsDiv, await createReviewBox(), meanWhileDiv);
  })();

  shareReviewButton.addEventListener('click', async () => {
    if (typeMovie.value === '' || typeReview.value === '') {
      messageDisplayError('Please complete all fields before submitting your review', 'createpostBox', 'shareReviewButton');
      setTimeout(removeErrorMessage, 3000);
    } else {
      await addReview(typeMovie, typeReview, user);
      cleaningReviewBox(typeMovie, typeReview);
    }
    while (document.querySelector('#reviewsSection').firstChild) {
      document.querySelector('#reviewsSection').removeChild(document.querySelector('#reviewsSection').firstChild);
    }
  });
  return divAllHome;
};
