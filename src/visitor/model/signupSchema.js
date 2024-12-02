import Joi from "joi";

const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

// Profile schema for visitor details
const signupSchema = {
    username: Joi.string().min(3).max(30).required(), // Username
    firstName: Joi.string().min(1).max(256).required(), // First name
    middleName: Joi.string().min(0).max(256).optional(), // Middle name
    lastName: Joi.string().min(1).max(256).required(), // Last name
    email: Joi.string()
        .pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        .required(), // Email
    password: Joi.string()
        .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"))
        .required(), // Password with 8+ characters, letters, numbers
    membershipTier: Joi.string()
        .valid("Tier 1 - Explorer", "Tier 2 - Lionheart", "Tier 3 - Jungle King/Queen", "Tier 4 - Safari Leader")
        .default("Tier 1 - Explorer"), // Membership tier
    phone: Joi.string()
        .pattern(/^(?:\+972-?5\d{2}-?\d{4}|(?:\+972|0)?50-?\d{7})$/)
        .optional(), // Phone number
    imageUrl: Joi.string()
        .trim()
        .lowercase()
        .pattern(urlRegex)
        .optional()
        .messages({
            "string.pattern.base": "Please enter a valid URL (e.g., http://example.com)."
        }),
    imageAlt: Joi.string().max(256).optional(), // Image alternative text
};

export default signupSchema;
