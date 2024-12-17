import ROUTES from "./routerModel";

const navigationHierarchy = {
    [ROUTES.ROOT]: {
        noBackButtonRoutes: [ROUTES.ROOT, ROUTES.ERROR], // Pages with no back button
    },
    [ROUTES.ABOUT]: {
        backRoute: ROUTES.ROOT, // Always goes back to Home page
    },
    [ROUTES.MAP]: {
        backRoute: ROUTES.ROOT, // Always goes back to Home page
    },

};

export default navigationHierarchy;
