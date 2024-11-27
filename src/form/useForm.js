import { useCallback, useState } from "react";
import Joi from "joi";

export default function useForm(initialForm, schema, handleSubmit) {
    const [data, setData] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const validateProperty = useCallback(
        (name, value) => {
            console.log(`Validating property: ${name} with value: ${value}`);
            let joiSchema = Joi.object({ [name]: schema[name] });
            let { error } = joiSchema.validate({ [name]: value });
            const errorMessage = error ? error.details[0].message : null;
            console.log(`Validation error for ${name}:`, errorMessage);
            return errorMessage;
        },
        [schema]
    );

    const validateForm = useCallback(() => {
        console.log("Validating entire form...");
        console.log("Validating form with data:", data);
        const joiSchema = Joi.object(schema);
        const { error } = joiSchema.validate(data);
        const isValid = !error;
        console.log("Form validation status:", isValid);
        return isValid; // Returns true if the form is valid, false otherwise
    }, [schema, data]);

    const handleChange = useCallback(
        (e) => {
            let value = e.target.value;
            let name = e.target.name;
            console.log(`Handling change for ${name}: ${value}`);

            const errorMessage = validateProperty(name, value);

            if (errorMessage) {
                console.log(`Setting error for ${name}: ${errorMessage}`);
                setErrors((prev) => ({ ...prev, [name]: errorMessage }));
            } else {
                setErrors((prev) => {
                    let obj = { ...prev };
                    delete obj[name];
                    return obj;
                });
            }

            setData((prev) => ({ ...prev, [name]: value }));

            // Trigger form validation whenever input changes
            validateForm();
        },
        [validateProperty, validateForm]
    );

    const onSubmit = useCallback(() => {
        console.log("Submit triggered");
        if (validateForm()) {
            console.log("Form is valid, submitting:", data);
            handleSubmit(data);
        } else {
            console.log("Form is invalid, not submitting");
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
