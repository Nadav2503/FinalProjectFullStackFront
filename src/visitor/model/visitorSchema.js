import Joi from "joi";

// Visitor schema for frontend validation
const visitorSchema = {
    username: Joi.string().min(3).max(30).required(), // Username, required and with min/max length
    firstName: Joi.string().min(1).max(256).required(), // First name, required with min/max length
    middleName: Joi.string().min(0).max(256).optional(), // Middle name, optional with min/max length
    lastName: Joi.string().min(1).max(256).required(), // Last name, required with min/max length
    email: Joi.string().email().required(), // Email, required and must be valid
    password: Joi.string()
        .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"))
        .required(), // Password, required with at least 8 characters, one letter, and one number
    membershipTier: Joi.string()
        .valid("Tier 1 - Explorer", "Tier 2 - Lionheart", "Tier 3 - Jungle King/Queen", "Tier 4 - Safari Leader")
        .default("Tier 1 - Explorer"), // Membership tier with defaults
    phone: Joi.string()
        .pattern(/^(?:\+972-?5\d{2}-?\d{4}|(?:\+972|0)?50-?\d{7})$/)
        .optional(), // Phone number with optional Israeli format validation
    imageUrl: Joi.string().uri().optional(), // Profile image URL, optional
    imageAlt: Joi.string().max(256).optional(), // Profile image alternative text, optional
};

export default visitorSchema;
