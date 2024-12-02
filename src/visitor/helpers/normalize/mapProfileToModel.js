const mapProfileToModel = (profileData) => {
    return {
        firstName: profileData.firstName,
        middleName: profileData.middleName || "", // Default to empty string if middle name is not provided
        lastName: profileData.lastName,
        username: profileData.username,
        email: profileData.email, // Including email as part of the profile model
        phone: profileData.phone || "", // Default to empty string if phone is not provided
        imageUrl: profileData.image?.url || "/images/placeholderVisitorPicture.png", // Default to placeholder if no image URL
        imageAlt: profileData.image?.alt || "Default visitor image", // Default alt text
        membershipTier: profileData.membershipTier || "Tier 1 - Explorer", // Default to Tier 1
        isAdmin: profileData.isAdmin || false, // Default to false if not provided
        preferredAnimals: profileData.preferredAnimals || [], // Ensure preferred animals are included
    };
};

export default mapProfileToModel;