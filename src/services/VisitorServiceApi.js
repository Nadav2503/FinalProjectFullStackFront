import axios from "axios";

// Set the base URL for your API
const API_URL = "http://localhost:8181/Zoo/visitors";

// Get all visitors (admin only)
export const getAllVisitors = async () => {
    try {
        const { data } = await axios.get(API_URL);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get a visitor by ID
export const getVisitorById = async (id) => {
    try {
        const { data } = await axios.get(`${API_URL}/${id}`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
