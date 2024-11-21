const normalizeExhibit = (exhibit) => {
    return {
        name: exhibit.name,
        description: exhibit.description,
        location: exhibit.location,
        status: exhibit.status || 'open', // Default to 'open' if not provided
        capacity: exhibit.animals ? exhibit.animals.length : 0, // Calculate based on animals array length
        animals: exhibit.animals || [], // Default to an empty array if not provided
    };
};

export default normalizeExhibit;
