import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Divider, Container } from "@mui/material";
import { Pets as PetsIcon, LocationOn as LocationIcon, CheckCircle as StatusIcon } from "@mui/icons-material";
import PageHeader from "../../general/PageHeader";
import Loader from "../../general/Loader";
import Error from "../../general/Error";
import useExhibitById from "../hooks/useExhibitDataById";
import useGetAnimalsByExhibit from "../../animal/hooks/useGetAnimalsByExhibit";
import AnimalFeedback from "../../animal/components/AnimalFeedback";
import ROUTES from "../../routers/routerModel";
import AddNewButton from "../../general/AddButton";


export default function ExhibitDetailPage() {
    const { exhibitId } = useParams(); // Get exhibit ID from the URL
    const { exhibit, error, isLoading, fetchExhibitById } = useExhibitById();
    const { animals, fetchAnimalsByExhibit } = useGetAnimalsByExhibit(); // Fetch animals for this exhibit
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        fetchExhibitById(exhibitId); // Fetch exhibit details
        fetchAnimalsByExhibit(exhibitId); // Fetch animals for this exhibit
    }, [exhibitId, fetchExhibitById, fetchAnimalsByExhibit]);

    const handleAddAnimal = () => {
        navigate(ROUTES.ADD_ANIMAL); // Navigate to AddExhibitPage
    };

    if (isLoading) return <Loader />;
    if (error) {
        const errorMessage = typeof error === "string" ? error : error.message || "An unknown error occurred.";
        return <Error errorMessage={errorMessage} />;
    }
    if (!exhibit) return <Error errorMessage="Exhibit not found." />;

    const currentCapacity = exhibit.animals?.length || 0; // Dynamic capacity based on animals array

    return (
        <Container>
            {/* Page Header */}
            <PageHeader
                title={exhibit.name}
                subtitle={exhibit.description}
            />

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
                    <Typography variant="h6">
                        Current Animals: {currentCapacity}
                    </Typography>
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
                isLoading={isLoading} // Pass loading state from the hook
                error={error} // Pass error state from the hook
                animals={animals} // Pass the list of animals
                handleDelete={null} // Placeholder for the delete handler
                handleEditAnimal={null} // Placeholder for the edit handler
            />
            <AddNewButton onAdd={handleAddAnimal} />
        </Container>
    );
}
