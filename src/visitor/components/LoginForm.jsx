import React from "react";
import Form from "../../form/Form";
import Input from "../../form/Input";

const LoginForm = ({
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

export default LoginForm;
