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

            {/* First Name */}
            <Input
                name="firstName"
                label="First Name"
                error={errors.firstName}
                onChange={onInputChange}
                data={data}
            />

            {/* Middle Name */}
            <Input
                name="middleName"
                label="Middle Name"
                error={errors.middleName}
                onChange={onInputChange}
                data={data}
            />

            {/* Last Name */}
            <Input
                name="lastName"
                label="Last Name"
                error={errors.lastName}
                onChange={onInputChange}
                data={data}
            />

            {/* Email */}
            <Input
                name="email"
                label="Email"
                type="email"
                error={errors.email}
                onChange={onInputChange}
                data={data}
            />


        </Form>
    );
};

export default SignupForm;
