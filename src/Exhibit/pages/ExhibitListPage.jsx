import React, { useEffect } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../general/PageHeader";
import ExhibitFeedback from "../components/ExhibitFeedback";
import useExhibitData from "../hooks/useExhibitData";
import AddNewExhibitButton from "../components/AddExhibitButton";
import { useNavigate } from "react-router-dom";
import useDeleteExhibit from "../hooks/useDeleteExhibit"; // Import the custom hook

export default function ExhibitListPage() {
    const { exhibits, isLoading, error, fetchExhibits } = useExhibitData();
    const navigate = useNavigate(); // Hook for navigation

    // Use the custom delete hook
    const { handleDeleteExhibit } = useDeleteExhibit();

    useEffect(() => {
        fetchExhibits();
    }, [fetchExhibits]);

    const handleAddExhibit = () => {
        navigate("/add-exhibit"); // Navigate to AddExhibitPage
    };

    const handleDelete = async (id) => {
        await handleDeleteExhibit(id); // Use the delete hook's function
        fetchExhibits(); // Refetch exhibits after deletion (if needed)
    };

    const handleEditExhibit = (id) => {
        navigate(`/edit-exhibit/${id}`); // Navigate to EditExhibitPage
    };

    return (
        <Container>
            <PageHeader
                title="Exhibits at Our Zoo"
                subtitle="Browse the various exhibits and discover the incredible wildlife that calls our zoo home."
            />

            <ExhibitFeedback
                isLoading={isLoading} // Show loading if exhibits or deletion is loading
                error={error} // Show any errors from fetching or deletion
                exhibits={exhibits}
                handleDelete={handleDelete} // Pass the handleDelete function
                handleEditExhibit={handleEditExhibit} // Pass the handleEditExhibit function
            />
            {/* Add New Exhibit Button */}
            <AddNewExhibitButton onAddExhibit={handleAddExhibit} />
        </Container>
    );
}
