import React from "react";
import AnimalCard from "./card/AnimalCard";
import { Container } from "@mui/material";

export default function Animals({ handleDelete, handleEditAnimal, handleFavoriteToggle }) {
    return (
        <Container sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
            {

                <AnimalCard

                    handleDelete={handleDelete}
                    handleEditAnimal={handleEditAnimal}
                    handleFavoriteToggle={handleFavoriteToggle}
                />

            }
        </Container>
    );
}
