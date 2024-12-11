import { useCallback, useState } from "react";
import Joi from "joi";

export default function useForm(initialForm, schema, handleSubmit) {
    const [data, setData] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const validateProperty = useCallback(
        (name, value) => {
            let joiSchema = Joi.object({ [name]: schema[name] });
            let { error } = joiSchema.validate({ [name]: value });
            const errorMessage = error ? error.details[0].message : null;
            return errorMessage;
        },
        [schema]
    );

    const validateForm = useCallback(() => {
        const joiSchema = Joi.object(schema);
        const { error } = joiSchema.validate(data);
        return !error; // Returns true if the form is valid, false otherwise
    }, [schema, data]);

    const handleChange = useCallback(
        (e, newValue = null) => {
            let value;
            let name;

            if (newValue !== null) {
                // Handle Rating component
                name = e; // When onChange sends the name directly
                value = newValue;
            } else {
                // Handle other input types
                value = e.target.value;
                name = e.target.name;

                if (e.target.type === "checkbox") {
                    value = e.target.checked;
                }
            }

            // Validate the input value
            const errorMessage = validateProperty(name, value);

            if (errorMessage) {
                setErrors((prev) => ({ ...prev, [name]: errorMessage }));
            } else {
                setErrors((prev) => {
                    const obj = { ...prev };
                    delete obj[name];
                    return obj;
                });
            }

            // Update form data
            setData((prev) => ({ ...prev, [name]: value }));

            // Trigger form validation
            validateForm();
        },
        [validateProperty, validateForm]
    );


    const onSubmit = useCallback(() => {
        if (validateForm()) {
            handleSubmit(data);
        }
    }, [data, validateForm, handleSubmit]);

    return {
        data,
        errors,
        setData,
        handleChange,
        validateForm,
        onSubmit,
    };
}
