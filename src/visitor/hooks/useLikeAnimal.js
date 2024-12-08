import { useState, useCallback } from "react";
import { likeAnimal } from "../../services/VisitorServiceApi"; // This should call toggleLikeAnimal on the backend
import { useSnack } from "../../providers/SnackbarProvider";
import { useCurrentVisitor } from "../../providers/VisitorProvider";

const useLikeAnimal = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { visitor } = useCurrentVisitor(); // Minimal data
    const setSnack = useSnack();

    const handleLikeAnimal = useCallback(
        async (animalId) => {
            if (!visitor || !visitor._id) {
                console.error("Visitor not authenticated.");
                return;
            }

            setLoading(true);
            setError(null);

            try {
                console.log("Toggling favorite status for animal:", animalId);

                // Directly call the API to toggle the "like" status
                const updatedVisitor = await likeAnimal(visitor._id, animalId);

                console.log("Updated visitor data:", updatedVisitor);

                setSnack('success', `Animal ${animalId} favorite status toggled!`);
            } catch (err) {
                console.error("Error toggling animal favorite status:", err);
                setError(err.message);
                setSnack('error', `Failed to toggle favorite status for animal ${animalId}`);
            } finally {
                setLoading(false);
                console.log("Favorite toggle operation completed.");
            }
        },
        [visitor, setSnack]
    );

    return { handleLikeAnimal, loading, error };
};

export default useLikeAnimal;
