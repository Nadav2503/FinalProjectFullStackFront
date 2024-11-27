import React from "react";
import Form from "../../form/Form";
import Input from "../../form/Input";
import RadioField from "../../form/Radio";

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
            {/* Name Input */}
            <Input
                name="name"
                label="Name"
                error={errors.name}
                onChange={onInputChange}
                data={data}
            />

            {/* Type Input */}
            <Input
                name="type"
                label="Type"
                error={errors.type}
                onChange={onInputChange}
                data={data}
            />

            {/* Gender RadioField */}
            <RadioField
                name="gender"
                label="Gender"
                error={errors.gender}
                onChange={onInputChange}
                data={data}
                options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                ]}
            />


        </Form>
    );
};

export default AnimalForm;
