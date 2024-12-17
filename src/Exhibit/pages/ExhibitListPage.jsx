import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../general/PageHeader";
import ExhibitFeedback from "../components/ExhibitFeedback";
import AddNewButton from "../../general/AddButton";
import { useLocation, useNavigate } from "react-router-dom";
import useDeleteExhibit from "../hooks/useDeleteExhibit"; // Import the custom hook
import ConfirmDialog from "../../general/ConfirmDialog"; // Import ConfirmDialog
import useExhibitData from "../hooks/useExhibitData";
import ROUTES from "../../routers/routerModel";
import { useSnack } from "../../providers/SnackbarProvider";
import { filterExhibitsByLocation } from "../helpers/filterExhibit";

export default function ExhibitListPage() {
    const { exhibits, isLoading, error, fetchExhibits } = useExhibitData();
    const navigate = useNavigate(); // Hook for navigation
    const [filteredExhibits, setFilteredExhibits] = useState([]);
    const location = useLocation(); // React Router hook to get query params
    const setSnack = useSnack();

    const query = new URLSearchParams(location.search);
    const filterLocation = query.get("location");

    const { handleDeleteExhibit } = useDeleteExhibit();
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false); // State for the confirmation dialog
    const [exhibitToDelete, setExhibitToDelete] = useState(null); // State to track which exhibit to delete

    useEffect(() => {
        fetchExhibits();
    }, [fetchExhibits]);

    useEffect(() => {
        if (filterLocation) {
            const filtered = filterExhibitsByLocation(exhibits, filterLocation);
            setFilteredExhibits(filtered);
        } else {
            setFilteredExhibits(exhibits);
        }
    }, [exhibits, filterLocation]);

    const handleAddExhibit = () => {
        navigate(ROUTES.ADD_EXHIBIT); // Navigate to AddExhibitPage
    };

    const handleDelete = (id, animals) => {
        if (animals && animals.length > 0) {
            setSnack("error", "Exhibit cannot be deleted because it contains animals.");
            return;
        }
        setExhibitToDelete(id); // Set the exhibit ID to be deleted
        setOpenConfirmDialog(true); // Show the confirmation dialog
    };

    const handleConfirmDelete = async () => {
        if (exhibitToDelete) {
            await handleDeleteExhibit(exhibitToDelete); // Delete the exhibit
            fetchExhibits(); // Refetch exhibits after deletion (if needed)
            setOpenConfirmDialog(false); // Close the dialog
            setExhibitToDelete(null); // Clear the exhibit ID
        }
    };

    const handleCancelDelete = () => {
        setOpenConfirmDialog(false); // Close the dialog without deleting
        setExhibitToDelete(null); // Clear the exhibit ID
    };

    const handleEditExhibit = (id) => {
        navigate(`${ROUTES.EDIT_EXHIBIT}/${id}`); // Navigate to EditExhibitPage
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
                exhibits={filteredExhibits}
                handleDelete={handleDelete} // Pass the handleDelete function
                handleEditExhibit={handleEditExhibit} // Pass the handleEditExhibit function
            />
            {/* Add New Exhibit Button */}
            <AddNewButton onAdd={handleAddExhibit} />

            {/* Confirmation Dialog for Deleting an Exhibit */}
            <ConfirmDialog
                open={openConfirmDialog}
                onClose={handleCancelDelete} // Close dialog on cancel
                onConfirm={handleConfirmDelete} // Confirm deletion on confirmation
                title="Delete Exhibit"
                message="Are you sure you want to delete this exhibit?"
            />
        </Container>
    );
}
