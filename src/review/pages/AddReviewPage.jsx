import React from "react";

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

            </Box>
        </Container>
    );
}