import { useState, useCallback } from "react";
import { deleteReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useDeleteReview = () => {
    const [loading, setLoading] = useState(false);
    const setSnack = useSnack();



    return {};
};

export default useDeleteReview;
