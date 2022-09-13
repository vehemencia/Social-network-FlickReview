export const wrongPassword = () => {
  const wrongPasswordMessage = document.createElement('p');
  wrongPasswordMessage.innerHTML = 'Wrong password, try again';
  wrongPasswordMessage.classList.add('registerErrorMessage');

  return document.getElementById('logInButtons').prepend(wrongPasswordMessage);
};

export function messageDisplayError(text, containerParent, buttonId) {
  const generalErrorMessage = document.createElement('p');
  generalErrorMessage.innerHTML = text;
  generalErrorMessage.classList.add('registerErrorMessage');
  document.getElementById(containerParent).insertBefore(generalErrorMessage, document.getElementById(buttonId));
}

export function registerValidation(user, mail, choosenPassword, confirmedPassword, terms) {
  if (user === '' || mail === '' || choosenPassword === '' || confirmedPassword === '' || terms === false) {
    messageDisplayError('Please, complete all fields', 'registerButtons', 'showtimeButton');
    return false;
  } if (choosenPassword !== confirmedPassword) {
    messageDisplayError('Password does not match', 'registerButtons', 'showtimeButton');
    return false;
  } if (choosenPassword.length < 6 && confirmedPassword.length < 6) {
    messageDisplayError('Password must be at least 6 characters long', 'registerButtons', 'showtimeButton');
  } else {
    return true;
  }
}

export function removeErrorMessage() {
  document.querySelector('.registerErrorMessage').remove();
}

export function validateLogin(mail, password) {
  if (mail === '' || password === '') {
    messageDisplayError('Please, complete all fields', 'logInButtons', 'logInButton');
    return false;
  }
  return true;
}

export function cleaningReviewBox(titleBox, reviewBox) {
  if (titleBox.value !== '' && reviewBox.value !== '') {
    titleBox.value = '';
    reviewBox.value = '';
  }
}
