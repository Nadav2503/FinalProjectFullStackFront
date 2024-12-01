import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Divider, Container } from "@mui/material";
import {
    Pets as PetsIcon,
    LocationOn as LocationIcon,
    CheckCircle as StatusIcon,
} from "@mui/icons-material";
import PageHeader from "../../general/PageHeader";
import Loader from "../../general/Loader";
import Error from "../../general/Error";
import useExhibitById from "../hooks/useExhibitDataById";
import useGetAnimalsByExhibit from "../../animal/hooks/useGetAnimalsByExhibit";
import useDeleteAnimal from "../../animal/hooks/useDeleteAnimal"; // Import delete hook
import AnimalFeedback from "../../animal/components/AnimalFeedback";
import ROUTES from "../../routers/routerModel";
import AddNewButton from "../../general/AddButton";
import ConfirmDialog from "../../general/ConfirmDialog"; // Import confirmation dialog

export default function ExhibitDetailPage() {
    const { exhibitId } = useParams(); // Get exhibit ID from the URL
    const { exhibit, error, isLoading, fetchExhibitById } = useExhibitById();
    const { animals, fetchAnimalsByExhibit } = useGetAnimalsByExhibit(); // Fetch animals for this exhibit
    const { handleDeleteAnimal } = useDeleteAnimal(); // Hook for deleting animals
    const navigate = useNavigate(); // Hook for navigation

    const [openConfirmDialog, setOpenConfirmDialog] = useState(false); // State for confirmation dialog
    const [animalToDelete, setAnimalToDelete] = useState(null); // State to track animal for deletion

    useEffect(() => {
        fetchExhibitById(exhibitId); // Fetch exhibit details
        fetchAnimalsByExhibit(exhibitId); // Fetch animals for this exhibit
    }, [exhibitId, fetchExhibitById, fetchAnimalsByExhibit]);

    const handleAddAnimal = () => {
        navigate(ROUTES.ADD_ANIMAL); // Navigate to AddAnimalPage for this exhibit
    };

    const handleEditAnimal = (id) => {
        navigate(`${ROUTES.EDIT_ANIMAL}/${id}`); // Navigate to EditAnimalPage
    };

    const confirmDeleteAnimal = (id) => {
        setAnimalToDelete(id); // Set animal ID for deletion
        setOpenConfirmDialog(true); // Show confirmation dialog
    };

    const handleConfirmDelete = async () => {
        if (animalToDelete) {
            await handleDeleteAnimal(animalToDelete); // Delete the animal
            fetchAnimalsByExhibit(exhibitId); // Refetch animals
            setOpenConfirmDialog(false); // Close the dialog
            setAnimalToDelete(null); // Clear animal ID
        }
    };

    const handleCancelDelete = () => {
        setOpenConfirmDialog(false); // Close the dialog without deleting
        setAnimalToDelete(null); // Clear animal ID
    };

    const currentCapacity = animals?.length || 0; // Dynamic capacity based on animals array

    if (isLoading) return <Loader />;
    if (error) {
        const errorMessage = typeof error === "string" ? error : error.message || "An unknown error occurred.";
        return <Error errorMessage={errorMessage} />;
    }
    if (!exhibit) return <Error errorMessage="Exhibit not found." />;

    return (
        <Container>
            {/* Page Header */}
            <PageHeader title={exhibit.name} subtitle={exhibit.description} />

            {/* Exhibit Details Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    mt: 4,
                    mb: 4,
                }}
            >
                {/* Current Capacity with Pet Icon */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <PetsIcon sx={{ marginRight: 1 }} />
                    <Typography variant="h6">Current Animals: {currentCapacity}</Typography>
                </Box>

                {/* Max Capacity */}
                <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                    Exhibit Capacity: {exhibit.capacity}
                </Typography>

                {/* Location with Icon */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <LocationIcon sx={{ marginRight: 1 }} />
                    <Typography variant="h6">{exhibit.location}</Typography>
                </Box>

                {/* Status with Icon */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <StatusIcon
                        sx={{
                            marginRight: 1,
                            color:
                                exhibit.status === "open"
                                    ? "green"
                                    : exhibit.status === "closed"
                                        ? "red"
                                        : "#F09319", // Orange for under maintenance
                        }}
                    />
                    <Typography
                        variant="h6"
                        color={
                            exhibit.status === "open"
                                ? "green"
                                : exhibit.status === "closed"
                                    ? "red"
                                    : "#F09319" // Orange for under maintenance
                        }
                    >
                        {exhibit.status}
                    </Typography>
                </Box>

                {/* Divider */}
                <Divider sx={{ my: 2, width: "100%", maxWidth: "600px" }} />
            </Box>

            {/* Animal Feedback Component */}
            <AnimalFeedback
                isLoading={isLoading}
                error={error}
                animals={animals}
                handleDelete={confirmDeleteAnimal} // Pass delete handler
                handleEditAnimal={handleEditAnimal} // Pass edit handler
                handleFavoriteToggle={handleAddAnimal} // Placeholder function for add/remove favorite
            />

            {/* Add Animal Button */}
            <AddNewButton onClick={handleAddAnimal} />

            {/* Confirm Dialog for Deleting an Animal */}
            <ConfirmDialog
                open={openConfirmDialog}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
                title="Confirm Animal Deletion"
                content={`Are you sure you want to delete this animal?`}
            />
        </Container>
    );
}
