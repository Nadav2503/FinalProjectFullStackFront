import React from 'react'
import { Container } from '@mui/material';
import ExhibitForm from '../components/ExhibitForm';
import useForm from '../../form/useForm';

export default function EditExhibitPage() {
    // Initialize form handling
    const { data, errors, handleChange, validateForm, onSubmit, setData } = useForm(
        exhibit || {}, // Initialize form with fetched exhibit data (or an empty object if not available)
        exhibitSchema, // Schema to validate the form
        handleSubmit // Form submission handler
    );

    return (
        <Container>
            <ExhibitForm
                title="Edit Exhibit"
                submitLabel="Update Exhibit"
                onSubmit={onSubmit}
                validateForm={validateForm}
                errors={errors}
                data={data}
                onInputChange={handleChange}
            />
        </Container>
    );
}
