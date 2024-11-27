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

// Get animals by exhibit ID 
export const getAnimalsByExhibit = async (exhibitId) => {
    try {
        const { data } = await axios.get(`${API_URL}/exhibit/${exhibitId}`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get specific animal by ID 
export const getAnimalById = async (id) => {
    try {
        const { data } = await axios.get(`${API_URL}/${id}`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Create a new animal 
export const createAnimal = async (animal) => {
    try {
        const { data } = await axios.post(API_URL, animal);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};