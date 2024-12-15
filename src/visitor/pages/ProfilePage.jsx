import React, { useEffect, useState } from "react";
import { Typography, Container, Card, CardContent, Avatar, Grid, Box } from "@mui/material";
import { getUser } from "../../services/LocalStorageService";
import useGetVisitorById from "../hooks/useVisitorDataById";
import Loader from "../../general/Loader";
import PageHeader from "../../general/PageHeader";
import CustomButton from "../../general/CustomButton";
import Error from "../../general/Error";
import AnimalCard from "../../animal/components/card/AnimalCard";
import useLikeAnimal from "../hooks/useLikeAnimal";
import useGetAnimalByIdForProfilePage from "../../animal/hooks/useGetAnimalByIdForProfilePage";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routers/routerModel";
import useFetchReviewsByVisitor from "../../review/hooks/useGetReviewsByVisitor";
import useDeleteReview from "../../review/hooks/useDeleteReview";

export default function ProfilePage() {
    const user = getUser();
    const navigate = useNavigate();
    const { visitor, loading, error, fetchVisitorById } = useGetVisitorById();
    const { fetchAnimalByIdForProfilePage } = useGetAnimalByIdForProfilePage();
    const [animalsDetails, setAnimalsDetails] = useState([]);
    const { handleLikeAnimal } = useLikeAnimal();
    const { reviews, fetchReviews } = useFetchReviewsByVisitor();
    const { handleDelete } = useDeleteReview();
    const [likedReviews, setLikedReviews] = useState([]);

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
        if (reviews) {
            // Filter reviews liked by the visitor
            const liked = reviews.filter((review) =>
                review.likes.includes(user._id)
            );
            setLikedReviews(liked);
        }
    }, [reviews, user._id]);

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
            fetchReviews(visitor._id);
        } catch (err) {
            console.error("Error deleting review:", err);
        } finally {
            setOpenConfirmDialog(false);
            setReviewToDelete(null);
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

                {/* Display Animal Cards */}
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
        </Container>
    );
}
