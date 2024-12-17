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
    [ROUTES.ADMIN]: {
        backRoute: ROUTES.ROOT, // Always goes back to Home page
    },
    [ROUTES.LOGIN]: {
        canGoBackTo: [ROUTES.ROOT, ROUTES.SIGNUP], // Can only go back to Home or Signup pages
    },
    [ROUTES.SIGNUP]: {
        canGoBackTo: [ROUTES.ROOT, ROUTES.LOGIN], // Can only go back to Home or Login pages
    },

};

export default navigationHierarchy;
