import React, { useEffect } from "react";
import { Typography, Container, Card, CardContent, Avatar, Grid, Box } from "@mui/material";
import { getUser } from "../../services/LocalStorageService";
import useGetVisitorById from "../hooks/useVisitorDataById";
import Loader from "../../general/Loader";
import PageHeader from "../../general/PageHeader";
import CustomButton from "../../general/CustomButton";
import Error from "../../general/Error";
export default function ProfilePage() {
    const user = getUser();  // Decode the token and get the user data (id, etc.)
    const { visitor, loading, error, fetchVisitorById } = useGetVisitorById();
    useEffect(() => {
        if (user && !visitor) {
            fetchVisitorById(user._id);
        }
    }, [user, visitor, fetchVisitorById]);
    if (loading) return <Loader />;
    if (error) {
        const errorMessage = typeof error === "string" ? error : error.message || "An unknown error occurred.";
        return <Error errorMessage={errorMessage} />;
    }
    if (!visitor) return <Error errorMessage="Visitor not found." />;
    return (
        <Container><PageHeader
            title={`Welcome to Your Profile, ${visitor.name.first}!`}
            subtitle={`View and update your personal details`}
        />
            {/* Profile Information */}
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Box display="flex" alignItems="center" mb={3}>
                        <Avatar
                            alt={`${visitor.image?.alt}`}
                            src={visitor.image?.url || "/images/avatar.png"}
                            sx={{ width: 100, height: 100, mr: 2, borderRadius: '50%' }}
                        />
                        <Box>
                            <Typography variant="h5">{`${visitor.name.first} ${visitor.name.middle} ${visitor.name.last}`}</Typography>
                            <Typography variant="body1" color="textSecondary">{visitor.username}</Typography>
                        </Box>
                    </Box>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1"><strong>Email:</strong> {visitor.email}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1"><strong>Phone:</strong> {visitor.phone || "N/A"}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1"><strong>Membership Tier:</strong> {visitor.membershipTier}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1"><strong>Admin:</strong> {visitor.isAdmin ? "Yes" : "No"}</Typography>
                        </Grid>
                    </Grid>

                    <Box display="flex" justifyContent="flex-end" mt={3}>
                        <CustomButton
                            variant="contained"
                            color="secondary"
                            onClick={() => window.location.href = "/profile/edit"}
                        >
                            Edit Profile
                        </CustomButton>
                    </Box>
                </CardContent>
            </Card>
            {/* Preferred Animals Section */}
            <Box mt={4}>
                <Typography variant="h6" mb={2}>
                    Preferred Animals
                </Typography>

                {/* Display Animal Cards */}
                <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, alignItems: 'stretch' }}>
                </Container>
            </Box></Container>
    )
}
