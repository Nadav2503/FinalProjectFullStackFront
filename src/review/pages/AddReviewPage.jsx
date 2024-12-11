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

            await handleCreate(formData); // Submit the review
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