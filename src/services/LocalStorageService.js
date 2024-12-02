import { jwtDecode } from 'jwt-decode';

const TOKEN = 'myToken'; // The key used to store the token in localStorage

// Store the token in localStorage
export const setTokenInLocalStorage = (jwtToken) => {
    localStorage.setItem(TOKEN, jwtToken);
}
