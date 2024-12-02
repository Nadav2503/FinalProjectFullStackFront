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



            {/* Password */}
            <Input
                name="password"
                label="Password"
                type="password"
                error={errors.password}
                onChange={onInputChange}
                data={data}
            />

            {/* Membership Tier */}
            <SelectField
                name="membershipTier"
                label="Membership Tier"
                error={errors.membershipTier}
                onChange={onInputChange}
                data={data}
                options={[
                    { value: "Tier 1 - Explorer", label: "Tier 1 - Explorer" },
                    { value: "Tier 2 - Lionheart", label: "Tier 2 - Lionheart" },
                    { value: "Tier 3 - Jungle King/Queen", label: "Tier 3 - Jungle King/Queen" },
                    { value: "Tier 4 - Safari Leader", label: "Tier 4 - Safari Leader" },
                ]}
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

export default SignupForm;
