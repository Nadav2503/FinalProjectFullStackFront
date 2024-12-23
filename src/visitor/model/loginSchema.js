import Joi from "joi";

const passwordPattern = new RegExp(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d{4,})(?=.*[!@#$%^&*\-_])[A-Za-z\d!@#$%^&*\-_]{8,}$/
);

const loginSchema = {
    username_or_email: Joi.string()
        .required()
        .messages({
            "string.empty": "Username or email is required.",
        }),
    password: Joi.string()
        .pattern(
            passwordPattern
        )
        .required()
        .messages({
            "string.pattern.base":
                "The password must be at least seven characters long and contain an uppercase letter, a lowercase letter, a number, and one of the following characters !@#$%^&*-",
            "any.required": "Password is required.",
        }),
};

export default loginSchema;
