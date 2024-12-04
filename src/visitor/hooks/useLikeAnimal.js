import { useState, useCallback } from "react";
import { likeAnimal } from "../../services/VisitorServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";
import { useCurrentVisitor } from "../../providers/VisitorProvider";

const useLikeAnimal = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { visitor, setVisitor } = useCurrentVisitor();
    const setSnack = useSnack();

    const handleLikeAnimal = useCallback(async (animalId) => {
        if (!visitor) {
            console.error("Visitor data is not available");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const preferredAnimals = visitor?.preferredAnimals || [];

            if (preferredAnimals.includes(animalId)) {
                await likeAnimal(visitor._id, animalId);
                setVisitor((prevVisitor) => {
                    const updatedVisitor = {
                        ...prevVisitor,
                        preferredAnimals: prevVisitor.preferredAnimals.filter(id => id !== animalId),
                    };
                    return updatedVisitor;
                });
            } else {
                await likeAnimal(visitor._id, animalId);
                setVisitor((prevVisitor) => {
                    const updatedVisitor = {
                        ...prevVisitor,
                        preferredAnimals: [...(prevVisitor.preferredAnimals || []), animalId],
                    };
                    return updatedVisitor;
                });
            }

            setSnack('success', `Animal ${animalId} like status updated!`);
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to like animal ${animalId}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack, visitor, setVisitor]);

    return { handleLikeAnimal, loading, error };
};

export default useLikeAnimal;
