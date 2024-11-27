import React from "react";
import Animals from "./Animals";

export default function AnimalFeedback({ animals, handleDelete, handleEditAnimal, handleFavoriteToggle }) {

    return (
        <Animals
            animals={animals}
            handleDelete={handleDelete}
            handleEditAnimal={handleEditAnimal}
            handleFavoriteToggle={handleFavoriteToggle}
        />
    );
}
