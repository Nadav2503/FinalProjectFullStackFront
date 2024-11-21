import axios from "axios";

// Set the base URL for your API
const API_URL = "http://localhost:8181/Zoo/exhibits";

export const getExhibits = async () => {
    try {
        const { data } = await axios.get(API_URL);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getExhibitById = async (id) => {
    try {
        const { data } = await axios.get(`${API_URL}/${id}`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const createExhibit = async (exhibit) => {
    try {
        const { data } = await axios.post(API_URL, exhibit);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateExhibit = async (id, exhibit) => {
    try {
        const { data } = await axios.put(`${API_URL}/${id}`, exhibit);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteExhibit = async (id) => {
    try {
        const { data } = await axios.delete(`${API_URL}/${id}`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

