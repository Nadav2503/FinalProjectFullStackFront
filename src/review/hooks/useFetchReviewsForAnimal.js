import { useState, useCallback } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import { getReviewsForAnimal } from "../../services/ReviewServiceAPi";

const useFetchReviewsForAnimal = () => {
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();



    return {};
};

export default useFetchReviewsForAnimal;
