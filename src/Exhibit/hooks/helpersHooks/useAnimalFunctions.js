import useLikeAnimal from "../../../visitor/hooks/useLikeAnimal";
import useDeleteAnimal from "../../../animal/hooks/useDeleteAnimal";
import useUpdateAnimalsInExhibit from "../useUpdateAnimalsInExhibit";
import ROUTES from "../../../routers/routerModel";
import { useNavigate } from "react-router-dom";

const useAnimalFunctions = (exhibitId, fetchAnimalsByExhibit) => {
    const navigate = useNavigate();
    const { handleLikeAnimal } = useLikeAnimal();
    const { handleDeleteAnimal } = useDeleteAnimal();
    const { handleUpdateAnimals } = useUpdateAnimalsInExhibit();

    const handleFavoriteToggle = async (animalId, visitor) => {
        try {
            if (!visitor || !visitor._id) {
                throw new Error("Visitor not authenticated.");
            }
            await handleLikeAnimal(animalId);
            fetchAnimalsByExhibit(exhibitId); // Ensure animals and isLiked are updated
        } catch (error) {
            console.error("Error toggling favorite status:", error);
        }
    };

    const handleDelete = async (animalId) => {
        try {
            await handleUpdateAnimals(exhibitId, { removeAnimals: [animalId] });
            await handleDeleteAnimal(animalId);
            fetchAnimalsByExhibit(exhibitId);
        } catch (error) {
            console.error("Error during animal deletion:", error);
        }
    };
    const handleEditAnimal = (id) => {
        navigate(`${ROUTES.EDIT_ANIMAL}/${id}`);
    };
    return { handleFavoriteToggle, handleDelete, handleEditAnimal };
};

export default useAnimalFunctions;
