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
    return (
        <div>AdminRMCPage</div>
    )
}
