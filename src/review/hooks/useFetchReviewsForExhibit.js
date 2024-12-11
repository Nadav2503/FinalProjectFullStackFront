import { useState, useCallback } from "react";
import { getReviewsForExhibit } from "../../services/ReviewServiceAPi";
import { useSnack } from "../../providers/SnackbarProvider";

const useFetchReviewsForExhibit = () => {
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();



    return {};
};

export default useFetchReviewsForExhibit;
