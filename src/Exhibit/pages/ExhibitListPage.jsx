import React, { useCallback, useEffect } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../general/PageHeader";
import ExhibitFeedback from "../components/ExhibitFeedback";
import useExhibitData from "../hooks/useExhibitData";
import AddNewExhibitButton from "../components/AddExhibitButton";

export default function ExhibitListPage() {
    const { exhibits, isLoading, error, fetchExhibits } = useExhibitData();

    useEffect(() => {
        fetchExhibits();
    }, [fetchExhibits]);


    // Define handleDelete and handleEditExhibit here if you want to keep them in this component
    const handleDelete = useCallback((id) => {
        console.log(`Deleting exhibit with id: ${id}`);
        // Implement your delete logic here
    }, []);

    const handleEditExhibit = useCallback((id) => {
        console.log(`Editing exhibit with id: ${id}`);
        // Implement your edit logic here
    }, []);

    return (
        <Container>
            <PageHeader
                title="Exhibits at Our Zoo"
                subtitle="Browse the various exhibits and discover the incredible wildlife that calls our zoo home."
            />

            <ExhibitFeedback
                isLoading={isLoading}
                error={error}
                exhibits={exhibits}
                handleDelete={handleDelete}
                handleEditExhibit={handleEditExhibit}
            />
            <AddNewExhibitButton />
        </Container>
    );
}
