import React from "react";
import AnimalCard from "./card/AnimalCard";
import { Container } from "@mui/material";

export default function Animals({ animals, handleDelete, handleEditAnimal, handleFavoriteToggle }) {
    return (
        <Container sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2, // Increase gap for better spacing
            alignItems: 'stretch', // Ensures cards align in height
        }}>
            {
                animals.map((animal) => (
                    <AnimalCard
                        animal={animal}
                        key={animal._id}
                        handleDelete={handleDelete}
                        handleEditAnimal={handleEditAnimal}
                        handleFavoriteToggle={handleFavoriteToggle}
                    />
                ))
            }
        </Container>
    );
}
