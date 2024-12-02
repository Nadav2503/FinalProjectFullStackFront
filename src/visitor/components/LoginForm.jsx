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
            <Input
                name="username_or_email"
                label="Username or Email"
                error={errors.username_or_email}
                onChange={onInputChange}
                data={data}
            />


        </Form>
    );
};

export default LoginForm;
