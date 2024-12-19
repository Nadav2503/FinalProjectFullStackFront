import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../general/PageHeader";
import ExhibitFeedback from "../components/ExhibitFeedback";
import AddNewButton from "../../general/AddButton";
import ConfirmDialog from "../../general/ConfirmDialog";
import { useExhibitList } from "../hooks/helpersHooks/useExhibitList";
import { searchExhibitsByName } from "../helpers/filterExhibit";
import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function ExhibitListPage() {
    const query = useQuery();
    const searchQuery = query.get("search") || "";
    const locationQuery = query.get("location") || "";
    const {
        exhibits,
        isLoading,
        error,
        handleAddExhibit,
        handleDelete,
        handleConfirmDelete,
        handleCancelDelete,
        handleEditExhibit,
        openConfirmDialog,
        canAddExhibit,
    } = useExhibitList();

    const [filteredExhibits, setFilteredExhibits] = useState([]); // State for filtered exhibits

    // Filter exhibits using the helper function
    useEffect(() => {
        if (exhibits) {
            const filtered = searchExhibitsByName(exhibits, searchQuery); // Use helper function
            setFilteredExhibits(filtered);
        }
    }, [exhibits, searchQuery]);

    // Dynamically set the title based on the query parameters
    const getTitle = () => {
        if (locationQuery) {
            return `Exhibits in ${locationQuery} Zone`;  // Title when filtering by location
        }
        return "All Zoo Exhibits";  // Default title when no location filter is applied
    };

    return (
        <Container>
            <PageHeader
                title={getTitle()}
                subtitle="Browse the various exhibits and discover the incredible wildlife that calls our zoo home."
            />

            <ExhibitFeedback
                isLoading={isLoading}
                error={error}
                exhibits={filteredExhibits}
                handleDelete={handleDelete}
                handleEditExhibit={handleEditExhibit}
            />
            {/* Add New Exhibit Button */}
            {canAddExhibit && <AddNewButton onAdd={handleAddExhibit} />}

            {/* Confirmation Dialog for Deleting an Exhibit */}
            <ConfirmDialog
                open={openConfirmDialog}
                onClose={handleCancelDelete}
                onConfirm={handleConfirmDelete}
                title="Delete Exhibit"
                message="Are you sure you want to delete this exhibit?"
            />
        </Container>
    );
}
