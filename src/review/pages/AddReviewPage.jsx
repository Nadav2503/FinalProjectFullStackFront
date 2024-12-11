import React, { useCallback } from "react";
import ReviewForm from "../components/ReviewForm";
import initializeReview from "../helpers/initializeReview";
import { useNavigate } from "react-router-dom";
import useForm from "../../form/useForm";
import useCreateReview from "../hooks/useCreateReview";
import reviewSchema from "../model/reviewSchema";
import { Box, Container } from "@mui/material";

export default function AddReviewPage() {
    const { handleCreate } = useCreateReview();
    const navigate = useNavigate();

    const handleSubmit = useCallback(async (formData) => {
        try {
            const user = getUser(); // Get the logged-in user's data
            if (!user || !user.visitorId) {
                throw new Error("User is not logged in or visitorId is missing");
            }

            const reviewData = {
                ...formData,
                visitorId: user.visitorId, // Add the visitorId to the review data
            };

            await handleCreate(reviewData); // Submit the review
            navigate("/"); // Redirect to the reviews page
        } catch (error) {
            console.error("Failed to create review:", error);
        }
    }, [handleCreate, navigate]);



    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ReviewForm
                    title="Add New Review"
                    submitLabel={"Create Review"}
                    onSubmit={onSubmit}
                    validateForm={validateForm}
                    errors={errors}
                    data={data}
                    onInputChange={handleChange}
                />
            </Box>
        </Container>
    );
}