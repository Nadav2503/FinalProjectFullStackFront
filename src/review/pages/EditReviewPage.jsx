import React, { useCallback, useEffect } from "react";
import ReviewForm from "../components/ReviewForm";
import initializeReview from "../helpers/initializeReview";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../form/useForm";
import useUpdateReview from "../hooks/useUpdateReview";
import useFetchSpecificReview from "../hooks/useGetSpecificReview";
import reviewSchema from "../model/reviewSchema";
import { Box, Container } from "@mui/material";


export default function EditReviewPage() {
    const { reviewId } = useParams(); // Extract review ID from the URL
    const { handleUpdate, loading } = useUpdateReview();
    const { fetchReview, review } = useFetchSpecificReview();
    const navigate = useNavigate();

    return (
        <div>EditReviewPage</div>
    )
}
