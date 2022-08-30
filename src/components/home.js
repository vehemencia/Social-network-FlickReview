import { onNavigate } from '../main.js';

export const home = () => {
  const homeDiv = document.createElement('div');

  const titleHome = document.createElement('h2');
  titleHome.textContent = 'Bienvenido a FlickReview';

  const profileButton = document.createElement('button');
  profileButton.textContent = 'Ir a perfil';
  profileButton.addEventListener('click', () => {
    onNavigate('/profile');
  });

  homeDiv.append(titleHome, profileButton);

  return homeDiv;
};
