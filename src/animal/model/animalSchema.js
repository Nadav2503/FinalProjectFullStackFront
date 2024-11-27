import Joi from "joi";

// Animal schema
const animalSchema = {
    name: Joi.string().min(2).max(256).trim().lowercase().required(), // Name: Required, 2-256 characters, trimmed, lowercase
    type: Joi.string().min(2).max(256).trim().lowercase().required(), // Type: Required, 2-256 characters, trimmed, lowercase
    gender: Joi.string().valid('male', 'female').required(), // Gender: Enum (male, female), required
    age: Joi.number().min(1).required(), // Age: Minimum 1, required
    description: Joi.string().min(2).max(256).trim().lowercase().required(), // Description: Required, 2-256 characters, trimmed, lowercase
    diet: Joi.string().valid('omnivore', 'carnivore', 'herbivore').required(), // Diet: Enum, required
    isEndangered: Joi.boolean().required(), // Boolean field for endangered status
    healthStatus: Joi.string().min(2).max(256).trim().lowercase().required(), // Health Status: Required, 2-256 characters, trimmed, lowercase
    image: Joi.object({
        url: Joi.string()
            .trim()
            .lowercase()
            .pattern(
                /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
            )
            .optional(), // Optional field
        alt: Joi.string().min(2).max(256).trim().lowercase().optional(), // Optional field
    }).required(), // Image object remains required
};

export default animalSchema;
