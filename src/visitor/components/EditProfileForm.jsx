import React from "react";
import Form from "../../form/Form";
import Input from "../../form/Input";

const EditProfileForm = ({
    onSubmit,
    onInputChange,
    errors = {},
    data = {},
    title,
    submitLabel,
    validateForm,
}) => {
    return (
        <Form
            title={title}
            errors={errors}
            onSubmit={onSubmit}
            validateForm={validateForm}
            submitLabel={submitLabel}
        >

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

            {/* Phone */}
            <Input
                name="phone"
                label="Phone"
                type="tel"
                error={errors.phone}
                onChange={onInputChange}
                data={data}
            />

            {/* Image URL */}
            <Input
                name="imageUrl"
                label="Profile Picture URL"
                error={errors.imageUrl}
                onChange={onInputChange}
                data={data}
            />

            {/* Image Alt Text */}
            <Input
                name="imageAlt"
                label="Profile Picture Description"
                error={errors.imageAlt}
                onChange={onInputChange}
                data={data}
            />
        </Form>
    );
};

export default EditProfileForm;
