export const filterExhibitsByStatus = (exhibits, status) =>
    exhibits.filter((exhibit) => exhibit.status === status);

export const filterExhibitsByLocation = (exhibits, location) =>
    exhibits.filter((exhibit) => exhibit.location === location);

export const searchExhibitsByName = (exhibits, searchTerm) =>
    exhibits.filter((exhibit) =>
        exhibit.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
