import { useState, useCallback } from "react";
import { getReviewById } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useFetchSpecificReview = () => {
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();


    return {};
};

export default useFetchSpecificReview;
