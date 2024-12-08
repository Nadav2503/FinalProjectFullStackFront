import React, { useEffect } from "react";
import { getUser } from "../../services/LocalStorageService";
import Loader from "../../general/Loader";
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
        <div>ProfilePage</div>
    )
}
