/**
*@ jest-environment jsdom
*/

import { register } from '../src/components/register.js';
import { onNavigate } from '../src/main.js';

jest.mock('../src/importsFromFirebase.js');
jest.mock('../src/main.js');

describe('Register', () => {
  it('should be a function', () => {
    expect(typeof register).toBe('function');
  });

  test('lets a user to create an account', () => {
    const element = register();
    const userName = element.querySelector('#createusername');
    const userEmail = element.querySelector('#inputemail');
    const createPassword = element.querySelector('#createpass');
    const confirmPassword = element.querySelector('#confirmpass');
    const checkBox = element.querySelector('#termsCheckbox');
    const buttonRegister = element.querySelector('#showtimeButton');
    userName.value = 'Uwustacio';
    userEmail.value = 'awadeuwu@gmail.com';
    createPassword.value = 'Abcdef1';
    confirmPassword.value = 'Abcdef1';
    checkBox.checked = true;
    buttonRegister.click();
    setTimeout(() => {
      expect(onNavigate).toHaveBeenCalled();
    }, 5000);
  });

  test('redirects a new user to home page', () => {
    const element = register();
    const userName = element.querySelector('#createusername');
    const userEmail = element.querySelector('#inputemail');
    const createPassword = element.querySelector('#createpass');
    const confirmPassword = element.querySelector('#confirmpass');
    const checkBox = element.querySelector('#termsCheckbox');
    const buttonRegister = element.querySelector('#showtimeButton');
    userName.value = 'Uwustacio';
    userEmail.value = 'awadeuwu@gmail.com';
    createPassword.value = 'Abcdef1';
    confirmPassword.value = 'Abcdef1';
    checkBox.checked = true;
    buttonRegister.click();
    expect(window.location.pathname).toEqual('/home');
  });
});
