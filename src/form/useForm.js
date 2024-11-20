import { useCallback, useState } from "react"; // Importing React hooks for managing state and callbacks
import Joi from "joi"; // Joi library for schema-based validation

export default function useForm(initialForm, schema, handleSubmit) {
    const [data, setData] = useState(initialForm); // State to hold form data
    const [errors, setErrors] = useState({}); // State to hold form validation errors

    const validateProperty = useCallback(
        (name, value) => {
            let joiSchema = Joi.object({ [name]: schema[name] }); // Create a Joi schema for the specific field
            let { error } = joiSchema.validate({ [name]: value }); // Validate the field value
            return error ? error.details[0].message : null; // Return error message if validation fails
        },
        [schema] // Dependency array ensures this function is recreated only when schema changes
    );

    const handleChange = useCallback(
        (e) => {
            let value = e.target.value; // Get the input field value
            let name = e.target.name; // Get the input field name
            const errorMessage = validateProperty(name, value); // Validate the field
            if (errorMessage) {
                // If validation fails, add error message to errors state
                setErrors((prev) => ({ ...prev, [name]: errorMessage }));
            } else {
                // If validation passes, remove any existing error message for the field
                setErrors((prev) => {
                    let obj = { ...prev };
                    delete obj[name]; // Remove the field from errors state
                    return obj;
                });
            }
            // Update form data state with the new value for the field
            setData((prev) => ({ ...prev, [name]: value }));
        },
        [validateProperty] // Dependency array ensures this function is recreated only when validateProperty changes
    );

    const validateForm = useCallback(() => {
        const joiSchema = Joi.object(schema); // Create Joi schema for entire form
        const { error } = joiSchema.validate(data); // Validate the form data
        if (error) return false; // Return false if there are validation errors
        return true; // Return true if no validation errors
    }, [schema, data]); // Dependency array ensures this function is recreated when schema or data changes


    const handleReset = useCallback(() => {
        setData(initialForm); // Reset form data to initial values
        setErrors({}); // Clear any validation errors
    }, [initialForm]); // Dependency array ensures this function is recreated only when initialForm changes

    const onSubmit = useCallback(() => {
        if (validateForm()) {
            handleSubmit(data); // Call the provided handleSubmit callback with the form data
        }
    }, [data, validateForm, handleSubmit]); // Dependency array ensures this function is recreated when data, validateForm, or handleSubmit changes

    // Returning the form data, errors, and handler functions for form handling
    return {
        data,
        errors,
        setData,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
    };
}
