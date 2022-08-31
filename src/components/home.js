import { onNavigate } from '../main.js';

export const home = () => {
  const homeDiv = document.createElement('div');

  const titleHome = document.createElement('h2');
  titleHome.textContent = 'Bienvenido a FlickReview';
  titleHome.classList.add('titulo1');

  const bodyTag = document.querySelector('body');
  bodyTag.style.backgroundImage = 'none';

  const profileButton = document.createElement('button');
  profileButton.textContent = 'Ir a perfil';
  profileButton.classList.add('boton1');
  profileButton.addEventListener('click', () => {
    onNavigate('/profile');
  });

  const outSesionButton = document.createElement('button');
  outSesionButton.textContent = 'Cerrar Sesión';
  outSesionButton.classList.add('boton1');
  outSesionButton.addEventListener('click', () => {
    onNavigate('/');
  });

  homeDiv.append(titleHome, profileButton, outSesionButton);

  return homeDiv;
};
