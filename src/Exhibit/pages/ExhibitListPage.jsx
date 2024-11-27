import React, { useCallback, useEffect } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../general/PageHeader";
import ExhibitFeedback from "../components/ExhibitFeedback";
import useExhibitData from "../hooks/useExhibitData";
import AddNewExhibitButton from "../components/AddExhibitButton";
import { useNavigate } from "react-router-dom";

export default function ExhibitListPage() {
    const { exhibits, isLoading, error, fetchExhibits } = useExhibitData();
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        fetchExhibits();
    }, [fetchExhibits]);

    const handleAddExhibit = () => {
        navigate("/add-exhibit"); // Navigate to AddExhibitPage
    };

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
            {/* Add New Exhibit Button */}
            < AddNewExhibitButton onAddExhibit={handleAddExhibit} />
        </Container>
    );
}