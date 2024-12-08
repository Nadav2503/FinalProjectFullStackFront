import React, { useEffect } from "react";
import { getUser } from "../../services/LocalStorageService";

export default function ProfilePage() {
    const user = getUser();  // Decode the token and get the user data (id, etc.)
    const { visitor, loading, error, fetchVisitorById } = useGetVisitorById();
    useEffect(() => {
        if (user && !visitor) {
            fetchVisitorById(user._id);
        }
    }, [user, visitor, fetchVisitorById]);
    return (
        <div>ProfilePage</div>
    )
}
