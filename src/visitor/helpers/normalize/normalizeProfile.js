const normalizeProfile = (profileData) => {
    return {
        name: `${profileData.firstName} ${profileData.middleName ? profileData.middleName + " " : ""}${profileData.lastName}`, // Full name
        username: profileData.username, // The username
        email: profileData.email, // The email address
        phone: profileData.phone || "", // Default to empty string if phone is not provided
        image: {
            url: profileData.image?.url || "/images/placeholderVisitorPicture.png", // Default visitor image
            alt: profileData.image?.alt || "Default visitor image", // Default alt text
        },
        membershipTier: profileData.membershipTier || "Tier 1 - Explorer", // Default to Tier 1 if not provided
        isAdmin: profileData.isAdmin || false, // Default to false if not provided
        preferredAnimals: profileData.preferredAnimals || [], // Default to empty array if no preferred animals
    };
};

export default normalizeProfile;
