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
        <Container>
            <PageHeader title={"Admin RMC Page"} />


            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(1, 1fr)', // Single column on mobile
                    gap: 2,
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        border: 1,
                        borderRadius: 2,
                        padding: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundColor: 'background.paper',
                        boxShadow: 1,
                    }}

                > <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                        {visitor.username}</Typography> <Typography variant="body1">ID: {visitor._id}</Typography></Box>
            </Box>

        </Container>
    )
}
