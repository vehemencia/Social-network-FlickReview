export const wrongPassword = () => {
  const wrongPasswordMessage = document.createElement('p');
  wrongPasswordMessage.innerHTML = 'Wrong password, try again';
  wrongPasswordMessage.classList.add('registerErrorMessage');

  return document.getElementById('logInButtons').prepend(wrongPasswordMessage);
};

export function registerValidation(user, mail, choosenPassword, confirmedPassword, terms) {
  if (user === '' || mail === '' || choosenPassword === '' || confirmedPassword === '' || terms === false) {
    const generalErrorMessage = document.createElement('p');
    generalErrorMessage.innerHTML = 'Please, complete all fields';
    generalErrorMessage.classList.add('registerErrorMessage');

    return document.getElementById('registerButtons').insertBefore(generalErrorMessage, document.getElementById('showtimeButton'));
  // eslint-disable-next-line no-else-return
  } else if (choosenPassword !== confirmedPassword) {
    const passwordError = document.createElement('p');
    passwordError.innerText = 'Password does not match';
    passwordError.classList.add('registerErrorMessage');

    return document.getElementById('registerButtons').insertBefore(passwordError, document.getElementById('showtimeButton'));
  }
}

export function removeErrorMessage() {
  document.querySelector('.registerErrorMessage').remove();
}
