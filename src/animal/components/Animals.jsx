import React from "react";
import AnimalCard from "./card/AnimalCard";
import { Container } from "@mui/material";

export default function Animals({ animals, handleDelete, handleEditAnimal, handleFavoriteToggle, visitor }) {
    return (
        <Container sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
            alignItems: 'stretch',
        }}>
            {animals.map((animal) => {
                const isLiked = visitor?.preferredAnimals?.includes(animal._id) || false; // Check if the animal is liked
                return (
                    <AnimalCard
                        animal={animal}
                        key={animal._id}
                        handleDelete={handleDelete}
                        handleEditAnimal={handleEditAnimal}
                        handleFavoriteToggle={handleFavoriteToggle}
                        isLiked={isLiked} // Pass to AnimalCard
                    />
                );
            })}
        </Container>
    );
}
