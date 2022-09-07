export const wrongPassword = () => {
  const wrongPasswordMessage = document.createElement('p');
  wrongPasswordMessage.innerHTML = 'Wrong password, try again';
  wrongPasswordMessage.classList.add('registerErrorMessage');

  return document.getElementById('logInButtons').prepend(wrongPasswordMessage);
};

export function messageDisplayError(text) {
  const generalErrorMessage = document.createElement('p');
  generalErrorMessage.innerHTML = text;
  generalErrorMessage.classList.add('registerErrorMessage');
  document.getElementById('registerButtons').insertBefore(generalErrorMessage, document.getElementById('showtimeButton'));
}

export function registerValidation(user, mail, choosenPassword, confirmedPassword, terms) {
  if (user === '' || mail === '' || choosenPassword === '' || confirmedPassword === '' || terms === false) {
    messageDisplayError('Please, complete all fields');
    return false;
  // eslint-disable-next-line no-else-return
  } else if (choosenPassword !== confirmedPassword) {
    messageDisplayError('Password does not match');
    return false;
  } else {
    return true;
  }
}

export function removeErrorMessage() {
  document.querySelector('.registerErrorMessage').remove();
}
