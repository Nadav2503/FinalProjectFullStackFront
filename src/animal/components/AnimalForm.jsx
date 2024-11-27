import React from "react";
import Form from "../../form/Form";


const AnimalForm = ({
    onSubmit,
    onInputChange,
    errors = {},
    data = {},
    title,
    submitLabel,
    validateForm
}) => {
    return (
        <Form
            onSubmit={onSubmit}
            errors={errors}
            styles={{ maxWidth: "800px" }}
            validateForm={validateForm}
            title={title}
            submitLabel={submitLabel}
        >

        </Form>
    );
};

export default AnimalForm;
