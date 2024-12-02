import React from "react";
import Form from "../../form/Form";


const SignupForm = ({
    onSubmit,
    onInputChange,
    errors = {},
    data = {},
    title,
    submitLabel,
    validateForm,
    isSubmitting,
}) => {
    return (
        <Form
            title={title}
            errors={errors}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            validateForm={validateForm}
            submitLabel={submitLabel}
        >

        </Form>
    );
};

export default SignupForm;
