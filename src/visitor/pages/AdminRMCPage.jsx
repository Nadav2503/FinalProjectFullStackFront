import React from 'react'

export default function AdminRMCPage() {
    const [isMobile, setIsMobile] = useState(false);
    const { visitors, fetchVisitors } = useGetAllVisitors();
    const { handleDeleteVisitor, loading: deleteLoading } = useDeleteVisitor();


    // State to handle the confirmation dialog
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedVisitorId, setSelectedVisitorId] = useState(null);
    return (
        <div>AdminRMCPage</div>
    )
}
