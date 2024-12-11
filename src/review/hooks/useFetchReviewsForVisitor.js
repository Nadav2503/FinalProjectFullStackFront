import { useState, useCallback } from "react";
import { getReviewsByVisitor } from "../../services/ReviewServiceAPi";
import { useSnack } from "../../providers/SnackbarProvider";

const useFetchReviewsByVisitor = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();



    return {};
};

export default useFetchReviewsByVisitor;
