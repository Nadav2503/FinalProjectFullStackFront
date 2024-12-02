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

// Register a new visitor
export const registerVisitor = async (visitor) => {
    try {
        const { data } = await axios.post(`${API_URL}/register`, visitor);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Login a visitor
export const loginVisitor = async (credentials) => {
    try {
        const { data } = await axios.post(`${API_URL}/login`, credentials);
        return data; // Return token or user data depending on your API structure
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a visitor's profile
export const updateVisitorProfile = async (id, visitor) => {
    try {
        const { data } = await axios.put(`${API_URL}/${id}`, visitor);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
