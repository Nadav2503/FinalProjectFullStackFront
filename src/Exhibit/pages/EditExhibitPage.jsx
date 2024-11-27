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

    // Fetch the exhibit data on mount
    useEffect(() => {
        console.log("Fetching exhibit data with ID:", id);
        fetchExhibitById(id); // Fetch exhibit data by ID
    }, [id, fetchExhibitById]);

    // Once the exhibit is fetched, set the form data
    useEffect(() => {
        if (exhibit) {
            console.log("Setting exhibit data to form:", exhibit);
            setData(normalizeExhibit(exhibit)); // Normalize data to ensure valid defaults
        }
    }, [exhibit, setData]);

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
