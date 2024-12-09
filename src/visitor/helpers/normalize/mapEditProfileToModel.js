const mapEditProfileToModel = (profileData) => {
    return {
        first: profileData.name?.first,
        middle: profileData.name?.middle || "",  // Default empty string if no middle name
        last: profileData.name?.last,
        phone: profileData.phone || "",  // Default empty string if no phone number
        imageUrl: profileData.image?.url || "/images/placeholderVisitorPicture.png",  // Default image URL
        imageAlt: profileData.image?.alt || "Default visitor image",  // Default alt text
    };
};

export default mapEditProfileToModel;
