/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import { getAuth, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { onNavigate } from '../main.js';
import {
  messageDisplayError, cleaningReviewBox, removeErrorMessage, countingChars,
} from '../lib/general.js';
import { addReview, createReviewBox } from '../lib/reviews.js';

export const home = () => {
  const auth = getAuth();
  const user = auth.currentUser;

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

  onAuthStateChanged(auth, (user) => {
    if (user.displayName !== null) {
      greetingUser.innerHTML = `Welcome, ${user.displayName}!`;
    } else {
      greetingUser.innerHTML = 'Welcome, your account was created successfully!';
    }
  });

  const btnLogOutHome = document.createElement('button');
  btnLogOutHome.classList.add('buttonLogOut');
  btnLogOutHome.innerHTML = 'Log Out';

  profileHeader.append(profileHeaderTitle, btnLogOutHome);

  //  Creation of DOM Elements of Section

  const profileSection = document.createElement('section');
  profileSection.setAttribute('id', 'createpostBox');

  const movieWatchedInput = document.createElement('input');
  movieWatchedInput.setAttribute('id', 'typeMovie');
  movieWatchedInput.setAttribute('type', 'text');
  movieWatchedInput.setAttribute('placeholder', 'Which movie did you watched?');

  const movieReviewInput = document.createElement('textarea');
  movieReviewInput.setAttribute('id', 'typeReview');
  movieReviewInput.setAttribute('type', 'text');
  movieReviewInput.setAttribute('placeholder', 'Write your review here...');
  movieReviewInput.setAttribute('maxlength', '700');

  const charCounter = document.createElement('p');
  charCounter.setAttribute('class', 'charCounter');
  movieReviewInput.addEventListener('keyup', () => { countingChars(movieReviewInput, charCounter); });
  movieReviewInput.addEventListener('paste', () => { countingChars(movieReviewInput, charCounter); });

  const shareReviewButton = document.createElement('button');
  shareReviewButton.setAttribute('id', 'shareReviewButton');
  shareReviewButton.setAttribute('type', 'button');
  shareReviewButton.innerHTML = 'Share';

  // Insert elements in Section tag
  profileSection.append(movieWatchedInput, movieReviewInput, charCounter, shareReviewButton);

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

  btnLogOutHome.addEventListener('click', () => {
    signOut(auth).then(() => {
      onNavigate('/');
    }).catch(() => {
      onNavigate('/home');
    });
  });

  (async () => {
    divAllHome.append(profileHeader, await greetingUser, profileSection, reviewsDiv, await createReviewBox());
  })();

  shareReviewButton.addEventListener('click', async () => {
    if (typeMovie.value === '' || typeReview.value === '') {
      messageDisplayError('Please complete all fields before submitting your review', 'createpostBox', 'shareReviewButton');
      setTimeout(removeErrorMessage, 3000);
    } else {
      await addReview(typeMovie, typeReview, user);
      cleaningReviewBox(typeMovie, typeReview);
      charCounter.innerHTML = '';
    }
  });
  return divAllHome;
};
