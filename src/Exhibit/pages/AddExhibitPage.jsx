import React from "react";
import ExhibitForm from "../components/ExhibitForm";
import { Container } from "@mui/material";

export default function AddExhibitPage() {

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