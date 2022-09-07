/* eslint-disable max-len */
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { onNavigate } from '../main.js';
import { registerValidation, removeErrorMessage, messageDisplayError } from '../lib/general.js';

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
  createUsernameSection.setAttribute('placeholder', 'Tell us your full name');
  const inputEmailSection = document.createElement('input');
  inputEmailSection.setAttribute('id', 'inputemail');
  inputEmailSection.setAttribute('type', 'email');
  inputEmailSection.setAttribute('placeholder', 'write your e-mail');
  const createPasswordSection = document.createElement('input');
  createPasswordSection.setAttribute('id', 'createpass');
  createPasswordSection.setAttribute('type', 'password');
  createPasswordSection.setAttribute('placeholder', 'choose your password');
  const confirmPasswordSection = document.createElement('input');
  confirmPasswordSection.setAttribute('id', 'confirmpass');
  confirmPasswordSection.setAttribute('type', 'password');
  confirmPasswordSection.setAttribute('placeholder', 'confirm your password');

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

  const sectionGoogleLog = document.createElement('img');
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
  sectionDivMain.append(sectionTitle, createUsername, inputEmail, createPassword, confirmPassword, registerButtonsDiv);
  // Insert Div section in Section Tag
  registerSection.appendChild(sectionDivMain);

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
          onNavigate('/home');
          sendEmailVerification(auth.currentUser)
            .then(() => {
              // Email verification sent!
            });
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          messageDisplayError(errorMessage);
          setTimeout(removeErrorMessage, 3000);
        });
    }
  });

  secondParagraphSection.addEventListener('click', () => {
    onNavigate('/');
  });

  // Creation and insertion of DIV for all content
  const allContent = document.createElement('div');
  allContent.append(registerPageHeader, registerSection);

  return allContent;
};
