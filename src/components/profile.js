import { onNavigate } from '../main.js';

export const profile = () => {
  const profileDiv = document.createElement('div');

  const titleProfile = document.createElement('h2');
  titleProfile.textContent = 'Este es tu perfil';
  titleProfile.classList.add('titulo1');

  const backButton = document.createElement('button');
  backButton.textContent = 'Regresar a Home';
  backButton.classList.add('boton1');
  backButton.addEventListener('click', () => {
    onNavigate('/home');
  });

  profileDiv.append(titleProfile, backButton);

  return profileDiv;
};
