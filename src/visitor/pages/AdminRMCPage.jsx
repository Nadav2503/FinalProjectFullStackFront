import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useDeleteVisitor from '../hooks/useDeleteVisitor';
import useGetAllVisitors from '../hooks/useVisitorData';
import CustomButton from '../../general/CustomButton';
import PageHeader from '../../general/PageHeader';
import ConfirmDialog from '../../general/ConfirmDialog';

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
            <PageHeader title="Admin RMC Page" />

            {isMobile ? (
                // Grid Layout for mobile and smaller screens
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(1, 1fr)', // Single column on mobile
                        gap: 2,
                        justifyContent: "center",
                    }}
                >
                    {visitors.map((visitor) => (
                        <Box
                            key={visitor._id}
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
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                {visitor.username}
                            </Typography>
                            <Typography variant="body1">ID: {visitor._id}</Typography>
                            <Typography variant="body1">Membership Tier: {visitor.membershipTier}</Typography>
                            <Typography variant="body1">Is Admin: {visitor.isAdmin ? 'Yes' : 'No'}</Typography>
                            <Typography variant="body1">Email: {visitor.email}</Typography>

                            <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
                                <CustomButton
                                    onClick={() => handleDelete(visitor._id)}
                                    color="secondary"
                                    disabled={deleteLoading}
                                >
                                    {deleteLoading ? 'Deleting...' : 'Delete'}
                                </CustomButton>
                            </Box>
                        </Box>
                    ))}
                </Box>
            ) : (
                // Table Layout for larger screens (responsive)
                <TableContainer component={Paper} sx={{ overflowX: 'auto', border: 1, borderRadius: 2 }}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', border: 1 }}>ID</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', border: 1 }}>Username</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', border: 1 }}>Email</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', border: 1 }}>Membership Tier</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', border: 1 }}>Is Admin</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.1rem', border: 1 }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {visitors.map((visitor) => (
                                <TableRow key={visitor._id}>
                                    <TableCell sx={{ border: 1 }}>{visitor._id}</TableCell>
                                    <TableCell sx={{ border: 1 }}>{visitor.username}</TableCell>
                                    <TableCell sx={{ border: 1 }}>{visitor.email}</TableCell>
                                    <TableCell sx={{ border: 1 }}>{visitor.membershipTier}</TableCell>
                                    <TableCell sx={{ border: 1 }}>{visitor.isAdmin ? 'Yes' : 'No'}</TableCell>
                                    <TableCell sx={{ border: 1 }}>
                                        <CustomButton
                                            onClick={() => handleDelete(visitor._id)}
                                            color="secondary"
                                            disabled={deleteLoading}
                                        >
                                            {deleteLoading ? 'Deleting...' : 'Delete'}
                                        </CustomButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {/* Confirmation Dialog */}
            <ConfirmDialog
                open={openDialog}
                onClose={cancelDelete}
                onConfirm={confirmDelete}
                title="Confirm Deletion"
                message="Are you sure you want to delete this visitor? This action cannot be undone."
            />
        </Container>
    );
}
