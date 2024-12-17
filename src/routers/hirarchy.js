import ROUTES from "./routerModel";

const navigationHierarchy = {
    [ROUTES.ROOT]: {
        noBackButtonRoutes: [ROUTES.ROOT, ROUTES.ERROR], // Pages with no back button
    },

};

export default navigationHierarchy;
