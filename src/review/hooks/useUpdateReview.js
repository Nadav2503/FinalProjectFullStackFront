import { useState, useCallback } from "react";
import { updateReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useUpdateReview = () => {
    const [loading, setLoading] = useState(false);
    const setSnack = useSnack();



    return {};
};

export default useUpdateReview;
