const normalizeEditProfile = (editProfileData) => {
    return {
        name: {
            first: profileData.first,
            middle: profileData.middle || "",
            last: profileData.last,
        },
        phone: editProfileData.phone || "", // Default to empty string if not provided
        image: {
            url: editProfileData.image?.url || "", // Default to empty string if no image
            alt: editProfileData.image?.alt || "", // Default to empty string if no alt text
        },
    };
};

export default normalizeEditProfile;
