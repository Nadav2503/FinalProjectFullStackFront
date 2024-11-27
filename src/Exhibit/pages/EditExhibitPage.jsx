import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "@mui/material";
import ExhibitForm from "../components/ExhibitForm";
import useForm from "../../form/useForm";
import useExhibitById from "../hooks/useExhibitDataById";
import useUpdateExhibit from "../hooks/useUpdateExhibit";
import exhibitSchema from "../model/exhibitSchema";
import normalizeExhibit from "../helpers/normalizeExhibit";

export default function EditExhibitPage() {
    const { id } = useParams(); // Extract exhibit ID from URL
    const navigate = useNavigate();
    const { exhibit, fetchExhibitById } = useExhibitById(); // Fetch the exhibit data by ID
    const { handleUpdateExhibit } = useUpdateExhibit(); // Hook for handling exhibit updates

    // Track if there are any changes to enable the submit button
    const [isChanged, setIsChanged] = useState(false);

    // Handle form submission
    const handleSubmit = useCallback(
        async (formData) => {
            try {
                await handleUpdateExhibit(id, formData); // Update the exhibit using the ID and form data
                navigate("/exhibits"); // Redirect to the exhibit list after successful update
            } catch (error) {
                console.error("Failed to update exhibit:", error);
            }
        },
        [handleUpdateExhibit, id, navigate]
    );

    // Initialize form handling
    const { data, errors, handleChange, validateForm, setData } = useForm(
        exhibit || {}, // Initialize form with fetched exhibit data (or an empty object if not available)
        exhibitSchema, // Schema to validate the form
        handleSubmit // Form submission handler
    );

    // Compare current form data with the initial data to check if there are any changes
    useEffect(() => {
        if (exhibit && data) {
            const isDataChanged = Object.keys(exhibit).some(
                (key) => exhibit[key] !== data[key]
            );
            setIsChanged(isDataChanged); // Set changes status only after data is fetched
        }
    }, [exhibit, data]); // Only run when either exhibit or data changes

    // Fetch the exhibit data on mount
    useEffect(() => {
        fetchExhibitById(id); // Fetch exhibit data by ID
    }, [id, fetchExhibitById]);

    // Once the exhibit is fetched, set the form data
    useEffect(() => {
        if (exhibit) {
            setData(normalizeExhibit(exhibit)); // Normalize data to ensure valid defaults
        }
    }, [exhibit, setData]);

    return (
        <Container>
            <ExhibitForm
                title="Edit Exhibit"
                submitLabel="Update Exhibit"
                onSubmit={handleSubmit}
                validateForm={validateForm}
                errors={errors}
                data={data}
                onInputChange={handleChange}
                isSubmitDisabled={!isChanged} // Disable submit button if no changes
            />
        </Container>
    );
}
