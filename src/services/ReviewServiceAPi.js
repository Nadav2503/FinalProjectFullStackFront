import axios from "axios";
import { getToken } from "./LocalStorageService";

// Set the base URL for the reviews API
const API_URL = "http://localhost:8181/Zoo/reviews";

// Get all reviews for a specific animal
export const getReviewsForAnimal = async (animalId) => {
    try {
        const { data } = await axios.get(`${API_URL}/animal/${animalId}`, {
            headers: { "x-auth-token": getToken() },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all reviews for a specific exhibit
export const getReviewsForExhibit = async (exhibitId) => {
    try {
        const { data } = await axios.get(`${API_URL}/exhibit/${exhibitId}`, {
            headers: { "x-auth-token": getToken() },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get a specific review by ID
export const getReviewById = async (id) => {
    try {
        const { data } = await axios.get(`${API_URL}/${id}`, {
            headers: { "x-auth-token": getToken() },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

