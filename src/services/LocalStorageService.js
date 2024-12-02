import { jwtDecode } from 'jwt-decode';

const TOKEN = 'myToken'; // The key used to store the token in localStorage

// Store the token in localStorage
export const setTokenInLocalStorage = (jwtToken) => {
    localStorage.setItem(TOKEN, jwtToken);
}

// Remove the token from localStorage
export const removeToken = () => {
    localStorage.removeItem(TOKEN);
}

// Get the token from localStorage
export const getToken = () => {
    return localStorage.getItem(TOKEN);
}
