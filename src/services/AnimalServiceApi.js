import axios from "axios";

// Set the base URL for your API
const API_URL = "http://localhost:8181/Zoo/animals";

// Get all animals
export const getAnimals = async () => {
    try {
        const { data } = await axios.get(API_URL);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};