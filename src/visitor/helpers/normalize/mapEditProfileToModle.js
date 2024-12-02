const mapEditProfileToModel = (profileData) => {
    return {
        firstName: profileData.firstName,
        middleName: profileData.middleName || "", // Default to empty string if middle name is not provided
        lastName: profileData.lastName,
        phone: profileData.phone || "", // Default to empty string if phone is not provided
        imageUrl: profileData.image?.url || "", // Default to empty string if no image URL is provided
        imageAlt: profileData.image?.alt || "", // Default to empty string if no image alt text is provided
    };
};

export default mapEditProfileToModel;
