import React from 'react'

export default function AdminRMCPage() {
    const [isMobile, setIsMobile] = useState(false);
    const { visitors, fetchVisitors } = useGetAllVisitors();
    const { handleDeleteVisitor, loading: deleteLoading } = useDeleteVisitor();


    // State to handle the confirmation dialog
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedVisitorId, setSelectedVisitorId] = useState(null);
    useEffect(() => {
        fetchVisitors();
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900); // Set the threshold for mobile/tablet
        };
        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [fetchVisitors]);

    const handleDelete = (id) => {
        setSelectedVisitorId(id); // Set the ID of the visitor to delete
        setOpenDialog(true); // Open the confirmation dialog
    };

    const confirmDelete = () => {
        if (selectedVisitorId) {
            handleDeleteVisitor(selectedVisitorId); // Proceed with deleting the visitor
            fetchVisitors();  // Refetch the visitors list to update the table
            setOpenDialog(false); // Close the dialog after deletion
        }
    };

    const cancelDelete = () => {
        setOpenDialog(false); // Close the dialog without doing anything
    };
    return (
        <div>AdminRMCPage</div>
    )
}
