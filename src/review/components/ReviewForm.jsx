import React from 'react';
import Form from '../../form/Form';
import RatingField from '../../form/Rating';

const ReviewForm = ({
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
            {/* Rating Field */}
            <RatingField
                name="rating"
                label="Rating"
                error={errors.rating}
                onChange={onInputChange}
                data={data}
            />


        </Form>
    );
};

export default ReviewForm;
