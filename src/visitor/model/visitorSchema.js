import Joi from "joi";

// Profile schema for visitor details
const profileSchema = {
    firstName: Joi.string().min(1).max(256).required(), // First name
    middleName: Joi.string().min(0).max(256).optional(), // Middle name
    lastName: Joi.string().min(1).max(256).required(), // Last name
    phone: Joi.string()
        .pattern(/^(?:\+972-?5\d{2}-?\d{4}|(?:\+972|0)?50-?\d{7})$/)
        .optional(), // Phone number
    imageUrl: Joi.string().uri().optional(), // Image URL
    imageAlt: Joi.string().max(256).optional(), // Image alternative text
};

export default profileSchema;
