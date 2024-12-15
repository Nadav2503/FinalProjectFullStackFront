import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography, Box, Divider, Switch, FormControlLabel } from "@mui/material";
import Loader from "../../general/Loader";
import Error from "../../general/Error";
import useGetAnimalById from "../hooks/useGetAnimalById";
import PageHeader from "../../general/PageHeader";
import useUpdateEndangeredStatus from "../hooks/useUpdateEndangeredStatus";
import useDeleteReview from "../../review/hooks/useDeleteReview";
import useFetchReviewsForAnimal from "../../review/hooks/useGetReviewsForAnimal";
import ROUTES from "../../routers/routerModel";
import ReviewFeedback from "../../review/components/ReviewFeedback";

export default function AnimalDetailPage() {
    const { animalId } = useParams();
    const navigate = useNavigate();

    // Hooks for animal data and endangered status
    const { animal, isLoading, error, fetchAnimalById } = useGetAnimalById();
    const { updateStatus } = useUpdateEndangeredStatus();

    // Hooks for fetching and managing reviews
    const { reviews, averageRating, fetchReviews } =
        useFetchReviewsForAnimal();
    const { handleDelete } = useDeleteReview();

    const [endangeredStatus, setEndangeredStatus] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [reviewToDelete, setReviewToDelete] = useState(null);

    // Fetch data on mount
    useEffect(() => {
        fetchAnimalById(animalId);
        fetchReviews(animalId);
    }, [animalId, fetchAnimalById, fetchReviews]);

    useEffect(() => {
        setEndangeredStatus(animal?.isEndangered || false);
    }, [animal]);

    const handleEndangeredToggle = async (event) => {
        const newStatus = event.target.checked;
        setEndangeredStatus(newStatus);
        try {
            await updateStatus(animalId, newStatus);
        } catch (err) {
            setEndangeredStatus(!newStatus); // Revert if update fails
        }
    };

    const handleEditReview = (reviewId) => {
        navigate(`${ROUTES.EDIT_REVIEW}/${reviewId}`, { state: { animalId } });
    };

    const confirmDeleteReview = (reviewId) => {
        setReviewToDelete(reviewId);
        setOpenConfirmDialog(true);
    };

    const handleConfirmDeleteReview = async () => {
        try {
            await handleDelete(reviewToDelete);
            fetchReviews(animalId);
        } catch (err) {
            console.error("Error deleting review:", err);
        } finally {
            setOpenConfirmDialog(false);
            setReviewToDelete(null);
        }
    };

    const handleCancelDelete = () => {
        setOpenConfirmDialog(false);
        setReviewToDelete(null);
    };

    if (isLoading) return <Loader />;
    if (error) {
        const errorMessage = typeof error === "string" ? error : error.message || "An unknown error occurred.";
        return <Error errorMessage={errorMessage} />;
    }
    if (!animal) return <Error errorMessage="Animal not found." />;

    return (
        <Container>

            {/* Page Header */}
            <PageHeader sx={{ textAlign: "center", mb: 4 }}
                title={animal.name}
                subtitle={animal.description}>
            </PageHeader>
            {/* Animal Image */}
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <img
                    src={animal.image.url}
                    alt={`${animal.name}`}
                    style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
                />
            </Box>
            <Divider sx={{ mt: 2, mb: 4 }} />
            {/* Animal Details */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                }}
            >
                {/* First Column */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box>
                        <Typography variant="body1" color="text.secondary">
                            Type:
                        </Typography>
                        <Typography variant="h6">{animal.type}</Typography>
                    </Box>

                    <Box>
                        <Typography variant="body1" color="text.secondary">
                            Age:
                        </Typography>
                        <Typography variant="h6">{animal.age} years</Typography>
                    </Box>

                    <Box>
                        <Typography variant="body1" color="text.secondary">
                            Gender:
                        </Typography>
                        <Typography variant="h6">{animal.gender}</Typography>
                    </Box>
                </Box>

                {/* Vertical Divider */}
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        borderRightWidth: 2,
                        height: "auto",
                    }}
                />

                {/* Second Column */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box>
                        <Typography variant="body1" color="text.secondary">
                            Diet:
                        </Typography>
                        <Typography variant="h6">{animal.diet}</Typography>
                    </Box>

                    {/* Endangered Status with Toggle */}
                    <Box>
                        <Typography variant="body1" color="text.secondary">
                            Endangered Status:
                        </Typography>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={endangeredStatus}
                                    onChange={handleEndangeredToggle}
                                    disabled={isLoading}
                                />
                            }
                            label={endangeredStatus ? "Yes" : "No"}
                        />
                    </Box>

                    <Box>
                        <Typography variant="body1" color="text.secondary">
                            Health Status:
                        </Typography>
                        <Typography variant="h6">{animal.healthStatus}</Typography>
                    </Box>
                </Box>
            </Box>
            <Divider sx={{ my: 3 }} />

            {/* Average Rating Section */}
            {averageRating && (
                <Box sx={{ my: 4, textAlign: "center" }}>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                        Average Rating
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{
                            py: 2,
                            px: 4,
                            display: "inline-block",
                            border: "1px solid",
                            borderRadius: "8px",
                            borderColor: "text.secondary",
                        }}
                    >
                        {averageRating}
                    </Typography>
                </Box>
            )}
            {/* Reviews */}
            <ReviewFeedback
                isLoading={isLoading}
                reviews={reviews}
                error={error}
                handleDelete={confirmDeleteReview}
                handleEdit={handleEditReview}
                handleLike={() => { }}
            />
        </Container>
    );
}