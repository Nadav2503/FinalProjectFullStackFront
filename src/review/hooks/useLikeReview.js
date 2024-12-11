import { useState, useCallback } from "react";
import { likeReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useLikeReview = () => {
    const [loading, setLoading] = useState(false);
    const setSnack = useSnack();



    return {};
};

export default useLikeReview;
