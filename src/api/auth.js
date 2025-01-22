import { auth } from '../firebase';

// Store the Firebase ID token in localStorage
export const storeToken = async () => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    localStorage.setItem('token', token);
  }
};

// Remove the Firebase ID token from localStorage
export const removeToken = () => {
  localStorage.removeItem('token');
};

// Check if the user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

// Get the current user's ID token
export const getToken = async () => {
  const user = auth.currentUser;
  if (user) {
    return await user.getIdToken();
  }
  return null;
};