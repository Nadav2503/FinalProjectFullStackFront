import axios from "axios";

// Set the base URL for your API
const API_URL = "http://localhost:8181/Zoo/animals";

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

// Update an animal
export const updateAnimal = async (id, animal) => {
    try {
        const { data } = await axios.put(`${API_URL}/${id}`, animal);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update endangered status of an animal 
export const updateEndangeredStatus = async (id, status) => {
    try {
        const { data } = await axios.patch(`${API_URL}/${id}/endangered`, { status });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete an animal 
export const deleteAnimal = async (id) => {
    try {
        const { data } = await axios.delete(`${API_URL}/${id}`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};