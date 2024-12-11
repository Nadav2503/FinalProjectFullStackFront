import React from "react";
import ReviewCard from "./card/ReviewCard";
import { Container } from "@mui/material";

export default function Reviews({ reviews, handleDelete, handleEdit, handleLike }) {
    return (
        <Container

        >
            {reviews.map((review) => (
                <ReviewCard
                    review={review}
                    key={review._id}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleLike={handleLike}
                />
            ))}
        </Container>
    );
}
