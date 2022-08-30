// Import functions that show/append nodes
import { home } from './components/home.js';
import { profile } from './components/profile.js';

// save main box content in a variable
const rootMain = document.querySelector('#root');

// save in an object routes
const routes = {
  '/': login,
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
  rootMain.removeChild(rootMain.firstChild);
  rootMain.appendChild(routes[pathname]());
};

// variable with value (content according to layout) of route
const component = routes[window.location.pathname];

// remove and show nodes according to saved route
window.onpopstate = () => {
  rootMain.removeChild(rootMain.firstChild);
  rootMain.append(component());
};

// append content of layout to main div
rootMain.appendChild(component());
