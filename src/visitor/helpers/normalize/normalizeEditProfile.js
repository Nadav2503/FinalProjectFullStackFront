const normalizeEditProfile = (editProfileData) => {
    return {
        firstName: editProfileData.firstName,
        middleName: editProfileData.middleName || "", // Default to empty string if not provided
        lastName: editProfileData.lastName,
        phone: editProfileData.phone || "", // Default to empty string if not provided
        image: {
            url: editProfileData.image?.url || "", // Default to empty string if no image
            alt: editProfileData.image?.alt || "", // Default to empty string if no alt text
        },
    };
};

export default normalizeEditProfile;
