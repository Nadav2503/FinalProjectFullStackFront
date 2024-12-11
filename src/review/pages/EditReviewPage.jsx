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


export default function EditReviewPage() {
    const { reviewId } = useParams(); // Extract review ID from the URL
    const { handleUpdate, loading } = useUpdateReview();
    const { fetchReview, review } = useFetchSpecificReview();
    const navigate = useNavigate();

    useEffect(() => {
        if (reviewId) {
            fetchReview(reviewId); // Fetch the review details
        }
    }, [reviewId, fetchReview]);

    // Once the review is fetched, set the form data
    useEffect(() => {
        if (review) {
            setData(normalizeReview(review)); // Normalize data to ensure valid defaults
        }
    }, [review, setData]);
    return (
        <div>EditReviewPage</div>
    )
}
