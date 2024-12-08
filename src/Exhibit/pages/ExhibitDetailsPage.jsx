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
import useDeleteAnimal from "../../animal/hooks/useDeleteAnimal";
import AnimalFeedback from "../../animal/components/AnimalFeedback";
import ROUTES from "../../routers/routerModel";
import AddNewButton from "../../general/AddButton";
import ConfirmDialog from "../../general/ConfirmDialog";
import useLikeAnimal from "../../visitor/hooks/useLikeAnimal";
import { useCurrentVisitor } from "../../providers/VisitorProvider";
import useUpdateAnimalsInExhibit from "../hooks/useUpdateAnimalsInExhibit";
import useGetAnimalsByExhibit from "../../animal/hooks/useGetAnimalsByExhibit";

export default function ExhibitDetailPage() {
    const { exhibitId } = useParams();
    const { exhibit, error, isLoading, fetchExhibitById } = useExhibitById();
    const { animals, fetchAnimalsByExhibit } = useGetAnimalsByExhibit();
    const { handleUpdateAnimals } = useUpdateAnimalsInExhibit();
    const { handleDeleteAnimal } = useDeleteAnimal();
    const { handleLikeAnimal } = useLikeAnimal();
    const navigate = useNavigate();
    const { visitor } = useCurrentVisitor();

    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [animalToDelete, setAnimalToDelete] = useState(null);

    useEffect(() => {
        if (visitor && visitor._id) {
            fetchExhibitById(exhibitId);
            fetchAnimalsByExhibit(exhibitId);
        }
    }, [visitor, exhibitId, fetchExhibitById, fetchAnimalsByExhibit]);

    const handleAddAnimal = () => {
        navigate(ROUTES.ADD_ANIMAL, { state: { exhibitId: exhibitId } });
    };

    const handleEditAnimal = (id) => {
        navigate(`${ROUTES.EDIT_ANIMAL}/${id}`);
    };

    const handleFavoriteToggle = async (animalId) => {
        try {
            if (!visitor || !visitor._id) {
                throw new Error("Visitor not authenticated.");
            }
            await handleLikeAnimal(animalId);
            fetchAnimalsByExhibit(exhibitId); // Ensure animals and isLiked are updated
        } catch (error) {
            console.error("Error toggling favorite status:", error);
        }
    };


    const confirmDeleteAnimal = (id) => {
        setAnimalToDelete(id);
        setOpenConfirmDialog(true);
    };

    const handleConfirmDelete = async () => {
        if (animalToDelete) {
            try {
                await handleUpdateAnimals(exhibitId, { removeAnimals: [animalToDelete] });
                await handleDeleteAnimal(animalToDelete);
                // Refresh the list of animals in the exhibit
                fetchAnimalsByExhibit(exhibitId);
                // Reset state and close dialog
                setOpenConfirmDialog(false);
                setAnimalToDelete(null);
            } catch (error) {
                console.error("Error during animal deletion or exhibit update:", error);
            }
        }
    };

    const handleCancelDelete = () => {
        setOpenConfirmDialog(false);
        setAnimalToDelete(null);
    };

    const currentCapacity = animals?.length || 0;

    if (isLoading) return <Loader />;
    if (error) {
        const errorMessage = typeof error === "string" ? error : error.message || "An unknown error occurred.";
        return <Error errorMessage={errorMessage} />;
    }
    if (!exhibit) return <Error errorMessage="Exhibit not found." />;

    return (
        <Container>
            <PageHeader title={exhibit.name} subtitle={exhibit.description} />

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
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <PetsIcon sx={{ marginRight: 1 }} />
                    <Typography variant="h6">Current Animals: {currentCapacity}</Typography>
                </Box>

                <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                    Exhibit Capacity: {exhibit.capacity}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <LocationIcon sx={{ marginRight: 1 }} />
                    <Typography variant="h6">{exhibit.location}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <StatusIcon
                        sx={{
                            marginRight: 1,
                            color:
                                exhibit.status === "open"
                                    ? "green"
                                    : exhibit.status === "closed"
                                        ? "red"
                                        : "#F09319",
                        }}
                    />
                    <Typography
                        variant="h6"
                        color={
                            exhibit.status === "open"
                                ? "green"
                                : exhibit.status === "closed"
                                    ? "red"
                                    : "#F09319"
                        }
                    >
                        {exhibit.status}
                    </Typography>
                </Box>

                <Divider sx={{ my: 2, width: "100%", maxWidth: "600px" }} />
            </Box>

            <AnimalFeedback
                isLoading={isLoading}
                error={error}
                animals={animals}
                handleDelete={confirmDeleteAnimal}
                handleEditAnimal={handleEditAnimal}
                handleFavoriteToggle={handleFavoriteToggle}
                visitor={visitor}
            />

            <AddNewButton onAdd={handleAddAnimal} />

            <ConfirmDialog
                open={openConfirmDialog}
                onClose={handleCancelDelete}
                onConfirm={handleConfirmDelete}
                title="Confirm Animal Deletion"
                content={`Are you sure you want to delete this animal?`}
            />
        </Container>
    );
}
