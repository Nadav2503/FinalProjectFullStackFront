import { useState, useCallback } from "react";
import { createReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useCreateReview = () => {
    const [loading, setLoading] = useState(false);
    const setSnack = useSnack();



    return {};
};

export default useCreateReview;
