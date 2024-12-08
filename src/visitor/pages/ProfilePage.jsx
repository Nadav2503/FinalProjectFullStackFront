import React from "react";
import { getUser } from "../../services/LocalStorageService";

export default function ProfilePage() {
    const user = getUser();  // Decode the token and get the user data (id, etc.)
    const { visitor, loading, error, fetchVisitorById } = useGetVisitorById();
    return (
        <div>ProfilePage</div>
    )
}
