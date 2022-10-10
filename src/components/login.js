/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import {
  auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
} from '../importsFromFirebase.js';
import { onNavigate } from '../main.js';
import { wrongPassword, removeErrorMessage, validateLogin } from '../lib/general.js';

export const logIn = () => {
  const provider = new GoogleAuthProvider();
  const bodyTag = document.querySelector('body');
  bodyTag.style.backgroundImage = 'url(./images/collage.png)';

  // Creation of DOM Elements of Header
  const headerLogIn = document.createElement('header');

  const headerDiv = document.createElement('div');
  headerDiv.setAttribute('id', 'logotypeDiv');

  const headerTitle = document.createElement('h1');
  headerTitle.setAttribute('id', 'logotypeName');
  headerTitle.innerHTML = 'FlickReview';

  /** Insert Elements in Header tag */
  headerDiv.appendChild(headerTitle);
  headerLogIn.appendChild(headerDiv);

  // Creation of DOM Elements of Section
  const sectionLogIn = document.createElement('section');
  sectionLogIn.setAttribute('id', 'sectionLogIn');

  const sectionDivMain = document.createElement('div');
  sectionDivMain.setAttribute('id', 'logInBox');

  const sectionTitle = document.createElement('h3');
  sectionTitle.setAttribute('id', 'logInText');
  sectionTitle.innerHTML = 'Log In';

  const sectionDivInputUser = document.createElement('div');
  sectionDivInputUser.classList.add('inputBox');
  const sectionDivInputPass = document.createElement('div');
  sectionDivInputPass.classList.add('inputBox');

  const sectionCanvasPinkOne = document.createElement('canvas');
  sectionCanvasPinkOne.classList.add('pinkBox');
  const sectionCanvasPinkTwo = document.createElement('canvas');
  sectionCanvasPinkTwo.classList.add('pinkBox');

  const emailLabel = document.createElement('p');
  emailLabel.setAttribute('class', 'labels');
  emailLabel.innerHTML = 'Email';
  const sectionInputUserName = document.createElement('input');
  sectionInputUserName.setAttribute('id', 'userName');
  sectionInputUserName.setAttribute('type', 'email');
  const passwordLabel = document.createElement('p');
  passwordLabel.setAttribute('class', 'labels');
  passwordLabel.innerHTML = 'Password';
  const sectionInputPass = document.createElement('input');
  sectionInputPass.setAttribute('id', 'userPass');
  sectionInputPass.setAttribute('type', 'password');

  const sectionDivButtons = document.createElement('div');
  sectionDivButtons.setAttribute('id', 'logInButtons');

  const sectionButtonLog = document.createElement('button');
  sectionButtonLog.setAttribute('id', 'logInButton');
  sectionButtonLog.innerHTML = 'Action!';

  const sectionFirstParr = document.createElement('p');
  sectionFirstParr.classList.add('textLogInBox');
  sectionFirstParr.innerHTML = 'Or';
  const sectionSecondParr = document.createElement('p');
  sectionSecondParr.classList.add('textLogInBox');
  sectionSecondParr.innerHTML = "Don't have an account?";
  const sectionSpanParr = document.createElement('span');
  sectionSpanParr.innerHTML = 'Sign Up!';

  const sectionGoogleLog = document.createElement('button');
  sectionGoogleLog.setAttribute('id', 'googleImg');

  /** Insert elements in Section tag */

  // Insert children of Inputs
  sectionDivInputUser.append(sectionCanvasPinkOne, sectionInputUserName);
  sectionDivInputPass.append(sectionCanvasPinkTwo, sectionInputPass);
  // Insert Span in paragraph
  sectionSecondParr.appendChild(sectionSpanParr);
  // Insert children of logInButtons
  sectionDivButtons.append(sectionButtonLog, sectionFirstParr, sectionGoogleLog, sectionSecondParr);
  // Insert Div and others tags in Div Main
  sectionDivMain.append(sectionTitle, emailLabel, sectionDivInputUser, passwordLabel, sectionDivInputPass, sectionDivButtons);
  // Insert Div section in Section Tag
  sectionLogIn.appendChild(sectionDivMain);

  // Add Event to button Action!
  sectionButtonLog.addEventListener('click', () => {
    const loginData = validateLogin(sectionInputUserName.value, sectionInputPass.value);
    if (loginData === false) {
      return setTimeout(removeErrorMessage, 3000);
    }
    signInWithEmailAndPassword(auth, sectionInputUserName.value, sectionInputPass.value)
      .then((userCredential) => {
        onNavigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        wrongPassword();
        setTimeout(removeErrorMessage, 3000);
      });
  });

  sectionGoogleLog.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        onNavigate('/home');
      }).catch((error) => {
        onNavigate('/');
      });
  });

  sectionSpanParr.addEventListener('click', () => {
    onNavigate('/register');
  });

  // Creation and insertion of DIV for all content
  const divAllContent = document.createElement('div');
  divAllContent.append(headerLogIn, sectionLogIn);

  return divAllContent;
};
