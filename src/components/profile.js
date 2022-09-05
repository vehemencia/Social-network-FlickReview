import { onNavigate } from '../main.js';

export const profile = () => {
  // Creation of DOM Elements of Header
  const headerProfile = document.createElement('header');
  headerProfile.setAttribute('id', 'profileHeader');

  const titleAppHeader = document.createElement('h1');
  titleAppHeader.setAttribute('id', 'profileTitle');
  titleAppHeader.innerHTML = 'FlickReview';

  const divContainHeader = document.createElement('div');
  divContainHeader.classList.add('profileMenu');

  const btnReturnHome = document.createElement('button');
  btnReturnHome.classList.add('buttonReturnHome');
  btnReturnHome.innerHTML = 'Home';
  const btnLogOut = document.createElement('button');
  btnLogOut.classList.add('buttonLogOut');
  btnLogOut.innerHTML = 'Log Out';

  /** Insert elements in Header tag */
  divContainHeader.append(btnReturnHome, btnLogOut);
  headerProfile.append(titleAppHeader, divContainHeader);

  // Creation of DOM Elements out of container Header
  const imgUserProfile = document.createElement('img');
  imgUserProfile.setAttribute('id', 'userProfileImg');
  imgUserProfile.src = './images/Agnes-placeholder.PNG';
  imgUserProfile.alt = 'User profile picture';

  const divContainInfo = document.createElement('div');
  divContainInfo.classList.add('infoUserProfile');

  const nameUserProfile = document.createElement('h2');
  nameUserProfile.classList.add('userNameProfile');
  nameUserProfile.innerHTML = 'Gabs';
  const quoteUserProfile = document.createElement('h4');
  quoteUserProfile.setAttribute('id', 'userQuote');
  quoteUserProfile.innerHTML = 'Place your movie quote here';

  const lineOneSeparation = document.createElement('canvas');
  lineOneSeparation.classList.add('reviewsLineTwo');

  /** Insert elements in DIV Info User Profile */
  divContainInfo.append(nameUserProfile, quoteUserProfile, lineOneSeparation);

  // Creation of DOM Elements of Section
  const sectionProfile = document.createElement('section');
  sectionProfile.setAttribute('id', 'createpostBox');

  const inputMovie = document.createElement('input');
  inputMovie.setAttribute('id', 'typeMovie');
  inputMovie.setAttribute('type', 'text');
  inputMovie.setAttribute('placeholder', 'Which movie did you watched?');
  const inputReview = document.createElement('input');
  inputReview.setAttribute('id', 'typeReview');
  inputReview.setAttribute('type', 'text');
  inputReview.setAttribute('placeholder', 'Write your review here...');

  const btnShare = document.createElement('button');
  btnShare.setAttribute('id', 'shareReviewButton');
  btnShare.setAttribute('type', 'button');
  btnShare.innerHTML = 'SHARE';

  /** Insert elements in DIV Info User Profile */
  sectionProfile.append(inputMovie, inputReview, btnShare);

  // Creation of DOM Elements of separation of sections
  const divSeparation = document.createElement('div');
  divSeparation.setAttribute('id', 'reviewText');

  const textSeparation = document.createElement('h3');
  textSeparation.innerHTML = 'Your reviews';

  const lineTwoSeparation = document.createElement('canvas');
  lineTwoSeparation.classList.add('reviewsLineThree');

  /** Insert elements for separation sections */
  divSeparation.append(textSeparation, lineTwoSeparation);

  // Creation of DOM Elements of Article (Post)
  const articlePostReview = document.createElement('article');
  articlePostReview.setAttribute('id', 'reviewBox');

  const divContainArt = document.createElement('div');
  divContainArt.setAttribute('id', 'generalinfo');

  const imgMinUserRev = document.createElement('img');
  imgMinUserRev.src = './images/Agnes-placeholder.PNG';
  imgMinUserRev.alt = 'User profile picture';
  imgMinUserRev.setAttribute('id', 'womanprofileimg');

  const divIntPostRev = document.createElement('div');
  divIntPostRev.setAttribute('id', 'userAndMovieInfo');

  const nameUserPostRev = document.createElement('h3');
  nameUserPostRev.setAttribute('id', 'userNameHome');
  nameUserPostRev.innerHTML = 'Gabs';
  const moviePostRev = document.createElement('h4');
  moviePostRev.setAttribute('id', 'movieNameHome');
  moviePostRev.innerHTML = 'Movie: Everything Everywhere All At Once';

  /** Insert elements in DIV Info Post */
  divIntPostRev.append(nameUserPostRev, moviePostRev);

  // -----------  SVG IMG EDIT OPTIONS  ----------- //
  const btnEditOptionSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  btnEditOptionSvg.classList.add('icon', 'icon-tabler', 'icon-tabler-dots');
  btnEditOptionSvg.setAttribute('width', '24');
  btnEditOptionSvg.setAttribute('heigth', '24');
  btnEditOptionSvg.setAttribute('viewBox', '0 0 24 24');
  btnEditOptionSvg.setAttribute('stroke-width', '1');
  btnEditOptionSvg.setAttribute('stroke', '#FEFFF1');
  btnEditOptionSvg.setAttribute('fill', 'none');
  btnEditOptionSvg.setAttribute('stroke-linecap', 'round');
  btnEditOptionSvg.setAttribute('stroke-linejoin', 'round');

  const btnEditOptionPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  btnEditOptionPath.setAttribute('stroke', 'none');
  btnEditOptionPath.setAttribute('d', 'M0 0h24v24H0z');
  btnEditOptionPath.setAttribute('fill', 'none');

  const circleOne = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circleOne.setAttribute('cx', '5');
  circleOne.setAttribute('cy', '12');
  circleOne.setAttribute('r', '1');
  const circleTwo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circleTwo.setAttribute('cx', '12');
  circleTwo.setAttribute('cy', '12');
  circleTwo.setAttribute('r', '1');
  const circleThree = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circleThree.setAttribute('cx', '19');
  circleThree.setAttribute('cy', '12');
  circleThree.setAttribute('r', '1');
  // Insert elements on SVG
  btnEditOptionSvg.append(btnEditOptionPath, circleOne, circleTwo, circleThree);

  /** Insert element in DIV General Info Post */
  divContainArt.append(imgMinUserRev, divIntPostRev, btnEditOptionSvg);

  const textReviewPost = document.createElement('p');
  textReviewPost.setAttribute('id', 'writtenreview');
  textReviewPost.innerHTML = 'Loren ipsum :3 idufudsfsgdgd idufudsf sgdgdidufudsfsgdgdidu fudsfsgdgd idufudsfsgdgd fdgdfv lorem lorem hdgsgds ydgsyfgydgyf ydsyyfsg very good movie 100 stars';

  // -----------  SVG IMG HEART ----------- //
  const btnLike = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  btnLike.classList.add('icon', 'icon-tabler', 'icon-tabler-heart');
  btnLike.setAttribute('width', '24');
  btnLike.setAttribute('heigth', '24');
  btnLike.setAttribute('viewBox', '0 0 24 24');
  btnLike.setAttribute('stroke-width', '1');
  btnLike.setAttribute('stroke', '#FEFFF1');
  btnLike.setAttribute('fill', 'none');
  btnLike.setAttribute('stroke-linecap', 'round');
  btnLike.setAttribute('stroke-linejoin', 'round');

  const btnLikePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  btnLikePath.setAttribute('stroke', 'none');
  btnLikePath.setAttribute('d', 'M0 0h24v24H0z');
  btnLikePath.setAttribute('fill', 'none');
  const btnLikePathTwo = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  btnLikePathTwo.setAttribute('d', 'M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572');
  // Insert elements on SVG
  btnLike.append(btnLikePath, btnLikePathTwo);

  /** Insert elements in Article tag */
  articlePostReview.append(divContainArt, textReviewPost, btnLike);


  // Add Event to buttons Home and Log Out
  btnReturnHome.addEventListener('click', () => {
    onNavigate('/home');
  });
  btnLogOut.addEventListener('click', () => {
    onNavigate('/');
  });


  // --------- INSERT ELEMENTS IN ONE DIV --------- //
  const divForDesktop = document.createElement('div');
  divForDesktop.setAttribute('id', 'divForDesktop');
  divForDesktop.append(sectionProfile, divSeparation, articlePostReview);

  const divAllContentProfile = document.createElement('div');
  divAllContentProfile.append(headerProfile, imgUserProfile, divContainInfo, divForDesktop);

  return divAllContentProfile;
};
