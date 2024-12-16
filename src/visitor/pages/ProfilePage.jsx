import React, { useEffect, useState } from "react";
import { Typography, Container, Card, CardContent, Avatar, Grid, Box, Divider } from "@mui/material";
import { getUser } from "../../services/LocalStorageService";
import useGetVisitorById from "../hooks/useVisitorDataById";
import Loader from "../../general/Loader";
import PageHeader from "../../general/PageHeader";
import CustomButton from "../../general/CustomButton";
import AnimalCard from "../../animal/components/card/AnimalCard";
import useLikeAnimal from "../hooks/useLikeAnimal";
import useGetAnimalByIdForProfilePage from "../../animal/hooks/useGetAnimalByIdForProfilePage";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routers/routerModel";
import ReviewFeedback from "../../review/components/ReviewFeedback";
import ConfirmDialog from "../../general/ConfirmDialog";
import useFetchReviewsByVisitor from "../../review/hooks/useGetReviewsByVisitor";
import useCombinedReviews from "../../review/hooks/useCombineReviews";
import useLikeReview from "../../review/hooks/useLikeReview";

export default function ProfilePage() {
    const user = getUser();
    const navigate = useNavigate();
    const { visitor, loading, error, fetchVisitorById } = useGetVisitorById();
    const { fetchAnimalByIdForProfilePage } = useGetAnimalByIdForProfilePage();
    const { handleLikeAnimal } = useLikeAnimal();
    const { handleLike } = useLikeReview();
    const { reviews, fetchReviews } = useFetchReviewsByVisitor();
    const { combinedReviews, updateReview } = useCombinedReviews();

    const [animalsDetails, setAnimalsDetails] = useState([]);
    const [favoriteReviews, setFavoriteReviews] = useState([]);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [reviewToDelete, setReviewToDelete] = useState(null);

    useEffect(() => {
        if (user && !visitor) {
            fetchVisitorById(user._id);
        }
    }, [user, visitor, fetchVisitorById]);

    useEffect(() => {
        if (visitor) {
            fetchReviews(visitor._id);
        }
    }, [visitor, fetchReviews]);
    useEffect(() => {
        if (visitor && visitor.preferredAnimals) {
            const fetchAnimals = async () => {
                try {
                    const animalDetails = await Promise.all(
                        visitor.preferredAnimals.map(async (animalId) => {
                            const animalData = await fetchAnimalByIdForProfilePage(animalId);
                            return {
                                ...animalData,
                                isLiked: visitor.preferredAnimals.includes(animalId),
                            };
                        })
                    );
                    setAnimalsDetails(animalDetails);
                } catch (err) {
                    console.error("Error fetching animal details:", err);
                }
            };

            fetchAnimals();
        }
    }, [visitor, fetchAnimalByIdForProfilePage]);

    const handleFavoriteToggle = (animalId) => {
        handleLikeAnimal(animalId);
        setAnimalsDetails((prevAnimals) =>
            prevAnimals.filter((animal) => animal._id !== animalId)
        );
    };

    const handleEditProfile = () => {
        navigate(`${ROUTES.EDIT_PROFILE}/${user._id}`);
    };

    const handleEditReview = (reviewId) => {
        navigate(`${ROUTES.EDIT_REVIEW}/${reviewId}`, { state: { fromProfile: true } });
    };

    const confirmDeleteReview = (reviewId) => {
        setReviewToDelete(reviewId);
        setOpenConfirmDialog(true);
    };

    const handleConfirmDeleteReview = async () => {
        try {
            await handleDelete(reviewToDelete);
            // Fetch updated reviews after deletion
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

    useEffect(() => {
        setFavoriteReviews(
            combinedReviews.filter(
                (review) => review.visitorId !== user._id && review.likes?.includes(user._id)
            )
        );
    }, [combinedReviews, user._id]);


    const userReviews = reviews.filter((review) => review.visitorId === user._id);

    const handleLikeReview = async (reviewId) => {
        try {
            // Perform the like/unlike action
            await handleLike(reviewId);

            // Find the updated review from the combined list
            const updatedReview = combinedReviews.find((review) => review._id === reviewId);

            if (updatedReview) {
                // Check if the review is liked by the user
                const isLiked = updatedReview.likes?.includes(user._id);

                // Update the review with the new likes list
                const updatedLikes = isLiked
                    ? updatedReview.likes.filter((id) => id !== user._id) // Remove user ID if already liked
                    : [...updatedReview.likes, user._id]; // Add user ID if not liked

                // Update the review state locally
                updateReview({
                    ...updatedReview,
                    likes: updatedLikes,
                });

                // Update the favoriteReviews state based on the like/unlike action
                if (isLiked) {
                    // If the review was liked and is now unliked, remove it from the favorite reviews
                    setFavoriteReviews((prev) =>
                        prev.filter((review) => review._id !== reviewId)
                    );
                } else {
                    // If the review was unliked and is now liked, add it to the favorite reviews
                    setFavoriteReviews((prev) => [
                        ...prev,
                        { ...updatedReview, type: "favorite" },
                    ]);
                }
            }
        } catch (err) {
            console.error("Error liking/unliking the review:", err);
        }
    };



    if (loading) return <Loader />;

    if (error) {
        const errorMessage = typeof error === "string" ? error : error.message || "An unknown error occurred.";
        return <Error errorMessage={errorMessage} />;
    }

    if (!visitor) return <Error errorMessage="Visitor not found." />;

    return (
        <Container>
            <PageHeader
                title={`Welcome to Your Profile, ${visitor.name.first}!`}
                subtitle={`View and update your personal details`}
            />
            {/* Profile Information */}
            <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: 'center' }}>
                <CardContent>
                    <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
                        <Avatar
                            alt={`${visitor.image?.alt}`}
                            src={visitor.image?.url || "/images/avatar.png"}
                            sx={{ width: 100, height: 100, mr: 2, borderRadius: '50%' }}
                        />
                        <Box>
                            <Typography variant="h5">{`${visitor.name.first} ${visitor.name.middle} ${visitor.name.last}`}</Typography>
                            <Typography variant="body1" color="textSecondary">{visitor.username}</Typography>
                        </Box>
                    </Box>

                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1"><strong>Email:</strong> {visitor.email}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1"><strong>Phone:</strong> {visitor.phone || "N/A"}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1"><strong>Membership Tier:</strong> {visitor.membershipTier}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1"><strong>Admin:</strong> {visitor.isAdmin ? "Yes" : "No"}</Typography>
                        </Grid>
                    </Grid>

                    <Box display="flex" justifyContent="flex-end" mt={3}>
                        <CustomButton
                            variant="contained"
                            color="secondary"
                            onClick={handleEditProfile}
                        >
                            Edit Profile
                        </CustomButton>
                    </Box>
                </CardContent>
            </Card>
            {/* Preferred Animals Section */}
            <Box mt={4}>
                <Typography variant="h5" mb={2} align="center">
                    Preferred Animals
                </Typography>

                <Container sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2, alignItems: "stretch" }}>
                    {animalsDetails.map((animal) => (
                        <AnimalCard
                            key={animal._id}
                            animal={animal}
                            handleFavoriteToggle={handleFavoriteToggle}
                            isLiked={animal.isLiked}
                            handleDelete={null}
                            handleEditAnimal={null}
                        />
                    ))}
                </Container>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box>
                <Typography variant="h5" align="center" mb={2}>
                    Your Reviews
                </Typography>
                <ReviewFeedback
                    reviews={userReviews}
                    handleEdit={handleEditReview}
                    handleDelete={confirmDeleteReview}
                    handleLike={handleLike}
                    currentUserId={user._id}
                />
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box>
                <Typography variant="h5" align="center" mb={2}>
                    Favorite Reviews
                </Typography>
                <ReviewFeedback
                    reviews={favoriteReviews}
                    handleEdit={null}
                    handleDelete={null}
                    handleLike={handleLikeReview}
                    currentUserId={user._id}
                />
            </Box>
            <ConfirmDialog
                open={openConfirmDialog}
                onClose={handleCancelDelete}
                onConfirm={handleConfirmDeleteReview}
                title="Confirm Review Deletion"
                content="Are you sure you want to delete this review?"
            />
        </Container>
    );
}
