const ROUTES = {
    ROOT: "/", // Homepage route
    ABOUT: "/about", // About page route
    EXHIBITS: "/exhibits", // All exhibits page route
    EXHIBIT_INFO: "/exhibit-info", // All exhibits page route
    ADD_EXHIBIT: "/add-exhibit", // Add new exhibit route
    EDIT_EXHIBIT: "/edit-exhibit", // Edit exhibit route (without dynamic id here)
    ERROR: "*", // Fallback route for non-existent paths
};

export default ROUTES;
