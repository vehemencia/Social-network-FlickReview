// import functions that show/append nodes
import { home } from './components/home.js';
import { profile } from './components/profile.js';

// access to root through querySelector
const rootMain = document.querySelector('#root');

// create routes to access later using nodes
const routes = {
  //'/': login,
  '/home': home,
  '/profile': profile,
};

// function for changing nodes according to their route
export const onNavigate = (pathname) => { //this pathname is used as a parameter
  window.history.pushState(
    {},
    pathname, // this pathname, again, is the one obtained thru the parameter
    window.location.origin + pathname,
  );
  rootMain.removeChild(rootMain.firstChild);
  rootMain.appendChild(routes[pathname]());
};

// variable with value (content according to layout) of route
const component = routes[window.location.pathname];

// remove and show nodes according to saved route via popstate, which is an event
window.onpopstate = () => {
  rootMain.removeChild(rootMain.firstChild);
  rootMain.append(component());
};

// append content of layout to main div
rootMain.appendChild(component());
