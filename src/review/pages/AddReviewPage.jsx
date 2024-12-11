import React from "react";
import ReviewForm from "../components/ReviewForm";

import { useNavigate } from "react-router-dom";

import useCreateReview from "../hooks/useCreateReview";

import { Box, Container } from "@mui/material";

export default function AddReviewPage() {
    const { handleCreate } = useCreateReview();
    const navigate = useNavigate();



    return (
        <Container>
            <Box

            >
                <ReviewForm

                />
            </Box>
        </Container>
    );
}