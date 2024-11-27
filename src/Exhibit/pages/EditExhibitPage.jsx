import React from 'react'
import { Container } from '@mui/material';
import ExhibitForm from '../components/ExhibitForm';

export default function EditExhibitPage() {
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
