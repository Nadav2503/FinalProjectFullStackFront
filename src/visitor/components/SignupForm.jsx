import React from "react";
import Form from "../../form/Form";
import Input from "../../form/Input";


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
            {/* Username */}
            <Input
                name="username"
                label="Username"
                error={errors.username}
                onChange={onInputChange}
                data={data}
            />

        </Form>
    );
};

export default SignupForm;
