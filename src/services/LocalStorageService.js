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

// Get the decoded user data from the token
export const getUser = () => {
    try {
        const myToken = getToken();
        if (myToken) {
            return jwtDecode(myToken); // Decode the token to extract user information
        }
        return null; // Return null if no token exists
    } catch (err) {
        return null; // If token decoding fails, return null
    }
}
