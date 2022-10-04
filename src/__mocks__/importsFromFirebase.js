/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
const user = {
  currentUser: {
    uid: '47928sdjs814shsuwu29',
    email: 'awadeuwu@aol.com',
  },
};

export const initializeApp = () => jest.fn();

export const auth = {};
export const db = {};
export const provider = {};
export const createUserWithEmailAndPassword = () => Promise.resolve(user);
export const signOut = () => jest.fn(Promise.resolve());
export const onAuthStateChanged = () => jest.fn(Promise.resolve());
// export const signInWithEmailAndPassword = () => jest.fn((auth, email, password) => {
//   if (email && password) return Promise.resolve({ email: email, password: password });
//   else { Promise.reject(); }
// });
export const GoogleAuthProvider = () => jest.fn();
export const signInWithPopup = () => jest.fn(Promise.resolve());
export const updateProfile = () => jest.fn(Promise.resolve({}));
