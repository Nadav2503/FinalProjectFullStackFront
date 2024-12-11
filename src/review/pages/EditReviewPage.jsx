import React, { useCallback, useEffect } from "react";
import ReviewForm from "../components/ReviewForm";
import initializeReview from "../helpers/initializeReview";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../form/useForm";
import useUpdateReview from "../hooks/useUpdateReview";
import useFetchSpecificReview from "../hooks/useGetSpecificReview";
import reviewSchema from "../model/reviewSchema";
import { Box, Container } from "@mui/material";
import normalizeReview from "../helpers/normalizeReview";
import { getUser } from "../../services/LocalStorageService";

export default function EditReviewPage() {
    const { reviewId } = useParams(); // Extract review ID from the URL
    const { handleUpdate } = useUpdateReview();
    const { fetchReview, review } = useFetchSpecificReview();
    const navigate = useNavigate();
    const user = getUser();

    const handleSubmit = useCallback(async (formData) => {
        try {
            await handleUpdate(reviewId, formData); // Call the update function
            navigate("/"); // Navigate back to reviews
        } catch (error) {
            console.error("Failed to update review:", error);
        }
    }, [handleUpdate, reviewId, navigate]);

    const { data, errors, handleChangeRating, validateForm, onSubmit, setData } = useForm(
        review || initializeReview,
        reviewSchema,
        handleSubmit
    );

    useEffect(() => {
        if (reviewId) {
            fetchReview(reviewId);
        }
    }, [reviewId, fetchReview]);

    useEffect(() => {
        if (review) {
            setData(normalizeReview(review, user._id, true))
        }
    }, [review, user._id, setData]);

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
                    title="Edit Review"
                    submitLabel={"Save Changes"}
                    onSubmit={onSubmit}
                    validateForm={validateForm}
                    errors={errors}
                    data={data}
                    onInputChange={handleChangeRating}
                />
            </Box>
        </Container>
    );
}
