import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useExhibitData from "../useExhibitData";
import useDeleteExhibit from "../useDeleteExhibit";
import { useSnack } from "../../../providers/SnackbarProvider";
import { filterExhibitsByLocation } from "../../helpers/filterExhibit";
import ROUTES from "../../../routers/routerModel";
import { useCurrentVisitor } from "../../../providers/VisitorProvider";
import { canAddExhibit } from "../../../general/helpers/permission";


export const useExhibitList = () => {
    const { exhibits, isLoading, error, fetchExhibits } = useExhibitData();
    const navigate = useNavigate();
    const { visitor } = useCurrentVisitor();
    const [filteredExhibits, setFilteredExhibits] = useState([]);
    const location = useLocation();
    const setSnack = useSnack();
    const query = new URLSearchParams(location.search);
    const filterLocation = query.get("location");
    const { handleDeleteExhibit } = useDeleteExhibit();
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [exhibitToDelete, setExhibitToDelete] = useState(null);

    useEffect(() => {
        fetchExhibits();
    }, [fetchExhibits]);

    useEffect(() => {
        if (filterLocation) {
            const filtered = filterExhibitsByLocation(exhibits, filterLocation);
            setFilteredExhibits(filtered);
        } else {
            setFilteredExhibits(exhibits);
        }
    }, [exhibits, filterLocation]);

    const handleAddExhibit = () => {
        navigate(ROUTES.ADD_EXHIBIT);
    };

    const handleDelete = (id, animals) => {
        if (animals && animals.length > 0) {
            setSnack("error", "Exhibit cannot be deleted because it contains animals.");
            return;
        }
        setExhibitToDelete(id);
        setOpenConfirmDialog(true);
    };

    const handleConfirmDelete = async () => {
        if (exhibitToDelete) {
            await handleDeleteExhibit(exhibitToDelete);
            fetchExhibits();
            setOpenConfirmDialog(false);
            setExhibitToDelete(null);
        }
    };

    const handleCancelDelete = () => {
        setOpenConfirmDialog(false);
        setExhibitToDelete(null);
    };

    const handleEditExhibit = (id) => {
        navigate(`${ROUTES.EDIT_EXHIBIT}/${id}`);
    };

    const canAdd = canAddExhibit(visitor); // Check if the visitor can add an exhibit

    return {
        exhibits: filteredExhibits,
        isLoading,
        error,
        handleAddExhibit,
        handleDelete,
        handleConfirmDelete,
        handleCancelDelete,
        handleEditExhibit,
        openConfirmDialog,
        canAddExhibit: canAdd, // Return the permission status for adding an exhibit
    };
};