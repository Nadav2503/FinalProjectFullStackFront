import React from "react";
import ExhibitForm from "../components/ExhibitForm";
import initializeExhibit from "../helpers/initializeExhibit";

import useForm from "../../form/useForm";
import exhibitSchema from "../model/exhibitSchema";
import { Container } from "@mui/material";

export default function AddExhibitPage() {


    const { data, errors, handleChange, validateForm, onSubmit } = useForm(
        initializeExhibit,  // Initialize the form with an empty exhibit structure
        exhibitSchema,      // Validate using the custom function
        handleSubmit
    );

    console.log("Rendering AddExhibitPage with data:", data);

    return (
        <Container>
            <ExhibitForm
                title="Add New Exhibit"
                submitLabel="Create Exhibit"
                onSubmit={onSubmit}
                validateForm={validateForm}
                errors={errors}
                data={data}
                onInputChange={handleChange}
            />
        </Container>
    );
}