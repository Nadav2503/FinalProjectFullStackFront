import React from 'react';
import { CardActionArea } from '@mui/material';
import Card from '../../../general/card/Card';
import AnimalHeader from './AnimalHeader';
import AnimalBody from './AnimalBody';
import AnimalActionBar from './AnimalActionBar';
import ROUTES from '../../../routers/routerModel';
import { useNavigate } from 'react-router-dom';

export default function AnimalCard({ animal, handleDelete, handleEditAnimal, handleFavoriteToggle, isLiked, visitor }) {
    const navigate = useNavigate();

    const handleFavoriteClick = () => {
        handleFavoriteToggle(animal._id);
    };

    const handleCardClick = () => {
        navigate(`${ROUTES.ANIMAL_INFO}/${animal._id}`);
    };

    // Check if the visitor is Tier 1
    const isTier1 = visitor?.membershipTier === 1;

    return (
        <Card>
            <AnimalHeader title={animal.name} image={animal.image} />
            <CardActionArea onClick={handleCardClick}>
                <AnimalBody type={animal.type} gender={animal.gender} age={animal.age} />
            </CardActionArea>
            {/* Only show AnimalActionBar if the user is not Tier 1 */}
            {!isTier1 && (
                <AnimalActionBar
                    animalId={animal._id}
                    handleDelete={handleDelete}
                    handleEditAnimal={handleEditAnimal}
                    handleFavoriteToggle={handleFavoriteClick}
                    isLiked={isLiked}
                    visitor={visitor}
                />
            )}
        </Card>
    );
}
