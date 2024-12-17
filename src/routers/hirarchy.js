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
    [ROUTES.EXHIBITS]: {
        backRoute: ROUTES.MAP, // Always goes back to Map page
    },
    [ROUTES.ADD_REVIEW]: {
        canGoBackTo: ['previousPage'], // Goes back to the page it was before (Exhibit List/Exhibit Details)
    },

};

export default navigationHierarchy;
