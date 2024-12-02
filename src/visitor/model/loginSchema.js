import Joi from "joi";

const loginSchema = {
    username_or_email: Joi.string()
        .required()
        .messages({
            "string.empty": "Username or email is required.",
        }),
    password: Joi.string()
        .pattern(
            new RegExp(
                /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
            )
        )
        .required()
        .messages({
            "string.pattern.base":
                "The password must be at least seven characters long and contain an uppercase letter, a lowercase letter, a number, and one of the following characters !@#$%^&*-",
            "any.required": "Password is required.",
        }),
};

export default loginSchema;
