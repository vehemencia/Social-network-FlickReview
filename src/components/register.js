/* eslint-disable max-len */
import {
  getAuth, createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup, updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { onNavigate } from '../main.js';
import { registerValidation, removeErrorMessage, messageDisplayError } from '../lib/general.js';

const provider = new GoogleAuthProvider();

export const register = () => {
  const bodySelector = document.querySelector('body'); // Here you can select body element from HTML
  bodySelector.style.backgroundImage = 'url(./images/collage.png)';

  const registerPageHeader = document.createElement('header'); // document.createElement creates HTML elements dynamically, a header tag in this case

  const headerDiv = document.createElement('div');
  headerDiv.setAttribute('id', 'logotypeDiv');

  const headerTitle = document.createElement('h1');
  headerTitle.setAttribute('id', 'logotypeName'); // First you assign an attribute and then the value
  headerTitle.innerHTML = 'FlickReview';

  // eslint-disable-next-line max-len
  headerDiv.appendChild(headerTitle); // Inserting elements in the header tag, first you call the base, then the thing to be inserted
  registerPageHeader.appendChild(headerDiv);

  // Creating sign up section
  const registerSection = document.createElement('section');
  registerSection.setAttribute('id', 'registerSection');

  const sectionDivMain = document.createElement('div');
  sectionDivMain.setAttribute('id', 'registerBox');

  const sectionTitle = document.createElement('h3');
  sectionTitle.setAttribute('id', 'registerText');
  sectionTitle.innerHTML = 'Sign Up';

  const createUsername = document.createElement('div');
  createUsername.classList.add('inputBox');
  const inputEmail = document.createElement('div');
  inputEmail.classList.add('inputBox');
  const createPassword = document.createElement('div');
  createPassword.classList.add('inputBox');
  const confirmPassword = document.createElement('div');
  confirmPassword.classList.add('inputBox');

  const sectionCanvasPinkOne = document.createElement('canvas');
  sectionCanvasPinkOne.classList.add('pinkBox');
  const sectionCanvasPinkTwo = document.createElement('canvas');
  sectionCanvasPinkTwo.classList.add('pinkBox');
  const sectionCanvasPinkThree = document.createElement('canvas');
  sectionCanvasPinkThree.classList.add('pinkBox');
  const sectionCanvasPinkFour = document.createElement('canvas');
  sectionCanvasPinkFour.classList.add('pinkBox');

  const createUsernameSection = document.createElement('input');
  createUsernameSection.setAttribute('id', 'createusername');
  createUsernameSection.setAttribute('type', 'text');
  const nameLabel = document.createElement('p');
  nameLabel.setAttribute('class', 'labels');
  nameLabel.innerHTML = 'Name';
  const inputEmailSection = document.createElement('input');
  inputEmailSection.setAttribute('id', 'inputemail');
  inputEmailSection.setAttribute('type', 'email');
  const mailLabel = document.createElement('p');
  mailLabel.setAttribute('class', 'labels');
  mailLabel.innerHTML = 'Mail';
  const createPasswordSection = document.createElement('input');
  createPasswordSection.setAttribute('id', 'createpass');
  createPasswordSection.setAttribute('type', 'password');
  const passwordOneLabel = document.createElement('p');
  passwordOneLabel.setAttribute('class', 'labels');
  passwordOneLabel.innerHTML = 'Choose a password';
  const confirmPasswordSection = document.createElement('input');
  confirmPasswordSection.setAttribute('id', 'confirmpass');
  confirmPasswordSection.setAttribute('type', 'password');
  const passwordTwoLabel = document.createElement('p');
  passwordTwoLabel.setAttribute('class', 'labels');
  passwordTwoLabel.innerHTML = 'Confirm your password';

  const registerButtonsDiv = document.createElement('div');
  registerButtonsDiv.setAttribute('id', 'registerButtons');

  const termsDiv = document.createElement('div');
  termsDiv.setAttribute('id', 'termsConditions');

  const acceptTerms = document.createElement('input');
  acceptTerms.setAttribute('id', 'termsCheckbox');
  acceptTerms.setAttribute('type', 'checkbox');
  const acceptTermsText = document.createElement('text');
  acceptTermsText.setAttribute('id', 'privacyText');
  acceptTermsText.innerHTML = ' I accept terms, conditions and privacy policies';

  const registerButtonSection = document.createElement('button');
  registerButtonSection.setAttribute('id', 'showtimeButton');
  registerButtonSection.innerHTML = 'Showtime!';

  const sectionFirstParr = document.createElement('p');
  sectionFirstParr.classList.add('textregisterBox');
  sectionFirstParr.innerHTML = 'Or';
  const secondParagraphSection = document.createElement('p');
  secondParagraphSection.classList.add('textregisterBox');
  secondParagraphSection.innerHTML = 'Already have an account?';
  const spanParagraphSection = document.createElement('span');
  spanParagraphSection.innerHTML = 'Log In!';

  const sectionGoogleLog = document.createElement('button');
  sectionGoogleLog.setAttribute('id', 'googleImg');

  /* Insert elements in registersection tag */

  // Insert expexted parts on each individual div
  createUsername.append(sectionCanvasPinkOne, createUsernameSection);
  inputEmail.append(sectionCanvasPinkTwo, inputEmailSection);
  createPassword.append(sectionCanvasPinkThree, createPasswordSection);
  confirmPassword.append(sectionCanvasPinkFour, confirmPasswordSection);
  termsDiv.append(acceptTerms, acceptTermsText);
  // Insert SPAN in paragraph
  secondParagraphSection.appendChild(spanParagraphSection);
  // Insert childs of registerButtons
  // eslint-disable-next-line max-len
  registerButtonsDiv.append(termsDiv, registerButtonSection, sectionFirstParr, sectionGoogleLog, secondParagraphSection);
  // Insert DIV and others tags in DIV MAIN
  // eslint-disable-next-line max-len
  sectionDivMain.append(sectionTitle, nameLabel, createUsername, mailLabel, inputEmail, passwordOneLabel, createPassword, passwordTwoLabel, confirmPassword, registerButtonsDiv);
  // Insert Div section in Section Tag
  registerSection.appendChild(sectionDivMain);

  acceptTermsText.addEventListener('click', () => {
    window.open('https://en.wikipedia.org/wiki/Terms_of_service', 'Terms and conditions');
  });

  // Add Event to button Showtime!
  registerButtonSection.addEventListener('click', () => {
    const validation = registerValidation(createUsernameSection.value, inputEmailSection.value, createPasswordSection.value, confirmPasswordSection.value, acceptTerms.checked);
    if (validation === false) {
      setTimeout(removeErrorMessage, 3000);
    } else {
      // Authentication New user
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, inputEmailSection.value, createPasswordSection.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (createUsernameSection.value !== '') {
            updateProfile(auth.currentUser, {
              displayName: createUsernameSection.value,
            });
          }
          onNavigate('/home');
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
            messageDisplayError('This email already has an account', 'registerButtons', 'showtimeButton');
            setTimeout(removeErrorMessage, 3000);
          }
        });
    }
  });

  sectionGoogleLog.addEventListener('click', () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        onNavigate('/home');
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  });

  secondParagraphSection.addEventListener('click', () => {
    onNavigate('/');
  });

  // Creation and insertion of DIV for all content
  const allContent = document.createElement('div');
  allContent.append(registerPageHeader, registerSection);

  return allContent;
};
