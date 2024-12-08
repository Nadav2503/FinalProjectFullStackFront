import React, { useEffect } from "react";
import { getUser } from "../../services/LocalStorageService";
import Loader from "../../general/Loader";
import Error from "../../general/Error";
import { Card, CardContent, Container } from "@mui/material";
import PageHeader from "../../general/PageHeader";
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

                    </Grid>
                </CardContent>
            </Card></Container>
    )
}
