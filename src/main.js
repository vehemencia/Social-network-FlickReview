// Import functions that show/append nodes
import { home } from './components/home.js';
import { profile } from './components/profile.js';
import { logIn } from './components/login.js';
import { register } from './components/register.js';
import { app } from './lib/config.js';
console.log(app);

// save main box content in a variable
const rootMain = document.querySelector('#root');

// create object routes
const routes = {
  '/': logIn,
  '/register': register,
  '/home': home,
  '/profile': profile,
};

// function for changing nodes according to route
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootMain.firstChild) {
    rootMain.removeChild(rootMain.firstChild);
  }
  rootMain.appendChild(routes[pathname]());
};

// variable with value (content according to layout) of route
const component = routes[window.location.pathname];

// remove and show nodes according to saved route
window.onpopstate = () => {
  while (rootMain.firstChild) {
    rootMain.removeChild(rootMain.firstChild);
  }
  rootMain.append(component());
};

// append content of layout to main div
rootMain.appendChild(component());
