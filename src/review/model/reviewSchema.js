import Joi from "joi";

// Review form schema
const reviewSchema = {
    rating: Joi.number()
        .integer()
        .min(1)
        .max(5)
        .required()
    , // Rating: Required, integer, 1-5
    comment: Joi.string()
        .min(3)
        .max(1024)
        .trim()
        .optional()
    , // Comment: Optional, 3-1024 characters
};

export default reviewSchema;
